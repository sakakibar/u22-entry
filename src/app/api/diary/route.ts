import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PUT(req: NextRequest) {
  try {
    const { diaryID, title, content, score, weather, people, hobby, mood, imageUrl } = await req.json();

    if (!diaryID) {
      return NextResponse.json({ success: false, error: 'diaryID が必要です' }, { status: 400 });
    }

    const updated = await prisma.diary.update({
      where: { diaryID },
      data: {
        title,
        content,
        score,
        weather,
        people,
        hobby,
        mood,
        imageUrl,
      },
    });

    return NextResponse.json({ success: true, diary: updated });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: '更新に失敗しました' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { diaryID } = await req.json();

    if (!diaryID) {
      return NextResponse.json({ success: false, error: 'diaryID が必要です' }, { status: 400 });
    }

    await prisma.diary.delete({
      where: { diaryID },
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: '削除に失敗しました' }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const { poster, title, content, score, weather, people, hobby, mood, imageUrl } = await req.json();

    console.log('poster:', poster);

    if (!poster || poster.trim() === '') {
      return NextResponse.json(
          { success: false, error: 'poster（ユーザーID）が必須です' },
          { status: 400 }
      );
    }

    // 日付取得（0時に丸め）
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // 今日の投稿があるか確認
    const existingDiary = await prisma.diary.findFirst({
      where: {
        user: { userID: poster },
        created_at: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    if (existingDiary) {
      return NextResponse.json(
          { success: false, error: '今日はすでに日記を登録済みです。' },
          { status: 400 }
      );
    }

    // 新規作成
    const diary = await prisma.diary.create({
      data: {
        title,
        content,
        score,
        weather,
        people,
        hobby,
        mood,
        imageUrl,
        user: {
          connect: { userID: poster },
        },
      },
    });

    return NextResponse.json({ success: true, diary });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: '登録失敗' }, { status: 500 });
  }
}
