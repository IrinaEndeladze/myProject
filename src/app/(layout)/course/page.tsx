"use client";
import DataTable from "@/components/dataTable";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { DeleteIcon, EditIcon } from "../../../../public/Icons/Icons";
import ICourseData from "@/types/ICourseData";
import DataHeader from "@/components/tableHeader";
import { useState } from "react";

import CourseModal from "@/components/modals/courseModal";

const data: ICourseData[] = [
  {
    key: "1",
    coursename: "react",
    level: "beginer",
    instructor: "irina",
    startDate: "08-Dec, 2021",
    endDate: "08-Dec, 2021",
    image: "/avatar.png",
  },
  {
    key: "2",
    coursename: "next js",
    level: "beginer",
    instructor: "irina",
    startDate: "08-Dec, 2021",
    endDate: "08-Dec, 2021",
    image: "/avatar.png",
  },
  {
    key: "3",
    coursename: "angular",
    level: "beginer",
    instructor: "irina",
    startDate: "08-Dec, 2021",
    endDate: "08-Dec, 2021",
    image: "/avatar.png",
  },
];

const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("ADD STUDENT");
  const columns: ColumnsType<ICourseData> = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <Image
          src={text}
          alt={""}
          width={65}
          height={55}
          className="rounded-lg  object-contain"
        />
      ),
    },
    {
      title: "Course Name",
      dataIndex: "coursename",
      key: "coursename",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      key: "instructor",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="cursor-pointer"
            onClick={() => {
              setModalTitle("EDIT COURSE"), setIsModalOpen(!isModalOpen);
            }}
          >
            <EditIcon />
          </div>
          <DeleteIcon />
        </Space>
      ),
    },
  ];
  return (
    <div className="bg-secondaryBg px-[30px] flex flex-col">
      {isModalOpen && (
        <CourseModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          title={modalTitle}
        />
      )}
      <DataHeader
        btnName="ADD NEW COURSE"
        headerTitle="Course List"
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
        setModalTitle={setModalTitle}
      />
      <DataTable<ICourseData> columns={columns} data={data} />
    </div>
  );
};

export default Course;
