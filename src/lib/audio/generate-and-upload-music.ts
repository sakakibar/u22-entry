import { repeatAudioTo20Seconds } from "./repeatAudio";
import fs from "fs";
import path from "path";
import os from "os";
import { prisma } from "@/lib/prisma";
import { uploadToSupabase } from "./uploadToSupabase"; // もしupload関数を別ファイルに分けていればimport

export async function generateAndUploadMusic(prompt: string, diaryID: string) {
    // 1. Replicate API で生成
    console.log("音楽生成開始 - prompt:", prompt);
    const prediction = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            version: "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05", // model version
            input: { prompt },
        }),
    }).then(res => res.json());

    console.log("予測ID:", prediction.id);

    const predictionId = prediction.id;

    // 2. 完了を待機
    const finalResult = await waitForPrediction(predictionId);
    const audioUrl = finalResult.output.audio;
    console.log("生成された音声URL:", audioUrl);

    // 3. ダウンロード＆保存
    const tmpDir = os.tmpdir();
    const inputPath = path.join(tmpDir, "input.wav");
    const outputPath = path.join(tmpDir, "output20s.wav");

    const audioBuffer = await fetch(audioUrl).then(res => res.arrayBuffer());
    fs.writeFileSync(inputPath, Buffer.from(audioBuffer));
    console.log("音声ファイルを一時保存:", inputPath);

    await repeatAudioTo20Seconds(inputPath, outputPath);
    console.log("音声を20秒にリピート処理完了:", outputPath);

    // 4. Supabaseにアップロード（例：storage）
    const fileData = fs.readFileSync(outputPath);
    const fileName = `music_${Date.now()}.wav`;

    const publicUrl = await uploadToSupabase(fileName, fileData);
    console.log("Supabaseアップロード後のURL:", publicUrl);

    if (!publicUrl) {
        throw new Error("Supabaseへのアップロードに失敗しました");
    }

    // 5. DBに登録
    try {
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
    } catch (err) {
        console.error("DB登録失敗:", err);
        throw err;
    }
}

async function waitForPrediction(id: string) {
    console.log("音楽生成の完了待機開始");
    while (true) {
        const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
            headers: {
                Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            },
        });
        const data = await res.json();
        console.log("生成状態:", data.status);
        if (data.status === "succeeded") return data;
        if (data.status === "failed") throw new Error("Prediction failed");
        await new Promise((r) => setTimeout(r, 2000));
    }
}
