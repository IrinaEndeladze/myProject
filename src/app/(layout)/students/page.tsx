"use client";
import DataTable from "@/components/dataTable";
import { Button, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { DeleteIcon, EditIcon } from "../../../../public/Icons/Icons";
import IStudentsData from "@/types/IStudentsData";
import DataHeader from "@/components/tableHeader";
import { useState } from "react";
import StudentsModal from "@/components/modals/studentModal";

const Students = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("ADD STUDENT");
  const columns: ColumnsType<IStudentsData> = [
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
      dataIndex: "personalNumber",
      key: "personalNumber",
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

  const data: IStudentsData[] = [
    {
      key: "1",
      name: "anna",
      email: "hello@gmail.com",
      phone: 912344324,
      personalNumber: 324234234,
      dateOfAdmission: "08-Dec, 2021",
      image: "/avatar.png",
    },
    {
      key: "2",
      name: "anna",
      email: "hello@gmail.com",
      phone: 912344324,
      personalNumber: 324234234,
      dateOfAdmission: "08-Dec, 2021",
      image: "/avatar.png",
    },
    {
      key: "3",
      name: "anna",
      email: "hello@gmail.com",
      phone: 912344324,
      personalNumber: 324234234,
      dateOfAdmission: "08-Dec, 2021",
      image: "/avatar.png",
    },
  ];

  return (
    <div className="bg-secondaryBg px-[30px] flex flex-col">
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
      <DataTable<IStudentsData> columns={columns} data={data} />
    </div>
  );
};

export default Students;
