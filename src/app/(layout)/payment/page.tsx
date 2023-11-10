"use client";
import DataTable from "@/components/dataTable";
import type { ColumnsType } from "antd/es/table";
import IPayments from "@/types/IPayments";
import DataHeader from "@/components/tableHeader";

const Payments = () => {
  const columns: ColumnsType<IPayments> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Payment Schedule",
      dataIndex: "paymentSchedule",
      key: "paymentSchedule",
    },
    {
      title: "Bill Number",
      dataIndex: "billNumber",
      key: "billNumber",
    },
    {
      title: "Amount Paid",
      dataIndex: "amountPaid",
      key: "amountPaid",
    },
    {
      title: "Balance amount",
      dataIndex: "balanceAmount",
      key: "balanceAmount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data: IPayments[] = [
    {
      key: "1",
      name: "first",
      paymentSchedule: "wensday",
      billNumber: 24234,
      amountPaid: "INR 35000",
      balanceAmount: "INR 35000",
      date: "08-Dec, 2021",
    },
    {
      key: "2",
      name: "first",
      paymentSchedule: "wensday",
      billNumber: 24234,
      amountPaid: "INR 35000",
      balanceAmount: "INR 35000",
      date: "08-Dec, 2021",
    },
    {
      key: "3",
      name: "first",
      paymentSchedule: "wensday",
      billNumber: 24234,
      amountPaid: "INR 35000",
      balanceAmount: "INR 35000",
      date: "08-Dec, 2021",
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
      <DataTable<IPayments> columns={columns} data={data} />
    </div>
  );
};

export default Payments;
