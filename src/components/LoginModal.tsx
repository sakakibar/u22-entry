"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react"; // ← useSessionを追加
import styles from "./styles/LoginModal.module.css";

type LoginModalProps = {
  onClose: () => void;
  onRegister: () => void;
};

export default function LoginModal({ onClose, onRegister }: LoginModalProps) {
  const router = useRouter();
  const { data: session } = useSession(); // ここでログイン状態取得

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ログイン状態かどうか
  const isLoggedIn = !!session;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ログイン済みなら何もしない（あるいはメッセージ表示）
    if (isLoggedIn) return;

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
          <h2>{isLoggedIn ? "ログイン済み" : "ログイン"}</h2>

          {isLoggedIn ? (
              <>
                <p>{session?.user?.name || "ユーザー"} さんとしてログイン中です</p>
                <button onClick={handleLogout} className={styles.button}>
                  ログアウト
                </button>
              </>
          ) : (
              <>
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
              </>
          )}

          <button onClick={onClose}>閉じる</button>
        </div>
      </div>
  );
}
