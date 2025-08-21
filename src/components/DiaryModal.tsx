"use client";

import React, { useEffect, useState } from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
    PieChart, Pie, Cell
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A", "#FF66CC", "#33CC99", "#FF3333"];

type DiaryData = {
    score: string | number;
    weather?: string | { label: string; icon: string };
    people?: string | { label: string; icon: string };
    hobby?: string | { label: string; icon: string };
    mood?: string | { label: string; icon: string };
};

export default function DiarySatisfactionReport() {
    const [chartData, setChartData] = useState<{ score: number; percentage: number }[]>([]);
    const [extraCharts, setExtraCharts] = useState<{ [key: string]: { name: string; value: number }[] }>({});
    const [loading, setLoading] = useState(true);
    const [average, setAverage] = useState(0); // 平均値

    useEffect(() => {
        const fetchDiaryData = async () => {
            try {
                const res = await fetch("/api/report");
                if (!res.ok) throw new Error("APIエラー");
                const { data } = await res.json();

                if (!data || data.length === 0) {
                    setChartData([]);
                    return;
                }

                // 満足度集計
                const counts = [0, 0, 0, 0, 0];
                let totalScore = 0;
                data.forEach((d: DiaryData) => {
                    const score = Number(d.score);
                    if (score >= 1 && score <= 5) counts[score - 1]++;
                    totalScore += score;
                });

                setChartData(
                    counts.map((count, i) => ({
                        score: i + 1,
                        percentage: (count / data.length) * 100,
                    }))
                );
                setAverage(totalScore / data.length);

                // 項目集計用関数（Option対応）
                const countOptions = (options: string[], key: keyof DiaryData) =>
                    options.map(opt => ({
                        name: opt,
                        value: data.filter((d: DiaryData) => {
                            const val = d[key];
                            if (!val) return false;
                            if (typeof val === "string") return val === opt;
                            if (typeof val === "object" && "label" in val) return val.label === opt;
                            return false;
                        }).length,
                    }));

                setExtraCharts({
                    weather: countOptions(
                        ["晴れ", "くもり", "雨", "雪", "雷", "風", "霧", "その他"],
                        "weather"
                    ),
                    people: countOptions(
                        ["一人","家族","パートナー","友人","同僚","子ども","ペット","その他"],
                        "people"
                    ),
                    hobby: countOptions(
                        ["スポーツ","読書","音楽","ゲーム","料理","旅行","映画・ドラマ","アート・創作","写真","アウトドア","その他"],
                        "hobby"
                    ),
                    emotion: countOptions(
                        ["最高","嬉しい","楽しい","安心","普通","疲れた","悲しい","不安","怒り","最悪","その他"],
                        "mood"
                    ),
                });

            } catch (err) {
                console.error("データ取得エラー:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDiaryData();
    }, []);

    if (loading) return <p>読み込み中...</p>;
    if (chartData.length === 0) return <p>この月のデータがありません。</p>;

    return (
        <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
            {/* 満足度 */}
            <h2>今月の満足度割合</h2>
            <p>平均スコア: {average.toFixed(1)}</p>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 30, right: 30, bottom: 50, left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="score"
                        height={50}
                        label={{ value: "スコア", position: "outsideBottom", offset: 0 }}
                    />
                    <YAxis unit="%" label={{ value: "割合", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
                    <Legend />
                    <Bar dataKey="percentage" fill="#82ca9d" name="割合" />
                </BarChart>
            </ResponsiveContainer>

            {/* 円グラフ */}
            <h2 style={{ marginTop: 40 }}>今月の各項目</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
                {[
                    { key: "weather", title: "天気" },
                    { key: "people", title: "一緒にいた人" },
                    { key: "hobby", title: "趣味" },
                    { key: "emotion", title: "感情" },
                ].map(({ key, title }) => (
                    <div key={key}>
                        <h3>{title}</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={extraCharts[key].map(entry => ({
                                        ...entry,
                                        percentage: ((entry.value / extraCharts[key].reduce((sum, e) => sum + e.value, 0)) * 100),
                                    }))}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    labelLine={true}
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                                >
                                    {extraCharts[key]?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: number, name: string) => {
                                    const percent = (value / extraCharts[key].reduce((sum, e) => sum + e.value, 0)) * 100;
                                    return [`${percent.toFixed(1)}%`, name];
                                }} />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}
