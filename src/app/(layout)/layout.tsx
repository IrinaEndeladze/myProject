import SideBar from "@/components/sideBar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My small project",
  description: "Created for test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-full flex">
          <div className="max-w-[270px] h-[100vh] w-full bg-layoutBgColor">
            <SideBar />
          </div>
          <div className="w-full bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
