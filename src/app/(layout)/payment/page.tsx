"use client";
import DataTable from "@/components/dataTable";
import type { ColumnsType } from "antd/es/table";
import IPayments from "@/types/IPayments";
import DataHeader from "@/components/tableHeader";
import db from "../../../../db.json";
import { useState } from "react";

async function getPaymentsData() {
  const res = await fetch(`http://localhost:3000/api/payment`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Payments = async () => {
  const paymentsData = await getPaymentsData();

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
