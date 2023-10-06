"use client";

import { Table } from "antd";

const UMTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  const tabledata = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
  ];

  const onPageSizeChange = (page: number, pagesize: number) => {
    console.log(page, pagesize);
  };
  return (
    <Table
      columns={columns}
      dataSource={tabledata}
      loading={false}
      pagination={{
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPageSizeChange,
      }}
    />
  );
};

export default UMTable;
