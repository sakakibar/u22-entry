import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
    try {
        const diaries = await prisma.diary.findMany({
            select: {
                diaryID: true,
                title: true,
                content:true,
                score:true,
                weather:true,
                people:true,
                hobby:true,
                mood:true,
                imageUrl:true,
                created_at: true
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
