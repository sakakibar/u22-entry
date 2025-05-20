'use client';

import { useState } from 'react';

export default function PostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [musicUrl, setMusicUrl] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/diary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, musicUrl }),
    });

    if (res.ok) {
      setMessage('投稿しました！');
      setTitle('');
      setContent('');
      setMusicUrl('');
    } else {
      setMessage('投稿に失敗しました');
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>日記を投稿する</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル</label><br />
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>内容</label><br />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
            rows={6}
          />
        </div>
        <div>
          <label>音楽URL（任意）</label><br />
          <input
            type="text"
            value={musicUrl}
            onChange={e => setMusicUrl(e.target.value)}
            placeholder="例: https://example.com/song.mp3"
          />
        </div>
        <button type="submit">投稿</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
