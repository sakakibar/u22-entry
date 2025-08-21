"use client";
import Image from "next/image";
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

        <section>
        <div className={styles.imageWrapper}>
          <Image
            src="/tmb/landing.png"
            alt="サービス紹介"
            width={1440}
            height={1024}
            className={styles.image}
            priority
          />
        </div>
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
