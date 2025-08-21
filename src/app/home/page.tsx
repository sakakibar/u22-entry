"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { Calendar } from "../../components/Calendar";
import styles from "./Home.module.css";
import DiaryModal from "../../components/DiaryModal";
import Image from "next/image";
import { useRouter } from "next/navigation";


{/* 今日の評価 */}
type StarDisplayProps = {
  value: number;
  max?: number;
};

export function StarDisplay({ value, max = 5 }: StarDisplayProps) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {Array.from({ length: max }, (_, i) => i + 1).map((num) => (
        <svg
          key={num}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill={num <= value ? "#FFD700" : "#E0E0E0"}
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 2.25c.47 0 .9.28 1.08.71l2.09 4.62 5.01.73c.45.07.83.37.97.8.14.43.02.91-.3 1.23l-3.63 3.55.86 5.01c.08.45-.1.91-.48 1.18-.38.27-.88.3-1.29.08L12 17.77l-4.48 2.36c-.41.22-.91.19-1.29-.08-.38-.27-.56-.73-.48-1.18l.86-5.01-3.63-3.55c-.33-.32-.44-.8-.3-1.23.14-.43.52-.73.97-.8l5.01-.73 2.09-4.62c.18-.43.61-.71 1.08-.71z" />
        </svg>
      ))}
    </div>
  );
}


type DiaryData = {
  diaryID: string;
  title: string;
  content: string;
  score?: string;
  people?: { label: string; icon: string };
  hobby?: { label: string; icon: string };
  weather?: { label: string; icon: string };
  mood?: { label: string; icon: string };
  imageUrl?: string;
  musics?: { musicID: string; title?: string; music_url: string }[];
  created_at?: string;
};

export default function HomePage() {
  const { data: session, status } = useSession();
  const [editingDiary, setEditingDiary] = useState<DiaryData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [diaryData, setDiaryData] = useState<DiaryData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();
  const [diaryList, setDiaryList] = useState<DiaryData[]>([]);


  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const [modalDate, setModalDate] = useState<string>(
  new Date().toISOString().slice(0, 10)
);
const openModal = () => {
  const today = new Date();
  const defaultDate = selectedDate ?? today.toISOString().slice(0, 10);

  setModalDate(defaultDate);
  setIsModalOpen(true);
};

  const closeModal = () => setIsModalOpen(false);

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
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchDiaryList = async () => {
      try {
        const res = await fetch("/api/diary/list");
        if (!res.ok) throw new Error("日記一覧取得失敗");
        const data = await res.json();
        setDiaryList(data); // ←ここで diaryList にセット
      } catch (err) {
        console.error("日記一覧取得エラー:", err);
      }
    };

    fetchDiaryList();
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      setDiaryData(null);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/diary/list`);
        if (!res.ok) throw new Error("データ取得失敗");
        const data = await res.json();

        const normalizeDate = (input: string | Date): string => {
          const d = new Date(input);
          const yyyy = d.getFullYear();
          const mm = String(d.getMonth() + 1).padStart(2, '0');
          const dd = String(d.getDate()).padStart(2, '0');
          return `${yyyy}-${mm}-${dd}`;
        };

        const matched = data.find((d: any) => normalizeDate(d.created_at) === selectedDate);

        if (matched) {
          let musics = [];
          try {
            const musicRes = await fetch(`/api/music?diaryID=${matched.diaryID}`);
            if (musicRes.ok) {
              const musicData = await musicRes.json();
              // 配列に変換してmapで扱えるように
              musics = Array.isArray(musicData)
                  ? musicData.map((m: any, idx: number) => ({
                    musicID: idx.toString(),
                    title: `音楽 ${idx + 1}`,
                    music_url: m.music_url,
                  }))
                  : [{
                    musicID: "0",
                    title: "",
                    music_url: musicData.music_url,
                  }];
            }
          } catch (err) {
            console.warn("音楽URLの取得に失敗:", err);
          }

          setDiaryData({
            diaryID: matched.diaryID,
            title: matched.title,
            content: matched.content,
            score: matched.score,
            weather: matched.weather,
            people: matched.people,
            hobby: matched.hobby,
            mood: matched.mood,
            created_at: matched.created_at,
            imageUrl: matched.imageUrl,
            musics: musics,
          });
        } else {
          setDiaryData(null);
        }
      } catch (err: any) {
        if (err.message === "unauthorized") {
          setError("ログインしてください");
        } else {
          setError("日記の取得に失敗しました");
        }
        setDiaryData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  return (
      <main className={styles.pageWrapper}>

        <button className={styles.floatingButton} onClick={openModal}>
          日記を書く
        </button>

        <div className={styles.mainContent}>
          <div className={styles.calendarSection}>
            <Calendar onDateSelect={setSelectedDate} />

            {isModalOpen && (
                <DiaryModal
                    onClose={closeModal}
                    createdDate={modalDate}
                    initialData={editingDiary}
                    diaryList={diaryList}
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
                                </div>
                            )}

                            {diaryData.musics?.length ? (
                                diaryData.musics.map(music => (
                                    <div key={music.musicID}>
                                      <p>{music.title}</p>
                                      <audio controls src={music.music_url}></audio>
                                    </div>
                                ))
                            ) : (
                                <p>音楽は登録されていません</p>
                            )}
                    
                            <div className={styles.detailItem}>
                              <span className={styles.label}>満足度</span>
                              <span className={styles.value}>
                                <StarDisplay value={Number(diaryData.score)}/>
                              </span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.label}>天気</span>
                              <span className={styles.value}>
                                {diaryData.weather ? `${diaryData.weather.icon} ${diaryData.weather.label}` : "-"}
                              </span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.label}>誰と過ごした？</span>
                              <span className={styles.value}>
                                {diaryData.people ? `${diaryData.people.icon} ${diaryData.people.label}` : "-"}
                              </span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.label}>何をした？</span>
                              <span className={styles.value}>
                                {diaryData.hobby ? `${diaryData.hobby.icon} ${diaryData.hobby.label}` : "-"}
                              </span>
                            </div>
                            <div className={styles.detailItem}>
                              <span className={styles.label}>どんな一日だった？</span>
                              <span className={styles.value}>
                                {diaryData.mood ? `${diaryData.mood.icon} ${diaryData.mood.label}` : "-"}
                              </span>
                            </div>
                            <div className={styles.textdetailItem}>
                              <span className={styles.textlabel}>タイトル</span>
                              <span className={styles.textvalue}>{diaryData.title}</span>
                            </div>
                            <div className={styles.textdetailItem}>
                              <span className={styles.textlabel}>本文</span>
                              <span className={styles.textvalue}>{diaryData.content}</span>
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
