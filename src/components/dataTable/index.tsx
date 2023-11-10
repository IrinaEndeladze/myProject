"use client";
import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import ICourseData from "@/types/ICourseData";
import IStudentsData from "@/types/IStudentsData";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
}

const DataTable = <T extends {}>({ data, columns }: DataTableProps<T>) => (
  <Table className="custom-table" columns={columns} dataSource={data} />
);

export default DataTable;
