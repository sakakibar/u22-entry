"use client";

import { useState, useEffect } from "react";
import styles from "./styles/DiaryModal.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import supabase from "@/lib/supabase";

type Props = {
  onClose: () => void;
  initialData?: {
    diaryID: string;
    title: string;
    content: string;
    score: string;
    weather: string;
    people: string;
    hobby: string;
    mood: string;
    imageUrl?: string;
    created_at?: string;
  };
  onUpdate?: (updatedDiary: any) => void;
};

export default function DiaryModal({ onClose, initialData, onUpdate }: Props) {
  const { data: session } = useSession();
  const poster = session?.user?.userID;
  const isEditMode = !!initialData;

  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [weather, setWeather] = useState<string | null>(null);
  const [people, setPeople] = useState<string | null>(null);
  const [hobby, setHobby] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const satisfactionOptions = [1, 2, 3, 4, 5];

const weatherOptions = [
  {
    label: "晴れ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFA500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" fill="#FFD93B" />
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
  {
    label: "曇り",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#B0BEC5"
        stroke="#78909C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="16" rx="7" ry="4" />
      </svg>
    ),
  },
  {
    label: "雨",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2196F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="14" rx="7" ry="4" fill="#90CAF9" />
        <line x1="8" y1="18" x2="8" y2="22" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="16" y1="18" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    label: "雪",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#29B6F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="16" x2="20" y2="16" />
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="6" y1="18" x2="18" y2="6" />
      </svg>
    ),
  },
  {
    label: "雷",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FBC02D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="#FFF176" />
      </svg>
    ),
  },
  {
    label: "嵐",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#424242"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M6 14a4 4 0 0 1 8 0h1a3 3 0 0 1 0 6H6a4 4 0 0 1 0-8h1z"
          fill="#757575"
          stroke="none"
        />
        <path
          d="M13 10l-3 5h2l-1 5 5-8h-3z"
          fill="#FFEB3B"
          stroke="#FFEB3B"
          strokeWidth="1"
        />
      </svg>
    ),
  },
];


const peopleOptions = [
  {
    label: "家族",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M2 21v-2a5 5 0 015-5h2a5 5 0 015 5v2H2z" />
        <path d="M14 21v-2a5 5 0 015-5h1a3 3 0 013 3v4H14z" />
      </svg>
    )
  },
  {
    label: "友人",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="6" r="3" />
        <circle cx="15" cy="6" r="3" />
        <path d="M4 20v-1a5 5 0 015-5h2a5 5 0 015 5v1H4z" />
      </svg>
    )
  },
  {
    label: "同僚",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#2196F3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6" r="3" />
        <path d="M6 20v-2a6 6 0 0112 0v2H6z" />
        <path d="M3 20v-1a3 3 0 013-3h1" />
        <path d="M21 20v-1a3 3 0 00-3-3h-1" />
      </svg>
    )
  },
  {
    label: "一人",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#9E9E9E" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="6" r="3" />
        <path d="M6 20v-2a6 6 0 0112 0v2H6z" />
      </svg>
    )
  }
];
const hobbyOptions = [
  {
    label: "スポーツ",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FF5722" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="#FFCDD2" />
        <path d="M12 2v20M2 12h20" stroke="black" strokeWidth="1" />
      </svg>
    )
  },
  {
    label: "読書",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#8E24AA" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4h18v16H3z" fill="#CE93D8" stroke="black" strokeWidth="1" />
        <path d="M12 4v16" stroke="black" strokeWidth="1" />
      </svg>
    )
  },
  {
    label: "音楽",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#03A9F4" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3v12a3 3 0 11-2-2.83V7l10-2v8a3 3 0 11-2-2.83V3H9z" fill="#B3E5FC" />
      </svg>
    )
  },
  {
    label: "ゲーム",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#607D8B" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="16" height="12" rx="2" ry="2" fill="#CFD8DC" />
        <circle cx="8" cy="12" r="1" />
        <path d="M14 11h2v2h-2zM16 13v2M16 11v-2" stroke="black" strokeWidth="1" />
      </svg>
    )
  }
];
const emotionOptions = [
  {
    label: "嬉しい",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFEB3B" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="1.5" fill="#000" />
        <circle cx="16" cy="10" r="1.5" fill="#000" />
        <path d="M8 16c1.33 1 4.67 1 6 0" stroke="#000" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    label: "悲しい",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#90A4AE" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="1.5" fill="#000" />
        <circle cx="16" cy="10" r="1.5" fill="#000" />
        <path d="M8 17c1.33-1 4.67-1 6 0" stroke="#000" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    label: "怒り",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#F44336" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 10L8 9M15 10l1-1" stroke="#000" strokeWidth="1.5" />
        <path d="M8 17c1.33-1 4.67-1 6 0" stroke="#000" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    label: "楽しい",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="10" r="1.5" fill="#000" />
        <circle cx="16" cy="10" r="1.5" fill="#000" />
        <path d="M7 15c1.5 2 6.5 2 8 0" stroke="#000" strokeWidth="1.5" />
      </svg>
    )
  }
];

  // ⭐ 編集モード：初期データをセット
  useEffect(() => {
    if (initialData) {
      setSatisfaction(Number(initialData.score));
      setWeather(initialData.weather);
      setPeople(initialData.people);
      setHobby(initialData.hobby);
      setEmotion(initialData.mood);
      setTitle(initialData.title);
      setContent(initialData.content);
      setPreviewUrl(initialData.imageUrl ?? null);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!poster && !isEditMode) {
      setError("ログインしていません");
      return;
    }

    if (
      satisfaction === null ||
      !weather ||
      !people ||
      !hobby ||
      !emotion ||
      title.trim() === "" ||
      content.trim() === ""
    ) {
      setError("全ての項目を入力してください");
      return;
    }

    setError(null);
    setLoading(true);

    let imageUrl = previewUrl;

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${poster}_${Date.now()}.${fileExt}`;
      const filePath = `private/${poster}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("diary-images")
        .upload(filePath, imageFile);

      if (uploadError) {
        console.error("画像アップロード失敗:", uploadError.message);
        setError("画像のアップロードに失敗しました");
        setLoading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("diary-images")
        .getPublicUrl(filePath);
      imageUrl = publicUrlData?.publicUrl ?? null;
    }

    try {
      const res = await fetch("/api/diary", {
        method: isEditMode ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          diaryID: initialData?.diaryID,
          poster,
          title,
          content,
          score: satisfaction.toString(),
          weather,
          people,
          hobby,
          mood: emotion,
          imageUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "登録に失敗しました");
        return;
      }

      alert(isEditMode ? "日記を更新しました！" : "日記を登録しました！");

      if (onUpdate) {
        onUpdate({
          diaryID: data.diaryID ?? initialData?.diaryID ?? "",
          title,
          content,
          score: satisfaction.toString(),
          weather,
          people,
          hobby,
          mood: emotion,
          imageUrl,
          created_at: initialData?.created_at ?? new Date().toISOString(),
        });
      }

      onClose();
    } catch (err) {
      console.error(err);
      setError("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeIcon} onClick={onClose}>
          ×
        </button>
        <h2>{isEditMode ? "日記編集フォーム" : "日記登録フォーム"}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <div className={styles.label}>今日の満足度</div>
            <div className={styles.optionsRow}>
              {satisfactionOptions.map((num) => (
                <span
                  key={num}
                  onClick={() => setSatisfaction(num)}
                  className={`${styles.star} ${
                    satisfaction !== null && num <= satisfaction
                      ? styles.filled
                      : ""
                  }`}
                  style={{ cursor: "pointer", marginRight: "5px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill={
                      satisfaction !== null && num <= satisfaction
                        ? "#FFD700"
                        : "#E0E0E0"
                    }
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 2.25c.47 0 .9.28 1.08.71l2.09 4.62 5.01.73c.45.07.83.37.97.8.14.43.02.91-.3 1.23l-3.63 3.55.86 5.01c.08.45-.1.91-.48 1.18-.38.27-.88.3-1.29.08L12 17.77l-4.48 2.36c-.41.22-.91.19-1.29-.08-.38-.27-.56-.73-.48-1.18l.86-5.01-3.63-3.55c-.33-.32-.44-.8-.3-1.23.14-.43.52-.73.97-.8l5.01-.73 2.09-4.62c.18-.43.61-.71 1.08-.71z" />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>天気</div>
            <div className={styles.optionsRow}>
              {weatherOptions.map(({ label, icon }) => (
                <div
                  key={label}
                  className={`${styles.optionItem} ${
                    weather === label ? styles.selected : ""
                  }`}
                  onClick={() => setWeather(label)}
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setWeather(label);
                    }
                  }}
                  aria-label={label}
                >
                  {icon}
                  <div className={styles.optionLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>

<div className={styles.field}>
  <div className={styles.label}>人々</div>
  <div className={styles.optionsRow}>
    {peopleOptions.map(({ label, icon }) => (
      <div
        key={label}
        className={`${styles.optionItem} ${people === label ? styles.selected : ""}`}
        onClick={() => setPeople(label)}
      >
        {icon}
        <div className={styles.optionLabel}>{label}</div>
      </div>
    ))}
  </div>
</div>

<div className={styles.field}>
  <div className={styles.label}>趣味</div>
  <div className={styles.optionsRow}>
    {hobbyOptions.map(({ label, icon }) => (
      <div
        key={label}
        className={`${styles.optionItem} ${hobby === label ? styles.selected : ""}`}
        onClick={() => setHobby(label)}
      >
        {icon}
        <div className={styles.optionLabel}>{label}</div>
      </div>
    ))}
  </div>
</div>

<div className={styles.field}>
  <div className={styles.label}>感情</div>
  <div className={styles.optionsRow}>
    {emotionOptions.map(({ label, icon }) => (
      <div
        key={label}
        className={`${styles.optionItem} ${emotion === label ? styles.selected : ""}`}
        onClick={() => setEmotion(label)}
      >
        {icon}
        <div className={styles.optionLabel}>{label}</div>
      </div>
    ))}
  </div>
</div>

          <div className={styles.field}>
            <label className={styles.label}>タイトル</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className={styles.textInput}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>本文</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className={styles.textArea}
            />
          </div>

          <div className={styles.field}>
            <div className={styles.labelWithButton}>
              <label className={styles.label}>写真を追加</label>
              <label>
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
                  aria-hidden="true"
                  style={{ verticalAlign: "middle", display: "inline-block" }}
                >
                  <rect x="3" y="7" width="18" height="14" rx="2" ry="2" />
                  <path d="M16 3h-1.5a2 2 0 0 0-3 0H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="14" r="3" />
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  className={styles.hiddenFileInput}
                  onChange={handleFileChange}
                />
              </label>

              {/* ごみ箱アイコン */}
              {previewUrl && (
                <button
                  type="button"
                  className={styles.trashButton}
                  onClick={() => {
                    setPreviewUrl(null);
                  }}
                  aria-label="画像を削除"
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
                    aria-hidden="true"
                  >
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                  </svg>
                </button>
              )}
            </div>

            {previewUrl && (
              <div className={styles.previewContainer}>
                <Image
                  src={previewUrl}
                  alt="選択された画像のプレビュー"
                  width={200}
                  height={200}
                  className={styles.previewImage}
                  unoptimized
                  style={{ objectFit: "contain", borderRadius: "8px" }}
                />
              </div>
            )}
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <div className="buttons">
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "登録中..." : isEditMode ? "更新" : "投稿"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
