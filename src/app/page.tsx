"use client";
import LoginForm from "@/components/LoginForm/page";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center p-24 bg-custom-gradient">
      <LoginForm />
    </main>
  );
}
