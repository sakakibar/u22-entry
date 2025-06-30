"use client";

import { useState, useEffect } from "react";
import { Calendar } from '../components/Calendar';
import styles from "../styles/HomePage.module.css";
import DiaryModal from "../components/DiaryModal";

type DiaryData = {
    diaryID: string;
    title: string;
    content: string;
    score?: string;
    weather?: string;
    people?: string;
    hobby?: string;
    mood?: string;
    imageUrl?:string;
    created_at?: string;
};


export default function HomePage() {

    const [editingDiary, setEditingDiary] = useState<DiaryData | null>(null);

    // モーダルの表示・非表示を制御
    const [isModalOpen, setIsModalOpen] = useState(false);

    // カレンダーで選択された日付（例："2025-06-26"）
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const [diaryData, setDiaryData] = useState<DiaryData | null>(null);

    // 検索バーに入力された文字列
    const [searchQuery, setSearchQuery] = useState('');

    // 選択された日付の日記データ（タイトルと本文）
    //const [diaryData, setDiaryData] = useState<{ title: string, content: string } | null>(null);

    // ローディング中かどうかのフラグ
    const [isLoading, setIsLoading] = useState(false);

    // データ取得時のエラーメッセージ
    const [error, setError] = useState<string | null>(null);

    // モーダルを開く
    const openModal = () => {
        setEditingDiary(null);
        setIsModalOpen(true);
    }

    // モーダルを閉じる
    const closeModal = () => setIsModalOpen(false);

    // 検索バーの入力値が変更されたときの処理
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    // 削除関数
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
                setDiaryData(null); // 削除したので詳細表示クリア
            } else {
                alert("削除に失敗しました: " + result.error);
            }
        } catch (err) {
            console.error("削除エラー:", err);
            alert("削除に失敗しました。");
        }
    };

    // 編集関数（モーダルに編集対象データを渡して開く）
    const handleEdit = (data: DiaryData) => {
        setEditingDiary(data);
        setIsModalOpen(true);
    };

    // 選択された日付が変更されたときに日記データを取得する
    useEffect(() => {
        // 日付が未選択の場合は初期化
        if (!selectedDate) {
            setDiaryData(null);
            return;
        }

        // ローディング開始・エラー初期化
        setIsLoading(true);
        setError(null);

        console.log("選択された日付:",selectedDate);

        // Supabase API経由で日記データを取得
        fetch(`/api/diary/list`)
            .then(res => {
                if (!res.ok) throw new Error("データ取得失敗");
                return res.json();
            })
            .then(data => {
                console.log("全件",data);
                console.log("取得した日記一覧:",data);

                const normalizeDate = (input: string | Date): string => {
                    const d = new Date(input);
                    const yyyy = d.getFullYear();
                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                    const dd = String(d.getDate()).padStart(2, '0');
                    return `${yyyy}-${mm}-${dd}`;
                };

                const matched = data.find(((d: any) => normalizeDate(d.created_at) === selectedDate));

                // 日記データが存在すればセット
                if (matched) {
                    console.log("該当の日付", matched);
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
                    });
                } else {
                    console.log("この日付には日記がありません");
                    // その日の日記がなければ null
                    setDiaryData(null);
                }
            })
            .catch(()=> {
                // エラー時の処理
                console.log("日付の取得に失敗")
                setError("日記の取得に失敗しました。");
                setDiaryData(null);
            })
            .finally(() => {
                // ローディング終了
                setIsLoading(false);
            });
    }, [selectedDate]);


    return (
        <main className={styles.pageWrapper}>
            {/* 🔍 検索バーエリア */}
            <div className={styles.searchBarWrapper}>
                <input
                    type="text"
                    placeholder="タグで検索..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton} aria-label="検索">
                    {/* 検索アイコン（虫眼鏡） */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="7" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
            </div>

            {/* 📅 カレンダー + 詳細パネル */}
            <div className={styles.mainContent}>
                {/* カレンダー表示エリア */}
                <div className={styles.calendarSection}>
                    {/* カレンダーコンポーネント（クリックで日付選択） */}
                    <Calendar onDateSelect={setSelectedDate} />

                    {/* 日記登録モーダルを開くボタン */}
                    <button className={styles.button} onClick={openModal}>日記登録</button>

                    {/* モーダルが開かれていれば表示 */}
                    {isModalOpen && <DiaryModal onClose={closeModal}
                                                initialData={editingDiary}
                                                onUpdate={updatedDiary => {
                                                    setDiaryData(updatedDiary);
                                                    setEditingDiary(null);
                                                    setIsModalOpen(false);
                                                }}

                    />}
                </div>

                {/* 右側の日記詳細表示パネル */}
                <div className={styles.detailPanel}>
                    {selectedDate ? (
                        <>
                            {/* 選択された日付の見出し */}
                            <h2>{selectedDate} の記録</h2>

                            {/* ローディング中表示 */}
                            {isLoading ? (
                                <p>読み込み中...</p>

                                // エラーがある場合の表示
                            ) : error ? (
                                <p style={{ color: "red" }}>{error}</p>

                                // 日記が存在する場合の表示
                            ) : diaryData ? (
                                <>
                                    {diaryData.imageUrl && (
                                        <img
                                            key={diaryData.imageUrl} // これでReactが変化を認識しやすくする
                                            src={diaryData.imageUrl}
                                            alt="日記画像"
                                            style={{ maxWidth: "100%", borderRadius: "8px" , display: "block",height:"auto" }}
                                            onError={() => console.error('画像の読み込みに失敗しました:', diaryData.imageUrl)}
                                        />
                                    )}
                                    <p><strong>満足度:</strong> {diaryData.score}</p>
                                    <p><strong>天気:</strong> {diaryData.weather}</p>
                                    <p><strong>人々:</strong> {diaryData.people}</p>
                                    <p><strong>趣味:</strong> {diaryData.hobby}</p>
                                    <p><strong>感情:</strong> {diaryData.mood}</p>
                                    <p><strong>タイトル:</strong> {diaryData.title}</p>
                                    <p><strong>本文:</strong> {diaryData.content}</p>

                                    {/* 編集・削除ボタン */}
                                    <div style={{ marginTop: "1rem", display: "flex", gap: "10px" }}>
                                        <button onClick={() => handleEdit(diaryData)} className={styles.button}>
                                            編集
                                        </button>
                                        <button onClick={() => handleDelete(diaryData.diaryID)} className={styles.button}>
                                            削除
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <p>この日に登録された日記はありません。</p>
                            )}
                        </>
                    ) : (
                        // 日付未選択時の表示
                        <p>日付を選択すると詳細が表示されます。</p>
                    )}
                </div>
            </div>
        </main>
    );
}
