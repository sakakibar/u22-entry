// route.ts
import { generateAndUploadMusic } from "@/lib/audio/generate-and-upload-music";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 🎵 POST: 音楽生成して保存
export async function POST(req: Request) {
    const { prompt, diaryID } = await req.json();
    console.log("[generate-music] POST called with:", { prompt, diaryID });

    if (!prompt || !diaryID) {
        return new Response("Missing prompt or diaryID", { status: 400 });
    }

    try {
        const music = await generateAndUploadMusic(prompt, diaryID);
        console.log("[generate-music] music generation success:", music);
        return new Response(JSON.stringify(music), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("[generate-music] error:", err);
        return new Response("Error generating music", { status: 500 });
    }
}


// 🎵 GET: ある日記の音楽URLを取得
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const diaryID = searchParams.get("diaryID");

    if (!diaryID) {
        return new Response(JSON.stringify({ error: "Missing diaryID" }), {
            status: 400,
        });
    }

    const { data, error } = await supabase
        .from("musics")
        .select("music_url")
        .eq("diaryID", diaryID)
        .order("created_at", { ascending: false })
        .limit(1)

    if (!data || data.length === 0) {
        return new Response(JSON.stringify({ error: "No music found" }), { status: 404 });
    }

    console.log("supabase result:", data);
    console.log("supabase error:", error );

    if (error) {
        console.error("Error fetching music:", error.message);
        return new Response(
            JSON.stringify({ error: "Failed to fetch music" }),
            { status: 500 }
        );
    }

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
