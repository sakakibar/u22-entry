// src/lib/auth.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
            async authorize(credentials) {
                if (credentials?.email === "test@example.com" && credentials.password === "test") {
                    return { id: "user_1", name: "Test User", email: credentials.email };
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user?.id) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            if (token.id) session.user.id = token.id;
            return session;
        },
    },
    session: { strategy: "jwt" },
};
