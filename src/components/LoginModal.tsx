import styles from "./LoginModal.module.css";

type LoginModalProps = {
  onClose: () => void;
  onRegister: () => void;
};

export default function LoginModal({ onClose, onRegister }: LoginModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* 右上の×ボタン */}
        <button className={styles.closeIcon} onClick={onClose}>×</button>

        <h2>ログイン</h2>
        <form className={styles.form}>
          <input type="email" placeholder="メールアドレス" required />
          <input type="password" placeholder="パスワード" required />
          <button className={styles.button} type="submit">ログイン</button>
        </form>

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
