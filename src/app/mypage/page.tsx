import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>My page</h1>
      <Link href="/mypage">マイページへ</Link>
      <br />
      <Link href="/profile/edit">
        <button>プロフィール編集</button>
      </Link>
    </main>
  );
}
