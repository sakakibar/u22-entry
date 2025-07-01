import { repeatAudioTo20Seconds } from "@/lib/audio/repeatAudio";
import fs from "fs";
import os from "os";
import path from "path";

const tmpDir = os.tmpdir()
console.log("Temp directory:",tmpDir);

const inputPath = path.join(tmpDir, "input.wav");
const outputPath = path.join(tmpDir, "output20s.wav");

export const runtime = "nodejs"; // App Router 使用時の指定

async function waitForPrediction(id) {
    while (true) {
        const res = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
            headers: {
                Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            },
        });
        const data = await res.json();
        if (data.status === "succeeded") {
            return data;
        }
        if (data.status === "failed") {
            throw new Error("Prediction failed");
        }
        await new Promise((r) => setTimeout(r, 2000));
    }
}

export async function POST(req: Request) {
    console.log("🚀 API POST started");

    const { prompt } = await req.json();
    console.log("🎯 Received prompt:", prompt);

    if (!prompt) {
        console.log("❌ Prompt is missing");
        return new Response(JSON.stringify({ message: "Prompt is required" }), { status: 400 });
    }

    console.log("🔄 Sending prediction request to Replicate API");
    const response = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            version: "8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
            input: { prompt },
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        console.log("❌ Replicate API error:", error);
        return new Response(JSON.stringify({ message: "API error", error }), { status: 500 });
    }

    const prediction = await response.json();
    console.log("✅ Prediction created, id:", prediction.id);

    try {
        console.log("⏳ Waiting for prediction to complete...");
        const finalResult = await waitForPrediction(prediction.id);
        console.log("✅ Prediction succeeded");

        const audioUrl = finalResult.output.audio;
        console.log("🔗 Audio URL:", audioUrl);

        if (!audioUrl) {
            console.log("❌ No audio output found");
            return new Response(JSON.stringify({ message: "No audio output found" }), { status: 500 });
        }

        console.log("⬇️ Downloading audio from URL");
        const audioBuffer = await fetch(audioUrl).then((res) => res.arrayBuffer());
        fs.writeFileSync(inputPath, Buffer.from(audioBuffer));
        console.log("💾 Audio saved to inputPath:", inputPath);

        console.log("🔁 Extending audio to 20 seconds");
        await repeatAudioTo20Seconds(inputPath, outputPath);
        console.log("✅ Audio extended, saved to outputPath:", outputPath);

        const finalAudio = fs.readFileSync(outputPath);
        console.log("📤 Sending audio response");

        return new Response(finalAudio, {
            status: 200,
            headers: { "Content-Type": "audio/wav" },
        });
    } catch (e) {
        console.error("❌ Error during prediction handling:", e);
        return new Response(
            JSON.stringify({ message: "Prediction failed", error: e.message }),
            { status: 500 }
        );
    }
}
