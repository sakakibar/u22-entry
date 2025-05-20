"use client";
import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal"; // ← 新規追加
import styles from "./Nav.module.css";

export const Nav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoginOpen(true);
  };

  const closeLogin = () => setIsLoginOpen(false);
  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><Link href="/">音ログ</Link></li>
          <li><Link href="/mypage">マイページ</Link></li>
          <li><Link href="/music-list">音楽一覧</Link></li>
          <li><a href="#" onClick={openLogin}>ログイン</a></li>
        </ul>
      </nav>
      {isLoginOpen && <LoginModal onClose={closeLogin} onRegister={openRegister} />}
      {isRegisterOpen && <RegisterModal onClose={closeRegister} />}
    </>
  );
};
