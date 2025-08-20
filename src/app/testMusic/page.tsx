'use client';
import { useState } from "react";

export default function MusicPlayer() {
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);

    async function generateMusic() {
        setLoading(true);
        const res = await fetch("/api/generate-music", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt}),
        });

        if (!res.ok) {
            alert("音楽生成に失敗しました");
            setLoading(false);
            return;
        }

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setLoading(false);
    }

    return (
        <div>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="音楽の説明を入力"
            />
            <button onClick={generateMusic} disabled={loading}>
                {loading ? "生成中..." : "音楽生成"}
            </button>

            {audioUrl && (
                <div>
                    <h3>生成された音楽を再生</h3>
                    <audio controls src={audioUrl}></audio>
                </div>
            )}
        </div>
    );
}
