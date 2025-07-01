import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Login API body:", body);

        const email = body.email;
        const password = body.password;
        console.log("Received email:", email);
        console.log("Received password:", password);

        if (!email || !password) {
            console.log("Missing email or password");
            return new Response(
                JSON.stringify({ error: "全ての項目を入力してください" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const user = await prisma.users.findUnique({ where: { mail: email } });
        console.log("User found:", user);

        if (!user) {
            console.log("No user with this email");
            return new Response(
                JSON.stringify({ error: "メールアドレスが存在しません" }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }

        if (password !== user.password) {
            console.log("Password mismatch");
            return new Response(
                JSON.stringify({ error: "パスワードが正しくありません" }),
                { status: 401, headers: { "Content-Type": "application/json" } }
            );
        }

        console.log("Login success");
        return new Response(
            JSON.stringify({ message: "ログイン成功" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("サーバーエラー:", error);
        return new Response(
            JSON.stringify({ error: "サーバーエラー" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
