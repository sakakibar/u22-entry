// src/app/api/change-password/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { currentPassword, newPassword } = body;

        // セッションから userID を取得する場合
        // ここでは例としてヘッダで渡される想定
        const userId = req.headers.get("x-user-id");
        if (!userId) return NextResponse.json({ error: "未ログインです" }, { status: 401 });

        const user = await prisma.users.findUnique({
            where: { userID: userId },
            select: { password: true },
        });

        if (!user) return NextResponse.json({ error: "ユーザーが存在しません" }, { status: 404 });

        if (user.password !== currentPassword) {
            return NextResponse.json({ error: "現在のパスワードが違います" }, { status: 400 });
        }

        await prisma.users.update({
            where: { userID: userId },
            data: { password: newPassword },
        });

        return NextResponse.json({ message: "パスワードを変更しました" });
    } catch (err) {
        console.error("Change password error:", err);
        return NextResponse.json({ error: "サーバーエラーが発生しました" }, { status: 500 });
    }
}
