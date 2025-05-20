import styles from "./RegisterModal.module.css";

type RegisterModalProps = {
  onClose: () => void;
};

export default function RegisterModal({ onClose }: RegisterModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>会員登録</h2>
        {/* 登録フォームなど */}
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
}
