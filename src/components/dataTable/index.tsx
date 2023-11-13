"use client";
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
}

const DataTable = <T extends {}>({ data, columns }: DataTableProps<T>) => (
  <Table
    className="custom-table"
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);

export default DataTable;
