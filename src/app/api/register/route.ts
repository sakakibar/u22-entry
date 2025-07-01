import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("body keys:", Object.keys(body));
        console.log("body:", body);
        console.log("body['name']:", body['name']);
        console.log("body.name:", body.name);


        //フロントからくるキー名をモデルのフィールド名に変更
        const username = body.name;
        console.log("username after assignment:", username);

        const mail = body.email;
        const password = body.password;
        console.log("mail:", JSON.stringify(mail));
        console.log("password:", JSON.stringify(password));



        if (!username || !mail || !password ||
            username.trim() === "" || mail.trim() === "" || password.trim() === "") {
            return new Response(
                JSON.stringify({ error: "username, mail, passwordは必須です" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }


        const existingUser = await prisma.users.findUnique({
            where: { mail },
        });

        if (existingUser) {
            return new Response(
                JSON.stringify({ error: "そのメールアドレスはすでに使われています" }),
                { status: 409, headers: { "Content-Type": "application/json" } }
            );
        }

        const newUser = await prisma.users.create({
            data: {
                username,
                mail,
                password, // 本番はハッシュ化必須！
            },
        });

        return new Response(
            JSON.stringify({ message: "ユーザー登録成功", userID: newUser.userID }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "サーバーエラー" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}