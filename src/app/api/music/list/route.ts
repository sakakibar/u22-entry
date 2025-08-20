import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.userID) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const userID = session.user.userID;

    try {
        const musics = await prisma.musics.findMany({
            where: {
                diary: {
                    poster: userID, // ログインユーザーのDiaryに紐づく音楽だけ取得
                },
            },
            select: {
                musicID: true,
                title: true,
                music_url: true,
                created_at: true,
                diary: {
                    select: {
                        imageUrl: true, // Diaryモデルのフィールド名
                    },
                },
            },
            orderBy: {
                created_at: 'desc',
            },
        });

        return NextResponse.json(musics);
    } catch (error) {
        console.error("音楽一覧の取得エラー:", error);
        return NextResponse.json({ error: "データ取得失敗" }, { status: 500 });
    }
}
