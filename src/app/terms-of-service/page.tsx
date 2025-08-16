"use client";

import { useRouter } from "next/navigation";
import styles from "../../styles/Policy.module.css";

export default function TermsOfServicePage() {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>利用規約</h1>
      <p>
        本利用規約（以下「本規約」といいます）は、Chordia（以下「当サービス」といいます）の利用条件を定めるものです。
        ユーザーの皆さまには、本規約に従って当サービスをご利用いただきます。
      </p>

      <h2 className={styles.subheading}>第1条（適用）</h2>
      <p>
        本規約は、ユーザーと当サービスとの間のサービス利用に関わる一切の関係に適用されるものとします。
      </p>

      <h2 className={styles.subheading}>第2条（禁止事項）</h2>
      <ul className={styles.list}>
        <li>法令または公序良俗に違反する行為</li>
        <li>犯罪行為に関連する行為</li>
        <li>当サービスの運営を妨害する行為</li>
      </ul>

      <h2 className={styles.subheading}>第3条（免責事項）</h2>
      <p>
        当サービスは、利用者に生じたあらゆる損害について一切の責任を負いません。
      </p>

      <p className={styles.update}>最終更新日：2025年8月16日</p>

      {/* 戻るボタン（右下固定） */}
      <button className={styles.backButton} onClick={() => router.back()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

    </div>
  );
}
