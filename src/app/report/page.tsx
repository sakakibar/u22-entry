// import Link from 'next/link';
// import styles from './Report.module.css';

// export default function ReportPage() {
//   return (
//     <main className="container">
//       <h1 className="title">Report</h1>
//     </main>
//   );
// }

// デモデータ（後で実データと置き換える）
"use client";
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, CartesianGrid,
} from "recharts";

const satisfactionOptions = [1, 2, 3, 4, 5];

const weatherOptions = [
  { label: "晴れ", icon: "☀️", color: "#FFD700" },
  { label: "くもり", icon: "☁️", color: "#A9A9A9" },
  { label: "雨", icon: "🌧️", color: "#1E90FF" },
  { label: "雪", icon: "❄️", color: "#ADD8E6" },
  { label: "雷", icon: "⚡", color: "#FFA500" },
  { label: "風", icon: "🌬️", color: "#7FFFD4" },
  { label: "霧", icon: "🌫️", color: "#D3D3D3" },
  { label: "その他", icon: "❔", color: "#C0C0C0" },
];

const emotionOptions = [
  { label: "最高", icon: "😆", color: "#FF69B4" },
  { label: "嬉しい", icon: "😊", color: "#FFB6C1" },
  { label: "楽しい", icon: "😄", color: "#FFA07A" },
  { label: "安心", icon: "😌", color: "#90EE90" },
  { label: "普通", icon: "😐", color: "#D3D3D3" },
  { label: "疲れた", icon: "😮‍💨", color: "#B0C4DE" },
  { label: "悲しい", icon: "😢", color: "#6495ED" },
  { label: "不安", icon: "😟", color: "#FF6347" },
  { label: "怒り", icon: "😡", color: "#DC143C" },
  { label: "最悪", icon: "😖", color: "#8B0000" },
  { label: "その他", icon: "❔", color: "#C0C0C0" },
];

// デモ日記データ（scoreは数字、weatherとmoodはラベル）
const demoDiaryData = [
  { date: "2025-08-01", score: 5, weather: "晴れ", mood: "楽しい" },
  { date: "2025-08-02", score: 4, weather: "くもり", mood: "嬉しい" },
  { date: "2025-08-03", score: 3, weather: "雨", mood: "疲れた" },
  { date: "2025-08-04", score: 2, weather: "雷", mood: "悲しい" },
  { date: "2025-08-05", score: 1, weather: "雪", mood: "不安" },
  { date: "2025-08-06", score: 3, weather: "晴れ", mood: "楽しい" },
  { date: "2025-08-07", score: 4, weather: "風", mood: "安心" },
];

// 割合を計算する関数
function calcRatio(data: any[], options: any[], key: string) {
  const totalCount = data.length;
  const counts: Record<string, number> = {};
  options.forEach((opt) => (counts[opt.label] = 0));
  data.forEach((d) => {
    if (d[key] in counts) counts[d[key]]++;
    else counts["その他"]++;
  });

  // 割合（%）
  const ratioData: Record<string, number> = {};
  options.forEach((opt) => {
    ratioData[opt.label] = totalCount === 0 ? 0 : (counts[opt.label] / totalCount) * 100;
  });
  return ratioData;
}

export default function DiaryGraphs() {
  // 満足度の日付推移（折れ線グラフ）
  const lineData = demoDiaryData.map(({ date, score }) => ({ date, score }));

  // 天気と感情の割合データ
  const weatherRatio = calcRatio(demoDiaryData, weatherOptions, "weather");
  const moodRatio = calcRatio(demoDiaryData, emotionOptions, "mood");

  // 積み上げ棒グラフ用データ（1行にまとめる）
  const weatherStackData = weatherOptions.reduce((acc, opt) => {
    acc[opt.label] = weatherRatio[opt.label];
    return acc;
  }, {} as Record<string, number>);

  const moodStackData = emotionOptions.reduce((acc, opt) => {
    acc[opt.label] = moodRatio[opt.label];
    return acc;
  }, {} as Record<string, number>);

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
      <h2>満足度の推移（折れ線グラフ）</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineData} margin={{ top: 20, bottom: 20 }}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis domain={[1, 5]} allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#a4c3a6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

      <h2 style={{ marginTop: 40 }}>天気の割合（帯グラフ）</h2>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart
          data={[weatherStackData]}
          layout="vertical"
          margin={{ left: 20, right: 20 }}
          stackOffset="expand"
        >
          <XAxis type="number" hide domain={[0, 1]} />
          <YAxis type="category" dataKey="" hide />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
          {weatherOptions.map((opt) => (
            <Bar
              key={opt.label}
              dataKey={opt.label}
              stackId="a"
              fill={opt.color}
              isAnimationActive={false}
              name={`${opt.icon} ${opt.label}`}
            />
          ))}
          <Legend />
        </BarChart>
      </ResponsiveContainer>

      <h2 style={{ marginTop: 40 }}>感情の割合（帯グラフ）</h2>
      <ResponsiveContainer width="100%" height={60}>
        <BarChart
          data={[moodStackData]}
          layout="vertical"
          margin={{ left: 20, right: 20 }}
          stackOffset="expand"
        >
          <XAxis type="number" hide domain={[0, 1]} />
          <YAxis type="category" dataKey="" hide />
          <Tooltip formatter={(value: number) => `${value.toFixed(1)}%`} />
          {emotionOptions.map((opt) => (
            <Bar
              key={opt.label}
              dataKey={opt.label}
              stackId="a"
              fill={opt.color}
              isAnimationActive={false}
              name={`${opt.icon} ${opt.label}`}
            />
          ))}
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
