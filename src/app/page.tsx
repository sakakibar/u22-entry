"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "../styles/Landing.module.css";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

export default function AboutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // ログイン済みなら /home にリダイレクト
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  return (
      <div className={styles.container}>
        <h1 className={styles.heading1}>このサイトについて</h1>

        <section className={styles.section}>
          <h2 className={styles.heading2}>あなたの感情が、音楽になる。</h2>
          <p className={styles.paragraph}>
            「日記から音楽を生成するWebサイト」は、あなたが日々綴る日記の文章から、
            AIがその感情や雰囲気を読み取り、あなただけのオリジナル音楽を生成する画期的なサービスです。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>どのように動作するのか？</h2>
          <ol className={styles.list}>
            <li className={styles.listItem}>
              <strong>日記を記述・入力:</strong> 日常の出来事、感じたこと、考えたことなどを自由に入力。
            </li>
            <li className={styles.listItem}>
              <strong>AIが感情を分析:</strong> 文章を解析し感情的要素を抽出。
            </li>
            <li className={styles.listItem}>
              <strong>オリジナル音楽を生成:</strong> 抽出結果に基づいてAIが音楽を自動生成。
            </li>
            <li className={styles.listItem}>
              <strong>音楽を視聴・ダウンロード:</strong> 生成された音楽を試聴・保存可能。
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading2}>このサイトでできること</h2>
          <ul className={styles.list} style={{ listStyleType: "disc" }}>
            <li className={styles.listItem}>日記の文章から感情を反映した音楽を生成。</li>
            <li className={styles.listItem}>生成された音楽の試聴とダウンロード。</li>
            <li className={styles.listItem}>履歴管理（ユーザー登録が必要）。</li>
            <li className={styles.listItem}>複数感情を組み合わせた生成（今後追加予定）。</li>
          </ul>
        </section>

        <section className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>さあ、あなたの物語を音楽にしてみませんか？</h2>
          <p className={styles.ctaParagraph}>
            今すぐ日記を入力して、心に響くメロディを体験してください。
          </p>

          <button className={styles.ctaButton} onClick={() => setShowRegister(true)}>
            今すぐ始める
          </button>

          <button
              className={styles.loginButton}
              onClick={() => setShowLogin(true)}
              style={{ marginLeft: "1rem" }}
          >
            登録済みの方
          </button>
        </section>

        {showLogin && (
            <LoginModal
                onClose={() => setShowLogin(false)}
                onRegister={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
            />
        )}

        {showRegister && (
            <RegisterModal
                onClose={() => setShowRegister(false)}
                onLogin={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
            />
        )}
      </div>
  );
}
