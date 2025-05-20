import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { title, content, musicUrl } = await req.json();

    if (!title || !content) {
      return NextResponse.json({ error: 'タイトルと内容は必須です' }, { status: 400 });
    }

    const diary = await prisma.diary.create({
      data: {
        title,
        content,
        musicUrl,
      },
    });

    return NextResponse.json(diary);
  } catch (error) {
    return NextResponse.json({ error: 'エラーが発生しました' }, { status: 500 });
  }
}
