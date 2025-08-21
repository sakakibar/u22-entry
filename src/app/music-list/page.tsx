"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./MusicList.module.css";

export default function MusicListPage() {
    const [musics, setMusics] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMusics = async () => {
            try {
                const res = await fetch("/api/music/list");
                if (!res.ok) throw new Error("音楽一覧の取得に失敗しました");
                const data = await res.json();
                setMusics(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMusics();
    }, []);

    if (loading) return <p>読み込み中...</p>;

    return (
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2>音楽一覧</h2>
            </div>
            <ul className={styles.list}>
                {musics.length === 0 ? (
                    <p>音楽がまだありません。</p>
                ) : (
                    musics.map((music) => (
                        <li key={music.musicID} className={styles.item}>
                            {/* サムネイル */}
                            <Image
                                src={music.diary?.imageUrl || "/music.png"}
                                alt="サムネ"
                                width={100}
                                height={100}
                                className={styles.thumbnail}
                            />
                            {/* 曲タイトル */}
                            <span className={styles.title}>
                                {music.diary?.title || music.title}
                            </span>
                            {/* 音楽プレイヤー */}
                            <audio controls src={music.music_url} className={styles.audio} />
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
}
