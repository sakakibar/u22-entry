import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user) return new Response(JSON.stringify({ error: "ログインしていません" }), { status: 401 });

    const { username, email } = await req.json();
    const userId = session.user.id;

    // profiles 更新
    const { error: profileError } = await supabase
        .from("profiles")
        .update({ username, email })
        .eq("id", userId);

    if (profileError) return new Response(JSON.stringify({ error: profileError.message }), { status: 500 });

    return new Response(JSON.stringify({ message: "更新成功" }));
}
