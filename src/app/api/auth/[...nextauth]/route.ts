import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = await prisma.users.findUnique({
                    where: { mail: credentials?.email },
                });
                if (!user || user.password !== credentials?.password) {
                    throw new Error("メールまたはパスワードが間違っています");
                }
                return { id: user.userID, email: user.mail, name: user.username };
            },
        }),
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.userID = user.id;
            return token;
        },
        async session({ session, token }) {
            session.user = { ...session.user, userID: token.userID as string };
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
