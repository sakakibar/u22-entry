"use client";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import styles from "./Setting.module.css";
import ChangePasswordModal from "@/components/PassReset";

const DEBUG = true;

export default function SettingPage() {
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    if (!userId) return alert("ユーザー情報がまだ取得されていません");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // アカウント削除用
  const [delUsername, setDelUsername] = useState("");
  const [delPassword1, setDelPassword1] = useState("");
  const [delPassword2, setDelPassword2] = useState("");

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      if (DEBUG) console.log("ユーザー未ログイン（NextAuth セッションなし）");
      setLoading(false);
      return;
    }

    const uid = session?.user?.userID;
    if (!uid) {
      console.error("session.user.userID が取得できません");
      setLoading(false);
      return;
    }

    setUserId(uid);

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/${uid}`);
        if (!res.ok) {
          console.error("API エラー:", await res.text());
          setLoading(false);
          return;
        }
        const data = await res.json();
        setUsername(data.username || "");
        setEmail(data.mail || "");
      } catch (err) {
        console.error("プロフィール取得エラー:", err);
      }
      setLoading(false);
    };

    fetchUser();
  }, [status, session]);

  const handleSaveProfile = async () => {
    if (!userId) return alert("ユーザー情報取得エラー");

    setLoading(true);
    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, mail: email }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "更新に失敗しました");
      }
      alert("プロフィールを更新しました");
    } catch (err: any) {
      alert(`プロフィール更新エラー: ${err.message}`);
    }
    setLoading(false);
  };

  //ログアウト
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      alert("ログアウトしました");
      window.location.href = "/";
    } catch (err: any) {
      alert(`ログアウトエラー: ${err.message}`);
    }
  };

  //アカウント削除
  const handleDeleteAccount = async () => {
    if (!userId) return;

    // 入力チェック
    if (delUsername !== username) return alert("ユーザー名が一致しません");
    if (!delPassword1 || !delPassword2) return alert("パスワードを入力してください");
    if (delPassword1 !== delPassword2) return alert("パスワードが一致しません");

    if (!confirm("本当にアカウントを削除しますか？この操作は取り消せません。")) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/user/${userId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: delPassword1 }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "削除に失敗しました");
      }

      alert("アカウントを削除しました");

      // 削除後にセッションをクリアしてトップへ
      await signOut({ redirect: false });
      window.location.href = "/";
    } catch (err: any) {
      alert(`アカウント削除エラー: ${err.message}`);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  return (
      <main className="container">
        <h1 className="title">Setting</h1>

        {/* プロフィール */}
        <section>
          <h2 className="heading2">プロフィール</h2>
          <div className={styles.profileForm}>
            <div className={styles.profileItem}>
              <label>ユーザー名</label>
              <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
              />
            </div>

            <div className={styles.profileItem}>
              <label>メールアドレス</label>
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
              />
            </div>

            <div className={styles.buttonRow}>
              <button className={styles.buttons} onClick={handleSaveProfile}>
                保存
              </button>
              <button
                  className={styles.cancelButton}
                  onClick={() => window.location.reload()}
              >
                キャンセル
              </button>
            </div>
          </div>
        </section>

        {/* パスワード変更 */}
        <section>
          <h2 className="heading2">パスワード変更</h2>
          <div className={styles.password}>
            <p className={styles.text}>
              以下のボタンからログイン時のパスワードを変更できます。
            </p>
            <button className={styles.buttons} onClick={handleOpenModal}>
              パスワードを変更する
            </button>
          </div>

          {/* モーダル表示 */}
          {isModalOpen && userId && (
              <ChangePasswordModal onClose={handleCloseModal} userId={userId} />
          )}
        </section>

        {/* ログアウト */}
        <section>
          <h2 className="heading2">ログアウト</h2>
          <div className={styles.logout}>
            <p className={styles.text}>以下のボタンからログアウトできます。</p>
            <button className={styles.buttons} onClick={handleLogout}>
              ログアウト
            </button>
          </div>
        </section>

        {/* アカウント削除 */}
        <section>
          <h2 className="heading2">アカウント削除</h2>
          <div className={styles.accountdelete}>
            <p>以下の情報を入力してアカウントを削除してください。</p>
            <input
                type="text"
                placeholder="ユーザー名"
                value={delUsername}
                onChange={(e) => setDelUsername(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="パスワード"
                value={delPassword1}
                onChange={(e) => setDelPassword1(e.target.value)}
                className={styles.input}
            />
            <input
                type="password"
                placeholder="パスワード（確認）"
                value={delPassword2}
                onChange={(e) => setDelPassword2(e.target.value)}
                className={styles.input}
            />
            <div className={styles.buttonRow}>
              <button className={styles.deleteButton} onClick={handleDeleteAccount}>
                アカウントを削除する
              </button>
            </div>
          </div>
        </section>
      </main>
  );
}
