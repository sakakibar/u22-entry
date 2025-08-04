"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { Calendar } from "../components/Calendar";
import { SearchBar } from "../components/Searchbar";
import styles from "../styles/HomePage.module.css";
import DiaryModal from "../components/DiaryModal";
import Image from "next/image";

type DiaryData = {
  diaryID: string;
  title: string;
  content: string;
  score?: string;
  weather?: string;
  mood?: string;
  imageUrl?: string;
  musicUrl?: string;
  created_at?: string;
};

export default function HomePage() {
  const { data: session } = useSession();
  const [editingDiary, setEditingDiary] = useState<DiaryData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [diaryData, setDiaryData] = useState<DiaryData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const openModal = () => {
    setEditingDiary(null);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (diaryID: string) => {
    if (!confirm("この日記を削除しますか？")) return;

    try {
      const res = await fetch("/api/diary", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ diaryID }),
      });
      const result = await res.json();
      if (result.success) {
        alert("日記を削除しました");
        setDiaryData(null);
      } else {
        alert("削除に失敗しました: " + result.error);
      }
    } catch (err) {
      console.error("削除エラー:", err);
      alert("削除に失敗しました。");
    }
  };

  const handleEdit = (data: DiaryData) => {
    setEditingDiary(data);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!selectedDate) {
      setDiaryData(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch(`/api/diary/list`)
      .then(res => {
        if (!res.ok) throw new Error("データ取得失敗");
        return res.json();
      })
      .then(data => {
        const normalizeDate = (input: string | Date): string => {
          const d = new Date(input);
          const yyyy = d.getFullYear();
          const mm = String(d.getMonth() + 1).padStart(2, '0');
          const dd = String(d.getDate()).padStart(2, '0');
          return `${yyyy}-${mm}-${dd}`;
        };

        const matched = data.find((d: any) => normalizeDate(d.created_at) === selectedDate);

        if (matched) {
          setDiaryData({
            diaryID: matched.diaryID,
            title: matched.title,
            content: matched.content,
            score: matched.score,
            weather: matched.weather,
            mood: matched.mood,
            created_at: matched.created_at,
            imageUrl: matched.imageUrl,
          });
        } else {
          setDiaryData(null);
        }
      })
      .catch((err) => {
        if (err.message === "unauthorized") {
          setError("ログインしてください");
        } else {
          setError("日記の取得に失敗しました");
        }
        setDiaryData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedDate]);

  return (
    <main className={styles.pageWrapper}>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      <button className={styles.floatingButton} onClick={openModal}>
        日記を書く
      </button>

      <div className={styles.mainContent}>
        <div className={styles.calendarSection}>
          <Calendar onDateSelect={setSelectedDate} />

          {isModalOpen && (
            <DiaryModal
              onClose={closeModal}
              initialData={editingDiary}
              onUpdate={updatedDiary => {
                setDiaryData(updatedDiary);
                setEditingDiary(null);
                setIsModalOpen(false);

                const date = updatedDiary.created_at?.slice(0, 10);
                if (date) {
                  setSelectedDate(date);
                } else if (selectedDate) {
                  setSelectedDate(null);
                  setTimeout(() => setSelectedDate(selectedDate), 0);
                }
              }}
            />
          )}
        </div>
        {session && (
        <div className={styles.detailPanel}>
          {selectedDate ? (
            <>
              <h2>{selectedDate}</h2>

              {isLoading ? (
                <p>読み込み中...</p>
              ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
              ) : diaryData ? (
                <>
                  {diaryData.imageUrl && (
                    <div className={styles.imageWrapper}>
                      <Image
                        src={diaryData.imageUrl}
                        alt="日記画像"
                        width={600}
                        height={400}
                        className={styles.diaryImage}
                        onError={() => {
                          console.error("画像の読み込みに失敗:", diaryData.imageUrl);
                        }}
                      />

                      {/* 音楽プレイヤー */}
                      {diaryData.musicUrl && (
                        <div className={styles.audioPlayer}>
                          <audio
                            ref={audioRef}
                            src={diaryData.musicUrl}
                            controls
                            preload="none"
                            onEnded={() => {
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  <div className={styles.detailItem}>
                    <span className={styles.label}>満足度</span>
                    <span className={styles.value}>{diaryData.score}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>天気</span>
                    <span className={styles.value}>{diaryData.weather}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>どんな一日だった？</span>
                    <span className={styles.value}>{diaryData.mood}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>タイトル</span>
                    <span className={styles.value}>{diaryData.title}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>本文</span>
                    <span className={styles.value}>{diaryData.content}</span>
                  </div>

                  <div className={styles.iconButtonGroup}>
                    <button
                      onClick={() => handleEdit(diaryData)}
                      aria-label="編集"
                      className={styles.iconButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                      </svg>
                    </button>

                    <button
                      onClick={() => handleDelete(diaryData.diaryID)}
                      aria-label="削除"
                      className={styles.iconButton}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p>この日に登録された日記はありません。</p>
                  <button className={styles.button} onClick={openModal}>
                    日記を登録する
                  </button>
                </>
              )}
            </>
          ) : (
            <p>日付を選択すると詳細が表示されます。</p>
          )}
        </div>
        )}
      </div>
    </main>
  );
}
