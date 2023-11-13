import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import User from "@/types/IUser";

async function getUser(email: string, password: string): Promise<User | any> {
  console.log("response", email);
  try {
    const response = await fetch(`http://localhost:3000/api/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Authentication failed  aqaneeeeeeeeeee");
    }

    const users = await response.json();
    const user = users.find((user: { email: string }) => user.email === email);
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email, password);
          if (!user) return null;
          console.log("Invalid credentials", password, user.password);
          //   const passwordsMatch = await bcrypt.compare(password, user.password);
          //   if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});
