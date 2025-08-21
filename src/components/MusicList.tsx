"use client";
import React, { useEffect, useState } from "react";
//import styles from "./styles/MusicList.module.css";
type Props = {
    diaryID: string;
};

export default function MusicPlayer({ diaryID }: Props) {
    const [musicUrl, setMusicUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const res = await fetch(`/api/music?diaryID=${diaryID}`);
                if (!res.ok) throw new Error("音楽リスト取得エラー");
                const data = await res.json();
                console.log("音楽データ:",data);
                setMusicUrl(data.music_url);
            } catch (err) {
                console.error("music fetch error:", err);
                setError("音楽リストの取得に失敗しました");
            }
        };

        fetchMusic(); // ← 呼び出し忘れ注意
    }, [diaryID]);

    if (error) return <p>{error}</p>;
    if (!musicUrl) return <p>音楽を読み込み中...</p>;

    return (
        <div>
            <h2>生成された音楽</h2>
            <audio controls src={musicUrl} />
        </div>
    );
}
