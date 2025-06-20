"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginModal.module.css";

type LoginModalProps = {
  onClose: () => void;
  onRegister: () => void;
  //onLoginSuccess: () => void;
};

export default function LoginModal({ onClose, onRegister}: LoginModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "ログインに失敗しました");
        return;
      } else {
        alert("ログイン成功！");
        setError("");

        onClose();
        router.push("/");
      }
    } catch (err) {
      console.error("通信エラー", err);
      //setError("通信エラーが発生しました");
    }
  };

  return (
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          <h2>ログイン</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="メールアドレス"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="パスワード"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button className={styles.button} type="submit">ログイン</button>
          </form>
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={onClose}>閉じる</button>
          <p className={styles.registerText}>
            アカウントをお持ちでない方は{" "}
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onRegister();
            }}>こちら</a> から会員登録
          </p>
        </div>
      </div>
  );
}
