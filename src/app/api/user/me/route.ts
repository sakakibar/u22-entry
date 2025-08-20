import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // NextAuth 設定
import { supabase } from "@/lib/supabase";

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return new Response(JSON.stringify({ error: "ログインしていません" }), { status: 401 });
    }

    const userId = session.user.id;

    const { data, error } = await supabase
        .from("profiles")
        .select("username,email")
        .eq("id", userId)
        .single();

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ data }));
}
