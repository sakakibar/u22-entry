import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const user = await prisma.users.findUnique({
            where: { userID: params.id },
            select: { userID: true, username: true, mail: true }
        });

        if (!user) {
            return NextResponse.json({ error: "ユーザーが見つかりません" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await req.json();
        const updated = await prisma.users.update({
            where: { userID: params.id },
            data: { username: body.username, mail: body.mail }
        });
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: "更新に失敗しました" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        await prisma.users.delete({ where: { userID: params.id } });
        return NextResponse.json({ message: "アカウント削除成功" });
    } catch (error) {
        return NextResponse.json({ error: "削除に失敗しました" }, { status: 500 });
    }
}
