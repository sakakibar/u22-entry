import React from 'react';
import styles from './styles/DetailModal.module.css';

type ModalProps = {
  dateStr: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ dateStr, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeIcon} onClick={onClose}>×</button>
        <h2>選択した日付</h2>
        <p>{dateStr}</p>
        <button onClick={onClose}>閉じる</button>
      </div>
    </div>
  );
};

export default Modal;
