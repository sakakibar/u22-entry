"use client";

import { useState } from "react";
import styles from "./DiaryModal.module.css";

type Props = {
  onClose: () => void;
};

export default function DiaryModal({ onClose }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("送信された日記:", { title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>日記登録フォーム</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>タイトル:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>内容:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">送信</button>
            <button type="button" onClick={onClose}>閉じる</button>
          </div>
        </form>
      </div>
    </div>
  );
}
