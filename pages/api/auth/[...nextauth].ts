import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import type { User } from "next-auth";
import type { NextApiRequest } from "next";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<NextApiRequest, "body" | "query" | "headers" | "method">
      ): Promise<User | null> {
        const users = [
          { id: 1, email: "admin@example.com", role: "admin" },
          { id: 2, email: "pengantin@example.com", role: "couple" },
          { id: 3, email: "tamu@example.com", role: "guest" },
        ];

        const user = users.find((u) => u.email === credentials?.email);
        if (user) {
          return {
            id: String(user.id),
            email: user.email,
            role: user.role,
          } as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.role) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user && "role" in user) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
