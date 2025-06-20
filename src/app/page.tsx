"use client";

import { useState } from "react";
import styles from "./HomePage.module.css";
import DiaryModal from "../components/DiaryModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className={styles.main}>
      <h1>メインページ</h1>
      <button className={styles.button} onClick={openModal}>日記登録</button>
      {/* 日記投稿モーダルを表示 */}
      {isModalOpen && <DiaryModal onClose={closeModal} />}
    </main>
  );
}
