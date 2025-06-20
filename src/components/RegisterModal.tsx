import styles from "./LoginModal.module.css";

type RegisterModalProps = {
  onClose: () => void;
  onLogin: () => void;
};

export default function RegisterModal({ onClose, onLogin }: RegisterModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeIcon} onClick={onClose}>×</button>
        <h2>会員登録</h2>
        <form className={styles.form}>
          <input type="text" placeholder="ユーザー名" required />
          <input type="email" placeholder="メールアドレス" required />
          <input type="password" placeholder="パスワード" required />
          <input type="password" placeholder="パスワード（確認用）" required />
          <button className={styles.button} type="submit">登録</button>
        </form>
        <p className={styles.registerText}>
          すでにアカウントをお持ちの方は{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            こちら
          </a>{" "}
          からログイン
        </p>
      </div>
    </div>
  );
}
