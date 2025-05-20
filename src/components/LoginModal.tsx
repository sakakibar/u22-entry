import styles from "./LoginModal.module.css";

type LoginModalProps = {
  onClose: () => void;
  onRegister: () => void;
};

export default function LoginModal({ onClose, onRegister }: LoginModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <h2>ログイン</h2>
        {/* ログインフォームやSNSログインボタンなど */}
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
