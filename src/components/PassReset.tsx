"use client";
import { useState } from "react";
import styles from "./styles/LoginModal.module.css"; // 既存のスタイル流用可

type ChangePasswordModalProps = {
    onClose: () => void;
    userId: string; // API にユーザーIDを渡す
};

export default function ChangePasswordModal({ onClose, userId }: ChangePasswordModalProps) {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (newPassword !== confirmPassword) {
            setError("新しいパスワードが一致しません");
            return;
        }

        try {
            const res = await fetch("/api/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-user-id": userId, // ユーザーIDをヘッダで送信
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            let data: any = { error: "不明なエラー" };
            try {
                data = await res.json();
            } catch (jsonErr) {
                console.error("JSON parse error:", jsonErr);
            }

            if (!res.ok) {
                setError(data.error || "パスワード変更に失敗しました");
                return;
            }

            setSuccess(data.message || "パスワードを変更しました");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

            setTimeout(() => onClose(), 1500);
        } catch (err) {
            console.error(err);
            setError("サーバーエラーが発生しました");
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeIcon} onClick={onClose}>×</button>
                <h2>パスワード変更</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="現在のパスワード"
                        required
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="新しいパスワード"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="新しいパスワード（確認）"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className={styles.button} type="submit">
                        パスワード変更
                    </button>
                </form>

                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            </div>
        </div>
    );
}
