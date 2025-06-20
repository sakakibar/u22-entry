import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { poster, title, content, score, weather, people, hobby, mood } = await req.json();

    console.log('poster:', poster);

    if (!poster || poster.trim() === '') {
      return NextResponse.json(
          { success: false, error: 'poster（ユーザーID）が必須です' },
          { status: 400 }
      );
    }

    const diary = await prisma.diary.create({
      data: {
        title,
        content,
        score,
        weather,
        people,
        hobby,
        mood,
        user: {
          connect: { userID: poster }, // ← 実際のユーザーIDをここにセットしてください
        },
      },
    });

    return NextResponse.json({ success: true, diary });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: '登録失敗' }, { status: 500 });
  }
}
