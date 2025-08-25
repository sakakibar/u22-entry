import { NextRequest, NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';
import { getServerSession } from "next-auth/next"; // next-auth/nextが正しいです
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.userID) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const userID = session.user.userID;

    try {
        const diaries = await prisma.Diary.findMany({
            where: { poster: userID },
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
                musics: {
                    select: {
                        musicID: true,
                        title: true,
                        music_url: true,
                    }
                }
            },
            orderBy: { created_at: 'desc' },
        });

// 文字列として保存されている場合に JSON 化
        const normalizedDiaries = diaries.map(d => ({
            ...d,
            weather: d.weather ? JSON.parse(d.weather as string) : null,
            people: d.people ? JSON.parse(d.people as string) : null,
            hobby: d.hobby ? JSON.parse(d.hobby as string) : null,
            mood: d.mood ? JSON.parse(d.mood as string) : null,
        }));

        return NextResponse.json(normalizedDiaries);

    } catch (error) {
        console.error("API /api/diary/list 取得エラー:", error);
        return NextResponse.json({ error: "データ取得失敗" }, { status: 500 });
    }
}
