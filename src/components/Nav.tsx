"use client";
import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import styles from "./Nav.module.css";
import Image from 'next/image';

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
          <li className={styles.li}><Link href="/">トップページ</Link></li>
          <li className={styles.li}><Link href="/mypage">マイページ</Link></li>
          <li className={styles.li}><Link href="/music-list">音楽一覧</Link></li>
          {/* <li><a href="#" onClick={openLogin}>ログイン</a></li> */}
        </ul>

        {/* login/logoutによって画像を切り替える(取りあえず仮置き) */}
        <button className={styles.loginIcon} onClick={openLogin}>
          <Image
            src="/icons/login.png"
            alt="ログイン"
            className={styles.loginImage}
            width={32}  // 実際の画像サイズに応じて変更
            height={32}
            />
        </button>
      </nav>
      {isLoginOpen && <LoginModal onClose={closeLogin} onRegister={openRegister} />}
      {isRegisterOpen && <RegisterModal onClose={closeRegister} />}
    </>
  );
};
