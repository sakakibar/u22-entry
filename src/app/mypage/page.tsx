import Link from 'next/link';
import styles from './MyPage.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>My page</h1>
      <br />
      <Link href="/profile/edit">
        <button className="button">プロフィール編集</button>
      </Link>
    </main>
  );
}
