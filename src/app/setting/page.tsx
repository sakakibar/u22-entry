"use client";

import { useState } from "react";
// import Image from "next/image";
import styles from './Setting.module.css';

export default function SettingPage() {
  const [username, setUsername] = useState("山田太郎");
  const [email, setEmail] = useState("yamada@example.com");
  // const [icon, setIcon] = useState<string | null>(null);

  // const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => setIcon(reader.result as string);
  //     reader.readAsDataURL(file);
  //   }
  // };
  
  return (
    <main className="container">
      <h1 className="title">Setting</h1>

      <section>
        <h2 className="heading2">プロフィール</h2>
        <div className={styles.profileForm}>
          {/* <div className={styles.profileItem}>
            <label>アイコン画像</label>
            <div>
              <Image
                src={icon || "/icons/default_icon.png"}
                alt="icon"
                className={styles.iconPreview}
                width={80}
                height={80}
              />
              <input type="file" accept="image/*" onChange={handleIconChange} />
            </div>
          </div> */}

          <div className={styles.profileItem}>
            <label>ユーザー名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.profileItem}>
            <label>メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.buttonRow}>
          <button className={styles.buttons}>保存</button>
          <button className={styles.cancelButton} onClick={() => {
            setUsername("山田太郎");
            setEmail("yamada@example.com");
            // setIcon(null);
          }}>
            キャンセル
          </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="heading2">パスワード変更</h2>
        <div className={styles.password}>
          <p className={styles.text}>
            以下のボタンからログイン時のパスワードを変更することが可能です。
          </p>
          <button className={styles.buttons} onClick={() => alert('パスワード変更機能')}>
            パスワードを変更する
          </button>
        </div>
      </section>

      <section>
        <h2 className="heading2">ログアウト</h2>
        <div className={styles.logout}>
          <p className={styles.text}>
            以下のボタンからログアウトすることができます。
          </p>
          <button className={styles.buttons} onClick={() => alert('ログアウト処理')}>
            ログアウト
          </button>
        </div>
      </section>

      <section>
        <h2 className="heading2">アカウント削除</h2>
        <div className={styles.accountdelete}>
          <p className={styles.text}>
            以下のボタンからアカウントを削除することができます。<br></br>
            アカウントを削除すると登録した全てのデータが削除され、復元することはできません。
          </p>
          <button
            className={styles.deleteButton}
            onClick={() => {
              if (confirm('本当にアカウントを削除しますか？')) {
                alert('アカウント削除処理');
              }
            }}
          >
            アカウントを削除する
          </button>
        </div>
      </section>
    </main>
  );
}
