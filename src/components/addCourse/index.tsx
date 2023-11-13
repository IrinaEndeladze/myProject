"use client";
import { useEffect, useState } from "react";
import DataHeader from "../tableHeader";
import DataTable from "../dataTable";
import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditIcon, DeleteIcon } from "../../../public/Icons/Icons";
import Image from "next/image";
import ICourseData from "@/types/ICourseData";
import db from "../../../db.json";
import CourseModal from "../modals/courseModal";
import axios from "axios";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import DeleteModal from "../modals/deleteModal";

interface Props {
  courseData: ICourseData[];
}

const AddCourse = ({ courseData }: Props) => {
  const teachersData = db.teachers;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("ADD STUDENT");
  const [courseId, setCourseId] = useState<number>();

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
        return <a>{teacherName[0]?.name}</a>;
      },
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
      render: (start_date) => {
        return <span>{dayjs(start_date).format("YYYY-MM-DD")}</span>;
      },
    },
    {
      title: "End Date",
      dataIndex: "end_date",
      key: "end_date",
      render: (end_date) => {
        return <span>{dayjs(end_date).format("YYYY-MM-DD")}</span>;
      },
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="cursor-pointer"
            onClick={() => {
              console.log("record?.id", record?.id);
              setCourseId(record?.id);
              setIsModalOpen(!isModalOpen);
            }}
          >
            <EditIcon />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              console.log("record?.id", record?.id);
              setCourseId(record?.id);
              setDeleteModalOpen(!deleteModalOpen);
            }}
          >
            <DeleteIcon />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {isModalOpen && (
        <CourseModal
          courseId={courseId}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          title={modalTitle}
        />
      )}
      {deleteModalOpen && (
        <DeleteModal
          courseId={courseId}
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}
      <DataHeader
        btnName="ADD NEW COURSE"
        headerTitle="Course List"
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
      />
      <DataTable<ICourseData> columns={columns} data={courseData} />
    </div>
  );
};

export default AddCourse;
