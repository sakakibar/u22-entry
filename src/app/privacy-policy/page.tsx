"use client";

import styles from "../../styles/Policy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>プライバシーポリシー</h1>
      <p>
        Chordia（以下「当サービス」といいます）は、ユーザーの個人情報の保護を重要な責務と認識し、
        以下の方針に基づき個人情報を取り扱います。
      </p>

      <h2 className={styles.subheading}>第1条（個人情報の定義）</h2>
      <p>
        「個人情報」とは、個人を識別できる情報を指し、氏名、メールアドレスなどが含まれます。
      </p>

      <h2 className={styles.subheading}>第2条（個人情報の利用目的）</h2>
      <ul className={styles.list}>
        <li>サービスの提供および運営のため</li>
        <li>ユーザーからのお問い合わせに回答するため</li>
        <li>サービスの改善、新機能の開発のため</li>
      </ul>

      <h2 className={styles.subheading}>第3条（個人情報の管理）</h2>
      <p>
        当サービスは、ユーザーの個人情報を適切に管理し、漏洩・改ざん・不正アクセスを防止するための安全対策を講じます。
      </p>

      <p className={styles.update}>最終更新日：2025年8月16日</p>
    </div>
  );
}
