"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./styles/CustomAudioPlayer.module.css";
import { Play, Pause } from "lucide-react";

type Props = {
  src: string;
};

const CustomAudioPlayer = ({ src }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  return (
    <div className={styles.player}>
      <button className={styles.playButton} onClick={togglePlay}>
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <div className={styles.progressWrapper}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
      <audio ref={audioRef} src={src} preload="auto" />
    </div>
  );
};

export default CustomAudioPlayer;
