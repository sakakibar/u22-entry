import styles from "./styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* 情報リンク */}
        <div className={styles.links}>
          <a href="/terms-of-service" className={styles.link}>
            利用規約
          </a>
          <a href="/privacy-policy" className={styles.link}>
            プライバシーポリシー
          </a>
          <a href="/contact" className={styles.link}>
            お問い合わせ
          </a>
          <a href="/faq" className={styles.link}>
            Q&A
          </a>
        </div>

        {/* メッセージ */}
        <p className={styles.message}>
          &quot;日々のきらめきを、この場所に記そう。&quot;
        </p>

        {/* 著作権表示 */}
        <p className={styles.copyright}>
          &copy; 2025 Chordia All rights reserved.
        </p>
      </div>
    </footer>
  );
};
