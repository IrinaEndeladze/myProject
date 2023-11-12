import InfoCard from "@/components/card/infoCard";
import IStudents from "@/types/IStudents";
import Students from "../students/page";
import {
  CourseIcon,
  PaymentIcon,
  StudentIcon,
} from "../../../../public/Icons/Icons";
import db from "../../../../db.json";

type IData = {
  students: IStudents[];
};
export default async function HomePage() {
  const cardData = [
    {
      id: 1,
      title: "Students",
      totalNumbe: db?.students?.length,
      bgColor: "rgba(240, 249, 255, 1)",
      icon: <StudentIcon width={48} height={38} fill={"#74C1ED"} />,
    },
    {
      id: 2,
      title: "Course",
      totalNumbe: db?.courses?.length,
      bgColor: "rgba(254, 246, 251, 1)",
      icon: <CourseIcon width={28} height={35} fill={"#EE95C5"} />,
    },
    {
      id: 3,
      title: "Payments",
      totalNumbe: db?.payment?.length,
      bgColor: "rgba(254, 251, 236, 1)",
      icon: <PaymentIcon width={35} height={35} fill={"#F6C762"} />,
    },
  ];

  return (
    <div className=" w-full  ">
      <div className="grid grid-cols-3 w-full pt-9 pl-[60px]">
        {cardData.map((item) => (
          <InfoCard
            key={item?.id}
            svg={item?.icon}
            title={item?.title}
            totalNumber={item?.totalNumbe}
            bgColor={item?.bgColor}
          />
        ))}
      </div>
    </div>
  );
}
