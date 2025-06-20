// import Link from 'next/link';
// import styles from './MyPage.module.css';

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">My page</h1>
      <br />

      {/* <Link href="/profile/edit">
        <button className={styles.buttons}>プロフィール編集</button>
      </Link> */}

      <section>
        <h2 className="heading2">プロフィール</h2>
        {/* ... */}
      </section>

      <section>
        <h2 className="heading2">パスワード変更</h2>
        {/* ... */}
      </section>

      <section>
        <h2 className="heading2">ログアウト</h2>
        {/* ... */}
      </section>

      <section>
        <h2 className="heading2">アカウント削除</h2>
        {/* ... */}
      </section>
    </main>
  );
}

