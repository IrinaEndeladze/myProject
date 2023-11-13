import authService from "@/services/authServices";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password, fromRegistration, registeredUser } =
          credentials as any;

        if (!!fromRegistration && !!registeredUser) {
          return JSON.parse(registeredUser);
        }

        const user = await authService.login(email, password);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      //@ts-ignore unreachable next-auth types error
      session.user = token;

      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/",
    error: "/",
  },

  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});
