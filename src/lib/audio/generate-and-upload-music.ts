import { repeatAudioTo20Seconds } from "./repeatAudio";
import fs from "fs";
import path from "path";
import os from "os";
import { prisma } from "@/lib/prisma";
import { uploadToSupabase } from "./uploadToSupabase";

/**
 * fetch にタイムアウトとリトライを組み込む
 */
async function fetchWithRetry(url: string, options: any, retries = 3, timeout = 20000) {
    for (let i = 0; i < retries; i++) {
        try {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);

            const res = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(id);
            return res;
        } catch (err) {
            console.warn(`fetch失敗 ${i + 1}/${retries}:`, err);
            if (i === retries - 1) throw err;
        }
    }
}

/**
 * Replicate API の生成完了待機
 */
async function waitForPrediction(id: string, maxRetries = 100, interval = 3000) {
    console.log("音楽生成の完了待機開始");
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        const res = await fetchWithRetry(`https://api.replicate.com/v1/predictions/${id}`, {
            headers: {
                Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            },
        }, 3, 20000);

        const data = await res.json();
        console.log(`生成状態(${attempt}/${maxRetries}):`, data.status);

        if (data.status === "succeeded") return data;
        if (data.status === "failed") throw new Error("音楽生成に失敗しました（APIエラー）");

        await new Promise((r) => setTimeout(r, interval));
    }

    throw new Error("最大リトライ回数に達しました。音楽生成失敗");
}

/**
 * 音楽生成 & Supabase アップロード & DB 登録
 */
export async function generateAndUploadMusic(prompt: string, diaryID: string) {
    try {
        console.log("音楽生成開始 - prompt:", prompt);

        // 1. 生成リクエスト
        const predictionRes = await fetchWithRetry("https://api.replicate.com/v1/predictions", {
            method: "POST",
            headers: {
                Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                version: "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
                input: { prompt },
            }),
        }, 3, 20000);

        const prediction = await predictionRes.json();
        console.log("予測ID:", prediction.id);

        // 2. 生成完了待機
        const finalResult = await waitForPrediction(prediction.id);
        const audioUrl = finalResult.output.audio;
        console.log("生成された音声URL:", audioUrl);

        // 3. ダウンロード＆保存
        const tmpDir = os.tmpdir();
        const inputPath = path.join(tmpDir, "input.wav");
        const outputPath = path.join(tmpDir, "output20s.wav");

        const audioBuffer = await fetchWithRetry(audioUrl, {}, 3, 20000).then(res => res.arrayBuffer());
        fs.writeFileSync(inputPath, Buffer.from(audioBuffer));
        console.log("音声ファイルを一時保存:", inputPath);

        await repeatAudioTo20Seconds(inputPath, outputPath);
        console.log("音声を20秒にリピート処理完了:", outputPath);

        // 4. Supabaseにアップロード
        const fileData = fs.readFileSync(outputPath);
        const fileName = `music_${Date.now()}.wav`;
        const publicUrl = await uploadToSupabase(fileName, fileData);

        if (!publicUrl) throw new Error("Supabaseへのアップロードに失敗しました");
        console.log("Supabaseアップロード後のURL:", publicUrl);

        // 5. DBに登録
        const created = await prisma.musics.create({
            data: {
                title: prompt,
                music_url: publicUrl,
                generation_type: "AUTO",
                diaryID,
            },
        });
        console.log("DB登録成功:", created);
        return created;

    } catch (err: any) {
        console.error("generateAndUploadMusic エラー:", err);
        throw new Error(err.message || "音楽生成に失敗しました");
    }
}
