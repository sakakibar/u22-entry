// src/app/api/report/route.ts
import { NextResponse } from "next/server";
import supabaseServer from "@/lib/supabaseServer";

export async function GET(req: Request) {
    try {
        // クエリパラメータから userID を取得
        const { searchParams } = new URL(req.url);
        const userID = searchParams.get("userID");
        if (!userID) return NextResponse.json({ error: "userID が指定されていません" }, { status: 400 });

        // 今月の範囲
        const now = new Date();
        const firstDayISO = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        const lastDayISO = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).toISOString();

        console.log("userID:", userID, "firstDayISO:", firstDayISO, "lastDayISO:", lastDayISO);

        // RPC 呼び出し（引数順に注意）
        const { data, error } = await supabaseServer.rpc("get_diary_in_range", {
            diary_date_start: firstDayISO,
            diary_date_end: lastDayISO,
            user_id: userID, // ここで必ず userID を渡す
        });

        if (error) {
            console.error("RPC 呼び出しエラー:", error);
            return NextResponse.json({ error: "RPCアクセス不可" }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error("API エラー:", err);
        return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
    }
}
