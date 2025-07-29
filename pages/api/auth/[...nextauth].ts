import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const users = [
          { id: 1, email: "admin@example.com", role: "admin" },
          { id: 2, email: "pengantin@example.com", role: "couple" },
          { id: 3, email: "tamu@example.com", role: "guest" },
        ];

        const user = users.find(u => u.email === credentials?.email);

        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
  },
});

export { handler as GET, handler as POST };
