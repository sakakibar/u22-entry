"use client";

import { useState, useEffect, useRef } from "react";
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
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [weather, setWeather] = useState<string | null>(null);
  const [emotion, setEmotion] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const formatDate = (dateStr: string | Date) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const satisfactionOptions = [1, 2, 3, 4, 5];

  const weatherOptions = [
    { label: "晴れ", icon: "☀️" },
    { label: "くもり", icon: "☁️" },
    { label: "雨", icon: "🌧️" },
    { label: "雪", icon: "❄️" },
    { label: "雷", icon: "⚡" },
    { label: "風", icon: "🌬️" },
    { label: "霧", icon: "🌫️" },
    { label: "その他", icon: "❔" },
  ];

  const emotionOptions = [
    { label: "最高", icon: "😆" },
    { label: "嬉しい", icon: "😊" },
    { label: "楽しい", icon: "😄" },
    { label: "安心", icon: "😌" },
    { label: "普通", icon: "😐" },
    { label: "疲れた", icon: "😮‍💨" },
    { label: "悲しい", icon: "😢" },
    { label: "不安", icon: "😟" },
    { label: "怒り", icon: "😡" },
    { label: "最悪", icon: "😖" },
    { label: "その他", icon: "❔" },
  ];

  useEffect(() => {
    if (initialData) {
      setSatisfaction(Number(initialData.score));
      setWeather(initialData.weather);
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
        <div className={styles.modalContent}>
        <h2>
          {formatDate(initialData?.created_at ?? new Date())}の日記を{isEditMode ? "編集" : "投稿"}
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.leftColumn}>
            {/* 満足度 */}
            <div className={styles.field}>
              <div className={styles.label}>今日の満足度</div>
              <div className={styles.satisfactionRow}>
                {satisfactionOptions.map((num) => (
                  <span
                    key={num}
                    onClick={() => setSatisfaction(num)}
                    className={`${styles.star} ${
                      satisfaction !== null && num <= satisfaction ? styles.filled : ""
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

            {/* 天気 */}
            <div className={styles.field}>
              <div className={styles.label}>今日の天気</div>
              <div className={styles.optionsRow}>
                {weatherOptions.map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setWeather(label)}
                    className={`${styles.optionItem} ${weather === label ? styles.selected : ""}`}
                    aria-label={label}
                  >
                    <span style={{ fontSize: "24px" }}>{icon}</span>
                    <div className={styles.optionLabel}>{label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* どんな一日だった？ */}
            <div className={styles.field}>
              <div className={styles.label}>どんな一日だった？</div>
              <div className={styles.optionsRow}>
                {emotionOptions.map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setEmotion(label)}
                    className={`${styles.optionItem} ${emotion === label ? styles.selected : ""}`}
                    aria-label={label}
                  >
                    <span style={{ fontSize: "24px" }}>{icon}</span>
                    <div className={styles.optionLabel}>{label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            {/* 写真アップロード */}
            <div className={styles.field}>
              <label className={styles.label}>今日の一枚</label>
                <div className={`${styles.photoFrame} ${previewUrl ? styles.noBorder : ""}`}>
                {previewUrl ? (
                  <>
                    <Image
                      src={previewUrl}
                      alt="選択された画像のプレビュー"
                      width={200}
                      height={200}
                      className={styles.previewImage}
                      unoptimized
                      style={{ objectFit: "contain", borderRadius: "8px" }}
                    />
                    <button
                      type="button"
                      className={styles.trashButton}
                      onClick={() => {
                        setPreviewUrl(null);
                        setImageFile(null);
                      }}
                      aria-label="画像を削除"
                      title="画像を削除"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className={styles.fullFrameButton}
                      onClick={() => hiddenFileInput.current?.click()}
                      aria-label="写真を追加"
                    >
                      +
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={hiddenFileInput}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                      className={styles.hiddenFileInput}
                    />
                  </>
                )}
              </div>
            </div>

            {/* タイトル */}
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

            {/* 本文 */}
            <div className={styles.field}>
              <label className={styles.label}>本文</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className={styles.textArea}
              />
            </div>
          </div>

          <div className={styles.buttons}>
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "登録中..." : isEditMode ? "更新" : "投稿"}
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
