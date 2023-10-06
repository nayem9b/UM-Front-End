"use client";

import { Button, Table } from "antd";

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
      //   sorter: true,
      sorter: (a: any, b: any) => b.age - a.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button type="primary" onClick={() => console.log(data)} danger>
            {" "}
            x
          </Button>
        );
      },
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

  const onPaginationChange = (page: number, pagesize: number) => {
    console.log(page, pagesize);
  };

  const paginationConfig = {
    pageSize: 5,
    total: 10,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: true,
    onChange: onPaginationChange,
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
  };

  return (
    <Table
      columns={columns}
      dataSource={tabledata}
      loading={false}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
