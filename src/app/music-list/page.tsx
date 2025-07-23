"use client";

import { useState } from "react";
import { SearchBar } from "../../components/Searchbar";
import Image from "next/image";

import {
  PlayCircle,
  StopCircle,
  Star,
  Download,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import styles from "./MusicList.module.css";
// import { ImPower } from "react-icons/im";

const dummyData = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: `title/2025.07.${10 + i}`,
  imageUrl: "/icons/dummy.jpg",
  audioUrl: `/audios/sample${i + 1}.mp3`,
}));

export default function MusicListPage() {
  const [openPlaylist, setOpenPlaylist] = useState(true);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTogglePlay = (id: number) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const handleDownload = (url: string, title: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}.mp3`;
    a.click();
  };

  const renderTrackItem = (track: typeof dummyData[0]) => (
    <li key={track.id} className={styles.item}>
      <Image
        src={track.imageUrl}
        alt="thumbnail"
        width={60}
        height={60}
        className={styles.thumbnail}
      />
      <div className={styles.title}>{track.title}</div>

      {/* 再生中のみaudioタグを表示 */}
      {playingId === track.id && (
        <audio
          src={track.audioUrl}
          autoPlay
          controls
          className={styles.audio}
          onEnded={() => setPlayingId(null)}
        />
      )}

      <div className={styles.icons}>
        {playingId === track.id ? (
          <StopCircle
            className={styles.icon}
            onClick={() => handleTogglePlay(track.id)}
          />
        ) : (
          <PlayCircle
            className={styles.icon}
            onClick={() => handleTogglePlay(track.id)}
          />
        )}
        {favorites.includes(track.id) ? (
          <Star
            className={`${styles.icon} ${styles.favorited}`}
            onClick={() => handleToggleFavorite(track.id)}
          />
        ) : (
          <Star
            className={styles.icon}
            onClick={() => handleToggleFavorite(track.id)}
            />
        )}

        <Download
          className={styles.icon}
          onClick={() => handleDownload(track.audioUrl, track.title)}
        />
      </div>
    </li>
  );

  return (
    <main className="container">
      {/* <h1 className="title">Music List</h1> */}
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
    

      {/* プレイリスト */}
      <section className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => setOpenPlaylist(!openPlaylist)}
        >
          {openPlaylist ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <h2>全ての楽曲</h2>
        </div>
        {openPlaylist && (
          <ul className={styles.list}>
            {dummyData.map((track) => renderTrackItem(track))}
          </ul>
        )}
      </section>

      {/* お気に入りリスト */}
      <section className={styles.section}>
        <div
          className={styles.sectionHeader}
          onClick={() => setOpenFavorites(!openFavorites)}
        >
          {openFavorites ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          <h2>お気に入りリスト</h2>
        </div>
        {openFavorites && (
          <ul className={styles.list}>
            {dummyData
              .filter((track) => favorites.includes(track.id))
              .map((track) => renderTrackItem(track))}
          </ul>
        )}
      </section>
    </main>
  );
}
