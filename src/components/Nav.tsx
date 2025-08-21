"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import styles from "./styles/Nav.module.css";

export const Nav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const isLoggedIn = !!session;

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const closeLogin = () => setIsLoginOpen(false);
  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };
  const closeRegister = () => setIsRegisterOpen(false);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    alert("ログアウトしました。");
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={`${styles.li} ${pathname === "/" ? styles.active : ""}`}>
            <Link href="/home" className={styles.linkContent}>
              {/* カレンダーアイコン */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width={20}
                height={20}
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Calendar
            </Link>
          </li>
          <li className={`${styles.li} ${pathname === "/music-list" ? styles.active : ""}`}>
            <Link href="/music-list" className={styles.linkContent}>
              {/* 音符アイコン */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width={20}
                height={20}
                aria-hidden="true"
              >
                <path d="M9 19V6l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              MusicList
            </Link>
          </li>
          <li className={`${styles.li} ${pathname === "/report" ? styles.active : ""}`}>
            <Link href="/report" className={styles.linkContent}>
              {/* レポート（ドキュメント）アイコン */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width={20}
                height={20}
                aria-hidden="true"
              >
                <path d="M9 12h6m-6 4h6m2 4H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7l5 5v9a2 2 0 0 1-2 2z" />
              </svg>
              Report
            </Link>
          </li>
          <li className={`${styles.li} ${pathname === "/setting" ? styles.active : ""}`}>
            <Link href="/setting" className={styles.linkContent}>
              {/* 設定（歯車）アイコン */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                width={20}
                height={20}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              Setting
            </Link>
          </li>
        </ul>
      </nav>

      {/* モーダル表示 */}
      {isLoginOpen && (
        <LoginModal onClose={closeLogin} onRegister={openRegister} />
      )}
      {isRegisterOpen && (
        <RegisterModal onClose={closeRegister} onLogin={openLogin} />
      )}
    </>
  );
};
