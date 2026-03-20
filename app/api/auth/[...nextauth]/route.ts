import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Role } from "@/app/generated/prisma";

// Extend next-auth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      role: Role;
    };
  }

  interface JWT {
    role?: Role;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) return null;

        // ✅ safely assign role
        const role = user.role === "ADMIN" ? "ADMIN" : "USER";

        return {
          id: user.id,
          email: user.email,
          role,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "super-secret-morent-2026",

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Role type
      }
      return token;
    },

    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role as Role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login", // აქ რედირექტი login page-ზე
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
