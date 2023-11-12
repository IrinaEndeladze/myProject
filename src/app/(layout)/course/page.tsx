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
import db from "../../../../db.json";

const Course = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("ADD STUDENT");

  const [courseData, setCourseData] = useState(db.courses);

  const teachersData = db.teachers;

  const columns: ColumnsType<ICourseData> = [
    {
      title: "",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <Image
          src={"/avatar.png"}
          alt={""}
          width={65}
          height={55}
          className="rounded-lg  object-contain"
        />
      ),
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
      key: "course_name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Level",
      dataIndex: "course_difficulty",
      key: "course_difficulty",
    },
    {
      title: "Instructor",
      dataIndex: "teacher_id",
      key: "teacher_id",
      render: (id) => {
        const teacherName = teachersData.filter((item) => item.id === id);
        return <a>{teacherName[0].name}</a>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
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
      <DataTable<ICourseData> columns={columns} data={courseData} />
    </div>
  );
};

export default Course;
