import React from "react";

const musicData = [
  { id: 1, title: "Song A", artist: "Artist A" },
  { id: 2, title: "Song B", artist: "Artist B" },
  { id: 3, title: "Song C", artist: "Artist C" },
];

export default function MusicListPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>音楽一覧</h1>
      <ul>
        {musicData.map((music) => (
          <li key={music.id}>
            {music.title} - {music.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}
