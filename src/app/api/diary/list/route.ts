import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next"; // next-auth/nextが正しいです
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: Response) {
    // セッションを取得 (reqを渡す)
    const session = await getServerSession(authOptions); // 型によっては型アサーション

    if (!session?.user?.userID) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const userID = session.user.userID;

    try {
        const diaries = await prisma.diary.findMany({
            where: {
                poster:userID,  // ここでログインユーザーのみに絞る
            },
            select: {
                diaryID: true,
                title: true,
                content: true,
                score: true,
                weather: true,
                people: true,
                hobby: true,
                mood: true,
                imageUrl: true,
                created_at: true,
            },
            orderBy: {
                created_at: 'desc',
            },
        });

        return NextResponse.json(diaries);
    } catch (error) {
        console.error("API /api/diary/list 取得エラー:", error);
        return NextResponse.json({ error: "データ取得失敗" }, { status: 500 });
    }
}
