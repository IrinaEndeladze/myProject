"use client";
import { useState } from "react";
import DataHeader from "../tableHeader";
import DataTable from "../dataTable";
import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditIcon, DeleteIcon } from "../../../public/Icons/Icons";
import Image from "next/image";
import ICourseData from "@/types/ICourseData";
import db from "../../../db.json";
import CourseModal from "../modals/courseModal";

interface Props {
  courseData: ICourseData[];
}

const AddCourse = ({ courseData }: Props) => {
  const teachersData = db.teachers;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("ADD STUDENT");

  const columns: ColumnsType<ICourseData> = [
    {
      title: "",
      dataIndex: "key",
      key: "key",
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
        return <a>{"rane"}</a>;
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
    <div>
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

export default AddCourse;
