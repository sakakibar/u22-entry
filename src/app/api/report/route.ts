import { NextResponse } from "next/server";
import supabaseServer from "@/lib/supabaseServer";

export async function GET() {
    try {
        // 今月の範囲を計算
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).toISOString();

        // RPCで1か月分のデータ取得
        const { data, error } = await supabaseServer.rpc("get_diary_in_range", {
            diary_date_start: firstDay,
            diary_date_end: lastDay,
            user_id: "cmep7oebm000ejp4cedef8pzj", // 実際はセッションから取得
        });

        if (error) {
            console.error("RPC呼び出しエラー:", error);
            return NextResponse.json({ error: "RPCアクセス不可" }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error("API エラー:", err);
        return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
    }
}
