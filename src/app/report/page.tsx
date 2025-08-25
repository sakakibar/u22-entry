"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
    PieChart, Pie, Cell
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE", "#FF6699", "#33CC99", "#FF9933", "#66CCFF", "#FF6666"];

const weatherOptions = ["晴れ", "くもり", "雨", "雪", "雷", "風", "霧", "その他"];
const peopleOptions = ["一人", "家族", "パートナー", "友人", "同僚", "子ども", "ペット", "その他"];
const hobbyOptions = ["スポーツ", "読書", "音楽", "ゲーム", "料理", "旅行", "映画・ドラマ", "アート・創作", "写真", "アウトドア", "その他"];
const emotionOptions = ["最高", "嬉しい", "楽しい", "安心", "普通", "疲れた", "悲しい", "不安", "怒り", "最悪", "その他"];

export default function DiarySatisfactionReport() {
    const { data: session, status } = useSession();
    const [chartData, setChartData] = useState<{ score: number; percentage: number }[]>([]);
    const [extraCharts, setExtraCharts] = useState<{ [key: string]: { name: string; value: number }[] }>({});
    const [loading, setLoading] = useState(true);
    const [average, setAverage] = useState(0);

    useEffect(() => {
        if (status !== "authenticated" || !session?.user?.userID) {
            setLoading(false);
            return;
        }

        const fetchDiaryData = async () => {
            try {
                const userID = session.user.userID;
                const res = await fetch(`/api/report?userID=${userID}`);
                if (!res.ok) throw new Error("APIエラー");
                const { data } = await res.json();

                if (!data || data.length === 0) {
                    setChartData([]);
                    return;
                }

                // 満足度集計
                const counts = [0, 0, 0, 0, 0];
                let totalScore = 0;
                data.forEach((d: any) => {
                    const score = Number(d.score);
                    if (score >= 1 && score <= 5) {
                        counts[score - 1]++;
                        totalScore += score;
                    }
                });
                setChartData(
                    counts.map((count, i) => ({
                        score: i + 1,
                        percentage: (count / data.length) * 100,
                    }))
                );
                setAverage(totalScore / data.length);

                // 円グラフ集計関数
                const countOptions = (options: string[], key: keyof typeof data[0]) =>
                    options.map(opt => ({
                        name: opt,
                        value: data.filter((d: any) => d[key]?.label === opt).length,
                    }));

                setExtraCharts({
                    weather: countOptions(weatherOptions, "weather"),
                    people: countOptions(peopleOptions, "people"),
                    hobby: countOptions(hobbyOptions, "hobby"),
                    emotion: countOptions(emotionOptions, "mood"),
                });

            } catch (err) {
                console.error("データ取得エラー:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDiaryData();
    }, [session, status]);

    if (loading) return <p>読み込み中...</p>;
    if (chartData.length === 0) return <p>この月のデータがありません。</p>;

    // カスタムLegend（全項目表示）
    const renderLegend = (data: { name: string; value: number }[]) => {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
                {data.map((entry, index) => (
                    <div key={`legend-${index}`} style={{ color: COLORS[index % COLORS.length], display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ width: 12, height: 12, backgroundColor: COLORS[index % COLORS.length], display: "inline-block" }}></span>
                        <span>{entry.name} ({entry.value})</span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
            {/* 満足度 */}
            <h2>今月の満足度割合</h2>
            <p>平均スコア: {average.toFixed(1)}</p>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chartData} margin={{ top: 30, right: 30, bottom: 50, left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="score" height={100} label={{ value: "スコア", position: "outsideBottom", offset: 0 }} />
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
                        <ResponsiveContainer width="115%" height={450}>
                            <PieChart>
                                <Pie
                                    data={extraCharts[key]}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent, value }) => value > 0 ? `${name}: ${(percent * 100).toFixed(1)}%` : ""}
                                >
                                    {extraCharts[key].map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.value > 0 ? COLORS[index % COLORS.length] : "#eee"} // 0は薄い灰色
                                        />
                                    ))}
                                </Pie>
                                <Tooltip formatter={(value: number, name: string) => {
                                    const total = extraCharts[key]?.reduce((sum, e) => sum + e.value, 0) || 0;
                                    const percent = total > 0 ? (value / total) * 100 : 0;
                                    return [`${percent.toFixed(1)}%`, name];
                                }} />
                                <Legend content={() => renderLegend(extraCharts[key])}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}
