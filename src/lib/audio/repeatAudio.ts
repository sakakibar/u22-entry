import ffmpeg from "fluent-ffmpeg";

export async function repeatAudioTo20Seconds(inputPath, outputPath) {
    // ffmpeg.exe のパスを C:直下に指定
    ffmpeg.setFfmpegPath("C:/ffmpeg.exe");

    return new Promise((resolve, reject) => {
        ffmpeg()
            .input(inputPath)
            .inputOptions(["-stream_loop", "-1"])
            .duration(20)
            .on("end", resolve)
            .on("error", (err) => {
                console.error("❌ ffmpeg error:", err);
                reject(err);
            })
            .save(outputPath);
    });
}
