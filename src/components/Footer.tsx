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
  <a href="mailto:info@chordia.com" className={`${styles.link} ${styles.contactLink}`}>
    お問い合わせ先
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M2 4c-1.1 0-2 .9-2 2v12c0 
      1.1.9 2 2 2h20c1.1 0 2-.9 
      2-2V6c0-1.1-.9-2-2-2H2zm0 
      2h20v.01L12 13 2 6.01V6zm0 
      3.236l7.803 5.353a2 
      2 0 002.394 0L20 
      9.236V18H2V9.236z"/>
    </svg>
    info@chordia.com
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
