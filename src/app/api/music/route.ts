import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function GET(req: NextRequest) {
    const diaryID = req.nextUrl.searchParams.get("diaryID");

    if (!diaryID) {
        return NextResponse.json({ error: "diaryID is required" }, { status: 400 });
    }

    const { data, error } = await supabase
        .from("musics")
        .select("music_url")
        .eq("diaryID", diaryID)
        .order("created_at", { ascending: false })
        .limit(1);

    if (error) {
        console.error("❌ Supabaseエラー:", error);
    }
    console.log("🔍 Supabaseレスポンス:", data);

    if (!data || data.length === 0) {
        return NextResponse.json({ error: "音楽が見つかりません" }, { status: 404 });
    }


    return NextResponse.json({ music_url: data[0].music_url });
}
