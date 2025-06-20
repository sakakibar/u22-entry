import { useState } from "react";
import styles from "./LoginModal.module.css";

type RegisterModalProps = {
    onClose: () => void;
    onLogin: () => void;
};

export default function RegisterModal({ onClose, onLogin }: RegisterModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (password !== confirmPassword) {
            setError("パスワードが一致しません");
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "登録に失敗しました");
            } else {
                alert("登録が完了しました！")

                //setSuccess("登録が完了しました！");
                setTimeout(() => {
                    onLogin(); // ログイン画面へ遷移
                }, 1500);
            }
        } catch (err) {
            setError("通信エラーが発生しました");
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeIcon} onClick={onClose}>×</button>
                <h2>会員登録</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="ユーザー名"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <input
                        type="password"
                        placeholder="パスワード（確認用）"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className={styles.button} type="submit">登録</button>
                </form>

                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}

                <p className={styles.registerText}>
                    すでにアカウントをお持ちの方は{" "}
                    <a href="#" onClick={(e) => {
                        e.preventDefault();
                        onLogin();
                    }}>
                        こちら
                    </a>{" "}からログイン
                </p>
            </div>
        </div>
    );
}
