"use client";
import DataTable from "@/components/dataTable";
import type { ColumnsType } from "antd/es/table";
import IPayments from "@/types/IPayments";
import DataHeader from "@/components/tableHeader";
import db from "../../../../db.json";
import { useState } from "react";

const Payments = () => {
  const [paymentsData, setpaymentsData] = useState(db.payment);

  const columns: ColumnsType<IPayments> = [
    {
      title: "Name",
      dataIndex: "student_id",
      key: "student_id",
      render: (id) => {
        const studentsName = db.students.filter((item) => item.id === id);
        return <a>{studentsName[0].name}</a>;
      },
    },
    {
      title: "Payment Schedule",
      dataIndex: "Payment Schedule",
      key: "Payment Schedule",
    },
    {
      title: "Bill Number",
      dataIndex: "Bill Number",
      key: "Bill Number",
    },
    {
      title: "Amount Paid",
      dataIndex: "Amount Paid",
      key: "Amount Paid",
    },
    {
      title: "Balance amount",
      dataIndex: "Balance amount",
      key: "Balance amount",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
  ];

  return (
    <div className="bg-secondaryBg px-[30px] flex flex-col">
      <DataHeader
        btnName="hide"
        headerTitle="Payment Details"
        isOpen={false}
        setIsOpen={() => {}}
        setModalTitle={() => {}}
      />
      <DataTable<IPayments> columns={columns} data={paymentsData} />
    </div>
  );
};

export default Payments;
