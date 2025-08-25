import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * 日記を更新
 */
export async function PUT(req: NextRequest) {
  try {
    const {
      diaryID,
      title,
      content,
      score,
      weather,
      people,
      hobby,
      mood,
      imageUrl,
    } = await req.json();

    if (!diaryID) {
      return NextResponse.json(
          { success: false, error: 'diaryID が必要です' },
          { status: 400 }
      );
    }

    const updated = await prisma.diary.update({
      where: { diaryID },
      data: {
        title,
        content,
        score,
        weather: JSON.stringify(weather),
        people: JSON.stringify(people),
        hobby: JSON.stringify(hobby),
        mood: JSON.stringify(mood),
        imageUrl,
      },
    });

    return NextResponse.json({ success: true, diary: updated });
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json(
        { success: false, error: '更新に失敗しました' },
        { status: 500 }
    );
  }
}

/**
 * 日記を削除
 */
export async function DELETE(req: NextRequest) {
  try {
    const { diaryID } = await req.json();

    if (!diaryID) {
      return NextResponse.json(
          { success: false, error: 'diaryID が必要です' },
          { status: 400 }
      );
    }

    // 関連する音楽を削除
    await prisma.musics.deleteMany({
      where: { diaryID },
    });

    // 日記を削除
    await prisma.diary.delete({
      where: { diaryID },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json(
        { success: false, error: '削除に失敗しました' },
        { status: 500 }
    );
  }
}

/**
 * 日記を新規登録
 */
export async function POST(req: NextRequest) {
  try {
    const {
      poster,
      title,
      content,
      score,
      weather,
      people,
      hobby,
      mood,
      imageUrl,
      created_at,
    } = await req.json();

    if (!poster || poster.trim() === '') {
      return NextResponse.json(
          { success: false, error: 'poster（ユーザーID）が必須です' },
          { status: 400 }
      );
    }

    if (!created_at) {
      return NextResponse.json(
          { success: false, error: 'created_at が必要です' },
          { status: 400 }
      );
    }

    // created_at を UTC 0時で丸めて判定
    const dateParam = new Date(created_at);
    const start = new Date(dateParam);
    start.setUTCHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 1);

    // 同日の既存日記確認
    const existingDiary = await prisma.diary.findFirst({
      where: {
        user: { userID: poster },
        created_at: {
          gte: start,
          lt: end,
        },
      },
    });

    if (existingDiary) {
      return NextResponse.json(
          { success: false, error: 'この日はすでに日記を登録済みです。' },
          { status: 400 }
      );
    }

    // 新規日記登録
    const diary = await prisma.diary.create({
      data: {
        title,
        content,
        score,
        weather: JSON.stringify(weather),   // ← オブジェクトを文字列に変換
        people: JSON.stringify(people),
        hobby: JSON.stringify(hobby),
        mood: JSON.stringify(mood),
        imageUrl,
        created_at: dateParam,
        user: {
          connect: { userID: poster },
        },
      },
    });

    return NextResponse.json({
      success: true,
      diaryID: diary.diaryID,
      diary,
    });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
        { success: false, error: '登録に失敗しました' },
        { status: 500 }
    );
  }
}
