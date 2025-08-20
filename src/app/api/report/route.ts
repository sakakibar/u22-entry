import { NextResponse } from "next/server";
import supabaseServer from "@/lib/supabaseServer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET() {
    // ログインセッション取得
    const session = await getServerSession(authOptions);
    if (!session?.user?.userID) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userID = session.user.userID; // UUID

    try {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999).toISOString();

        // UUID 対応の RPC 呼び出し
        const { data, error } = await supabaseServer.rpc("get_diary_in_range", {
            diary_date_start: firstDay,
            diary_date_end: lastDay,
            user_id: userID, // UUID を渡す
        });

        if (error) {
            console.error("Supabaseエラー:", error);
            return NextResponse.json({ error: "データ取得に失敗しました" }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error("APIエラー:", err);
        return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
    }
}
