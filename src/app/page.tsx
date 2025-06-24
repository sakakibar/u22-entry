"use client";

import { useState } from "react";
import { Calendar } from '../components/Calendar';
import styles from "../styles/HomePage.module.css";
import DiaryModal from "../components/DiaryModal";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <main className={styles.pageWrapper}>

            {/* 検索バー */}
            <div className={styles.searchBarWrapper}>
                <input
                    type="text"
                    placeholder="タグで検索..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton} aria-label="検索">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>

            {/* カレンダーとサイドパネルの横並びセクション */}
            <div className={styles.mainContent}>
                <div className={styles.calendarSection}>
                    <Calendar onDateSelect={setSelectedDate} />
                    <button className={styles.button} onClick={openModal}>日記登録</button>
                    {isModalOpen && <DiaryModal onClose={closeModal} />}
                </div>

                <div className={styles.detailPanel}>
                    {selectedDate ? (
                        <>
                            <h2>{selectedDate} の記録</h2>
                            <p>ここにその日の内容やイベント詳細などを表示できます。</p>
                        </>
                    ) : (
                        <p>日付を選択すると詳細が表示されます。</p>
                    )}
                </div>
            </div>

        </main>
    );
}
