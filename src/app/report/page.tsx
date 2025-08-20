"use client";

import React, { useEffect, useState } from "react";
import styles from "./Report.module.css";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
    PieChart, Pie, Cell
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DiarySatisfactionReport() {
    const [chartData, setChartData] = useState<{ score: number; percentage: number }[]>([]);
    const [extraCharts, setExtraCharts] = useState<{ [key: string]: { name: string; value: number }[] }>({});
    const [loading, setLoading] = useState(true);
    const [average, setAverage] = useState(0); //平均値

    useEffect(() => {
        const fetchDiaryData = async () => {
            try {
                const res = await fetch("/api/report");
                if (!res.ok) throw new Error("APIエラー");
                const { data } = await res.json();

                console.log("APIからのデータ:",data);

                if (!data || data.length === 0) {
                    setChartData([]);
                    return;
                }

                // 満足度集計
                const counts = [0, 0, 0, 0, 0];
                let totalScore = 0;
                data.forEach((d: { score: string | number }) => {
                    const score = Number(d.score);
                    if (score >= 1 && score <= 5)
                        counts[score - 1]++;
                        totalScore += score;
                });
                setChartData(
                    counts.map((count, i) => ({
                        score: i + 1,
                        percentage: (count / data.length) * 100,
                    }))
                );

                setAverage(totalScore / data.length); //平均スコア

                // 項目集計用関数
                const countOptions = (options: string[], key: keyof typeof data[0]) =>
                    options.map(opt => ({
                        name: opt,
                        value: data.filter((d: any) => d[key] === opt).length,
                    }));

                setExtraCharts({
                    weather: countOptions(["晴れ", "曇り", "雨", "雪"], "weather"),
                    people: countOptions(["家族", "友人", "同僚", "一人"], "people"),
                    hobby: countOptions(["スポーツ", "読書", "音楽", "ゲーム"], "hobby"),
                    emotion: countOptions(["嬉しい", "悲しい", "怒り", "楽しい"], "mood"),
                });

                console.log("集計後:", {
                    weather: countOptions(["晴れ", "曇り", "雨", "雪"], "weather"),
                    people: countOptions(["家族", "友人", "同僚", "一人"], "people"),
                    hobby: countOptions(["スポーツ", "読書", "音楽", "ゲーム"], "hobby"),
                    emotion: countOptions(["嬉しい", "悲しい", "怒り", "楽しい"], "mood"),
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
            <p>平均スコア: {average.toFixed(1)}</p> {/* ここで平均を表示 */}
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

            {/* 円グラフたち */}
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
                                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`} // ラベルは外側
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