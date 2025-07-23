"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn , signOut } from "next-auth/react";
import styles from "./styles/LoginModal.module.css";

type LoginModalProps = {
  onClose: () => void;
  onRegister: () => void;
};

export default function LoginModal({ onClose, onRegister }: LoginModalProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error || "ログインに失敗しました");
    } else {
      alert("ログイン成功！");
      onClose();
      window.location.reload();
    }
  };

  // ログアウト処理
  const handleLogout = async () => {
    await signOut({ redirect: false });
    alert("ログアウトしました");
    onClose();
    window.location.reload();
  };

 
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeIcon} onClick={onClose}>×</button>
        <h2>ログイン</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="メールアドレス"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="パスワード"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.button} type="submit">
            ログイン
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}

        <p className={styles.registerText}>
          アカウントをお持ちでない方は{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onRegister();
            }}
          >
            こちら
          </a>{" "}
          から会員登録
        </p>
      </div>
    </div>
  );
}
