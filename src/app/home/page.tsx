"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Calendar } from "../../components/Calendar";
import styles from "./Home.module.css";
import DiaryModal from "../../components/DiaryModal";
import Image from "next/image";
import { useRouter } from "next/navigation";

type StarDisplayProps = { value: number; max?: number };
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
            >
              <path d="M12 2.25c.47 0 .9.28 1.08.71l2.09 4.62 5.01.73c.45.07.83.37.97.8.14.43.02.91-.3 1.23l-3.63 3.55.86 5.01c.08.45-.1.91-.48 1.18-.38.27-.88.3-1.29.08L12 17.77l-4.48 2.36c-.41.22-.91.19-1.29-.08-.38-.27-.56-.73-.48-1.18l.86-5.01-3.63-3.55c-.33-.32-.44-.8-.3-1.23.14-.43.52-.73.97-.8l5.01-.73 2.09-4.62c.18-.43.61-.71 1.08-.71z" />
            </svg>
        ))}
      </div>
  );
}

export type DiaryData = {
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
  const router = useRouter();

  const [editingDiary, setEditingDiary] = useState<DiaryData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [diaryData, setDiaryData] = useState<DiaryData | null>(null);
  const [diaryList, setDiaryList] = useState<DiaryData[]>([]);
  const [modalDate, setModalDate] = useState<string>(new Date().toISOString().slice(0, 10));

  const normalizeField = (field: any) => {
    if (!field) return null;
    if (typeof field === "string") return { label: field, icon: "❔" };
    return field;
  };

  const openModal = () => {
    setModalDate(selectedDate ?? new Date().toISOString().slice(0, 10));
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

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
        data.forEach((d: DiaryData) => {
          d.created_at = new Date(d.created_at!).toISOString();
        });
        setDiaryList(data);
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

    const diary = diaryList.find((d) => d.created_at?.slice(0, 10) === selectedDate);

    if (diary) {
      setDiaryData({
        ...diary,
        weather: normalizeField(diary.weather),
        people: normalizeField(diary.people),
        hobby: normalizeField(diary.hobby),
        mood: normalizeField(diary.mood),
      });
    } else {
      setDiaryData(null);
    }
  }, [selectedDate, diaryList]);

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
        setDiaryList((prev) => prev.filter((d) => d.diaryID !== diaryID));
        setSelectedDate(null);
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

  return (
      <main className={styles.pageWrapper}>
        <button className={styles.floatingButton} onClick={openModal}>
          日記を書く
        </button>

        <div className={styles.mainContent}>
          <div className={styles.calendarSection}>
            <Calendar onDateSelect={setSelectedDate} diaryList={diaryList} />

            {isModalOpen && (
                <DiaryModal
                    onClose={closeModal}
                    createdDate={modalDate}
                    initialData={editingDiary}
                    diaryList={diaryList}
                    onUpdate={(updatedDiary) => {
                      updatedDiary.created_at = new Date(updatedDiary.created_at).toISOString();
                      setEditingDiary(null);
                      setIsModalOpen(false);

                      setDiaryList((prev) => {
                        const index = prev.findIndex((d) => d.diaryID === updatedDiary.diaryID);
                        if (index >= 0) {
                          const newList = [...prev];
                          newList[index] = updatedDiary;
                          return newList;
                        } else {
                          return [...prev, updatedDiary];
                        }
                      });

                      // 強制的に再描画
                      setSelectedDate(null);
                      setTimeout(() => setSelectedDate(updatedDiary.created_at?.slice(0, 10) || null), 50);

                      window.location.reload();
                    }}
                />
            )}
          </div>

          {session && (
              <div className={styles.detailPanel}>
                {selectedDate ? (
                    <>
                      <h2>{selectedDate}</h2>

                      {diaryData ? (
                          <>
                            {diaryData.imageUrl && (
                                <div className={styles.imageWrapper}>
                                  <Image
                                      src={diaryData.imageUrl}
                                      alt="日記画像"
                                      width={600}
                                      height={400}
                                      className={styles.diaryImage}
                                  />
                                </div>
                            )}

                            {(diaryData.musics || []).map((music) => (
                                <div key={music.musicID}>
                                  <p>{music.title}</p>
                                  <audio controls src={music.music_url}></audio>
                                </div>
                            ))}

                            <div className={styles.detailItem}>
                              <span className={styles.label}>満足度</span>
                              <span className={styles.value}>
                        <StarDisplay value={Number(diaryData.score)} />
                      </span>
                            </div>

                            <div className={styles.detailItem}>
                              <span className={styles.label}>天気</span>
                              <span className={styles.value}>
                        {diaryData.weather
                            ? `${diaryData.weather.icon} ${diaryData.weather.label}`
                            : "-"}
                      </span>
                            </div>

                            <div className={styles.detailItem}>
                              <span className={styles.label}>誰と過ごした？</span>
                              <span className={styles.value}>
                        {diaryData.people
                            ? `${diaryData.people.icon} ${diaryData.people.label}`
                            : "-"}
                      </span>
                            </div>

                            <div className={styles.detailItem}>
                              <span className={styles.label}>何をした？</span>
                              <span className={styles.value}>
                        {diaryData.hobby
                            ? `${diaryData.hobby.icon} ${diaryData.hobby.label}`
                            : "-"}
                      </span>
                            </div>

                            <div className={styles.detailItem}>
                              <span className={styles.label}>どんな一日だった？</span>
                              <span className={styles.value}>
                        {diaryData.mood
                            ? `${diaryData.mood.icon} ${diaryData.mood.label}`
                            : "-"}
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
                                ✏️
                              </button>

                              <button
                                  onClick={() => handleDelete(diaryData.diaryID)}
                                  aria-label="削除"
                                  className={styles.iconButton}
                              >
                                🗑️
                              </button>
                            </div>
                          </>
                      ) : (
                          <p>この日に登録された日記はありません。</p>
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
