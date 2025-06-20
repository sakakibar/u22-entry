import type { Metadata } from 'next';
// import Image from 'next/image';
import styles from './About.module.css'; // CSS Modulesをインポート
import Link from 'next/link'; // ←追加

export const metadata: Metadata = {
  title: 'このサイトについて - 日記から音楽を生成',
  description: '日記の感情を音楽に変換するAIを活用したWebサイトです。あなたの内面を表現するオリジナル音楽を生成します。',
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>このサイトについて</h1>

      <section className={styles.section}>
        <h2 className={styles.heading2}>あなたの感情が、音楽になる。</h2>
        <p className={styles.paragraph}>
          「日記から音楽を生成するWebサイト」は、あなたが日々綴る日記の文章から、AIがその感情や雰囲気を読み取り、あなただけのオリジナル音楽を生成する画期的なサービスです。言葉にならない想いをメロディに乗せて表現することで、新たな自己発見や癒しを提供します。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading2}>どのように動作するのか？</h2>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            <strong>日記を記述・入力:</strong> 日常の出来事、感じたこと、考えたことなど、自由に日記を書いてください。手書きのものをテキスト化して入力することも可能です。
          </li>
          <li className={styles.listItem}>
            <strong>AIが感情を分析:</strong> 入力された日記の文章を、高度な自然言語処理AIが解析し、喜怒哀楽、静けさ、活気などの感情的要素を抽出します。
          </li>
          <li className={styles.listItem}>
            <strong>オリジナル音楽を生成:</strong> 分析された感情データに基づき、AIが最適なメロディ、ハーモニー、リズム、楽器編成などを組み合わせて、世界に一つだけの音楽を自動生成します。
          </li>
          <li className={styles.listItem}>
            <strong>音楽を視聴・ダウンロード:</strong> 生成された音楽は、サイト上で試聴できます。気に入った音楽はダウンロードして、いつでもお楽しみいただけます。
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading2}>このサイトでできること</h2>
        <ul className={styles.list} style={{ listStyleType: 'disc' }}>
          <li className={styles.listItem}>日記の文章から、あなたの感情を反映したオリジナル音楽を生成。</li>
          <li className={styles.listItem}>生成された音楽の試聴、およびダウンロード。</li>
          <li className={styles.listItem}>過去に生成した音楽の履歴管理（ユーザー登録が必要な場合）。</li>
          <li className={styles.listItem}>複数の感情を組み合わせた音楽生成のオプション（今後の開発で追加予定など）。</li>
        </ul>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>さあ、あなたの物語を音楽にしてみませんか？</h2>
        <p className={styles.ctaParagraph}>
          今すぐ日記を入力して、心に響くメロディを体験してください。
        </p>

        <Link href="/" passHref legacyBehavior>
            <a className={styles.ctaButton}>今すぐ始める</a>
        </Link>
      </section>
    </div>
  );
}