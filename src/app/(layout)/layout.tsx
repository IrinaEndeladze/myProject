import Header from "@/components/header";
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
        <div className=" flex container">
          <div className="max-w-[270px] h-[100vh] w-full bg-layoutBgColor">
            <SideBar />
          </div>
          <div className=" flex flex-col w-full  ">
            <Header />
            <div className="w-full bg-secondaryBg h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
