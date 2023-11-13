"use client";
import { useState } from "react";
import DataHeader from "../tableHeader";
import StudentsModal from "../modals/studentModal";
import IStudentsData from "@/types/IStudentsData";
import DataTable from "../dataTable";
import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditIcon, DeleteIcon } from "../../../public/Icons/Icons";
import Image from "next/image";
import DeleteModal from "../modals/deleteModal";

interface Props {
  studentsData: IStudentsData[];
}

const AddStudents = ({ studentsData }: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseId, setCourseId] = useState<number>();

  const columns: ColumnsType<IStudentsData> = [
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Personal Number",
      dataIndex: "personal_number",
      key: "personal_number",
    },
    {
      title: "Date of admission",
      dataIndex: "dateOfAdmission",
      key: "dateOfAdmission",
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
        <StudentsModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          Id={courseId}
        />
      )}
      {deleteModalOpen && (
        <DeleteModal
          type={"students"}
          courseId={courseId}
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
        />
      )}
      <DataHeader
        btnName="ADD NEW STUDENT"
        headerTitle="Students List"
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
      />
      <DataTable<IStudentsData> columns={columns} data={studentsData} />
    </div>
  );
};

export default AddStudents;
