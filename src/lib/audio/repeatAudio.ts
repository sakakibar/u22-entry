'use server';

import fs from "fs";

async function getFFmpeg() {
    const ffmpegModule = await import("fluent-ffmpeg");
    const ffmpegPath = (await import("ffmpeg-static")).default;
    const ffprobeStatic = await import("ffprobe-static");

    const ffmpeg = ffmpegModule.default ?? ffmpegModule;
    ffmpeg.setFfmpegPath(ffmpegPath);
    ffmpeg.setFfprobePath(ffprobeStatic.path);

    // ログ出力（オプション）
    console.log("🎯 ffmpeg path:", ffmpegPath);
    console.log("🎯 ffprobe path:", ffprobeStatic.path);
    console.log("📦 ffprobe exists?", fs.existsSync(ffprobeStatic.path));

    return ffmpeg;
}

async function getAudioDuration(filePath: string): Promise<number> {
    const ffmpeg = await getFFmpeg();
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(filePath, (err: Error | null, metadata: any) => {
            if (err) return reject(err);
            const duration = metadata.format.duration;
            resolve(duration ?? 0);
        });
    });
}

export async function repeatAudioTo20Seconds(inputPath: string, outputPath: string): Promise<void> {
    const ffmpeg = await getFFmpeg();
    const duration = await getAudioDuration(inputPath);
    const shouldLoop = duration < 20;

    return new Promise((resolve, reject) => {
        let command = ffmpeg().input(inputPath);

        if (shouldLoop) {
            command = command.inputOptions(["-stream_loop", "-1"]);
        }

        command
            .outputOptions(["-t 20"])
            .on("end", () => {
                try {
                    fs.unlinkSync(inputPath);
                    console.log("🧹 一時ファイル削除:", inputPath);
                } catch (e) {
                    console.warn(`⚠️ 一時ファイル削除失敗: ${inputPath}`, e);
                }
                console.log("✅ 音声変換完了:", outputPath);
                resolve();
            })
            .on("error", (err) => {
                console.error("❌ ffmpegエラー:", err);
                reject(err);
            })
            .save(outputPath);
    });
}
