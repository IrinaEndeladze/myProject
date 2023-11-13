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

interface Props {
  studentsData: IStudentsData[];
}

const AddStudents = ({ studentsData }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("ADD STUDENT");

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
              setModalTitle("EDIT STUDENT"), setIsModalOpen(!isModalOpen);
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
        <StudentsModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          title={modalTitle}
        />
      )}
      <DataHeader
        btnName="ADD NEW STUDENT"
        headerTitle="Students List"
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
        setModalTitle={setModalTitle}
      />
      <DataTable<IStudentsData> columns={columns} data={studentsData} />
    </div>
  );
};

export default AddStudents;
