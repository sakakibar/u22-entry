"use client";

import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <h1>メインページ</h1>
      <button onClick={openModal}>日記登録</button>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal} // モーダル外クリックでモーダルを閉じる
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "8px",
              width: "300px",
            }}
            onClick={e => e.stopPropagation()} // モーダル内クリックで閉じない
          >
            <h2>日記登録フォーム（後で作成）</h2>
            <button onClick={closeModal}>閉じる</button>
          </div>
        </div>
      )}
    </main>
  );
}
