"use client";
import { useEffect, useState } from "react";
import {
  CourseIcon,
  HomeIcon,
  LogoutIcon,
  PaymentIcon,
  StudentIcon,
} from "../../../public/Icons/Icons";
import UserAvatar from "../userAvatar";
import { Button } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { link } from "fs";

const DashboardItem = [
  {
    id: 1,
    title: "Home",
    svg: <HomeIcon />,
    link: "/homePage",
  },
  {
    id: 2,
    title: "Course",
    svg: <CourseIcon />,
    link: "/course",
  },
  {
    id: 3,
    title: "Students",
    svg: <StudentIcon />,
    link: "/students",
  },
  {
    id: 4,
    title: "Payment",
    svg: <PaymentIcon />,
    link: "/payment",
  },
];

const SideBar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  return (
    <div className="flex   items-center pt-[96px] flex-col w-full h-full">
      <UserAvatar image={"/avatar.png"} />
      <div className="flex flex-col gap-[15px] justify-between max-w-[193px] w-full  items-center  mt-20">
        {DashboardItem?.map((item) => (
          <Link
            key={item?.id}
            onClick={() => setActiveTab(item?.link)}
            className="flex flex-row gap-[15px] bg-primary  items-center py-3 w-full justify-center rounded"
            style={{
              backgroundColor:
                activeTab === item?.link
                  ? "rgba(254, 175, 0, 1)"
                  : "transparent",
            }}
            href={item?.link}
          >
            {item?.svg}
            <div className="text-[14px] font-[500] text-primaryText">
              {item?.title}
            </div>
          </Link>
        ))}
        <div className="flex flex-row gap-[23px] justify-center items-center absolute bottom-[33px] cursor-pointer">
          <Button
            type="link"
            className="text-[14px] font-[500] text-primaryText"
          >
            Logout
          </Button>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
