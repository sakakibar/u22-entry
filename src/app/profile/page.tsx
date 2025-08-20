"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

type ProfileData = {
    username: string;
    age: number | null;
    gender: string;
    icon: string;
    bio: string;
};

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const userId = session?.user?.id;
    const userEmail = session?.user?.email;

    const [profile, setProfile] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("useEffect start");
        console.log("session:", session);
        console.log("status:", status);
        console.log("userId:", userId);
        console.log("userEmail:", userEmail);

        if (!userId) {
            console.log("userIdがないため終了");
            setLoading(false);
            return;
        }

        const fetchProfile = async () => {
            setLoading(true);
            console.log("プロフィール取得開始: userID =", userId);

            const { data, error } = await supabase
                .from("users")
                .select("username, age, gender, icon, bio")
                .eq("userID", userId)
                .single();

            if (error) {
                console.error("プロフィール取得エラー:", error);
                alert("プロフィールの読み込みに失敗しました");
                setProfile(null);
            } else {
                console.log("プロフィール取得成功:", data);
                setProfile(data);
            }
            setLoading(false);
        };

        fetchProfile();
    }, [userId, status, session]);

    if (status === "loading" || loading) {
        return <p>読み込み中...</p>;
    }

    if (!session) {
        return <p>ログインしてください</p>;
    }

    if (!profile) {
        return <p>プロフィール情報がありません</p>;
    }

    return (
        <main>
            <h1>プロフィール</h1>
            {profile.icon && (
                <img src={profile.icon} alt={`${profile.username}のアイコン`} width={100} height={100} />
            )}
            <p><strong>ユーザー名:</strong> {profile.username}</p>
            <p><strong>年齢:</strong> {profile.age ?? "未登録"}</p>
            <p><strong>性別:</strong> {profile.gender || "未登録"}</p>
            <p><strong>自己紹介:</strong></p>
            <p>{profile.bio || "未登録"}</p>
        </main>
    );
}
