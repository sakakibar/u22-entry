"use client";

import { useState } from "react";
import styles from "./styles/DiaryModal.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import supabase from "@/lib/supabase";

type Props = {
  onClose: () => void;
};

export default function DiaryModal({ onClose }: Props) {
  const { data: session } = useSession();
  const poster = session?.user?.userID;

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
  const weatherOptions = ["晴れ", "曇り", "雨", "雪"];
  const peopleOptions = ["家族", "友人", "同僚", "一人"];
  const hobbyOptions = ["スポーツ", "読書", "音楽", "ゲーム"];
  const emotionOptions = ["嬉しい", "悲しい", "怒り", "楽しい"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!poster) {
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

    let imageUrl = null;

    // ✅ 画像がある場合、Storageへアップロード
    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${poster}_${Date.now()}.${fileExt}`;
      const filePath = `private/${poster}/${fileName}`;

      // ここでコンソールに情報を出す
      console.log("アップロード対象のユーザーID(poster):", poster);
      console.log("アップロードファイル名:", fileName);
      console.log("アップロードパス:", filePath);

      const { error: uploadError } = await supabase.storage
          .from("diary-images") // ← バケット名に合わせて変更
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
      console.log(imageUrl);

      imageUrl = publicUrlData?.publicUrl ?? null;
    }

    try {
      const res = await fetch("/api/diary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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

      alert("日記を登録しました！");
      setSatisfaction(null);
      setWeather(null);
      setPeople(null);
      setHobby(null);
      setEmotion(null);
      setTitle("");
      setContent("");
      setPreviewUrl(null);
      setImageFile(null);
      setError(null);
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
          <h2>日記登録フォーム</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <div className={styles.label}>今日の満足度</div>
              <div className={styles.optionsRow}>
                {satisfactionOptions.map((num) => (
                    <div
                        key={num}
                        className={`${styles.optionItem} ${
                            satisfaction === num ? styles.selected : ""
                        }`}
                        onClick={() => setSatisfaction(num)}
                    >
                      <Image
                          src="/icons/default_icon.png"
                          alt={`${num}のアイコン`}
                          width={32}
                          height={32}
                          className={styles.icon}
                      />
                      <div className={styles.optionLabel}>{num}</div>
                    </div>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>天気</div>
              <div className={styles.optionsRow}>
                {weatherOptions.map((w) => (
                    <div
                        key={w}
                        className={`${styles.optionItem} ${
                            weather === w ? styles.selected : ""
                        }`}
                        onClick={() => setWeather(w)}
                    >
                      <Image
                          src="/icons/default_icon.png"
                          alt={`${w}のアイコン`}
                          width={32}
                          height={32}
                          className={styles.icon}
                      />
                      <div className={styles.optionLabel}>{w}</div>
                    </div>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>人々</div>
              <div className={styles.optionsRow}>
                {peopleOptions.map((p) => (
                    <div
                        key={p}
                        className={`${styles.optionItem} ${
                            people === p ? styles.selected : ""
                        }`}
                        onClick={() => setPeople(p)}
                    >
                      <Image
                          src="/icons/default_icon.png"
                          alt={`${p}のアイコン`}
                          width={32}
                          height={32}
                          className={styles.icon}
                      />
                      <div className={styles.optionLabel}>{p}</div>
                    </div>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>趣味</div>
              <div className={styles.optionsRow}>
                {hobbyOptions.map((h) => (
                    <div
                        key={h}
                        className={`${styles.optionItem} ${
                            hobby === h ? styles.selected : ""
                        }`}
                        onClick={() => setHobby(h)}
                    >
                      <Image
                          src="/icons/default_icon.png"
                          alt={`${h}のアイコン`}
                          width={32}
                          height={32}
                          className={styles.icon}
                      />
                      <div className={styles.optionLabel}>{h}</div>
                    </div>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>感情</div>
              <div className={styles.optionsRow}>
                {emotionOptions.map((e) => (
                    <div
                        key={e}
                        className={`${styles.optionItem} ${
                            emotion === e ? styles.selected : ""
                        }`}
                        onClick={() => setEmotion(e)}
                    >
                      <Image
                          src="/icons/default_icon.png"
                          alt={`${e}のアイコン`}
                          width={32}
                          height={32}
                          className={styles.icon}
                      />
                      <div className={styles.optionLabel}>{e}</div>
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
                <label className={styles.addPhotoButton}>
                  ＋
                  <input
                      type="file"
                      accept="image/*"
                      className={styles.hiddenFileInput}
                      onChange={handleFileChange}
                  />
                </label>
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
                {loading ? "登録中..." : "投稿"}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
