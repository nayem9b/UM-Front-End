"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const departments = data?.departments;
  const meta = data?.meta;
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      // key: "age",
      // sorter: true,
      sorter: (a: any, b: any) => b.age - a.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div>
            <Button type="primary" onClick={() => console.log(data)}>
              <EyeOutlined />
            </Button>
            <Button
              style={{
                margin: "0px 5px",
              }}
              type="primary"
              onClick={() => console.log(data)}
            >
              <EditOutlined />
            </Button>
            <Button type="primary" onClick={() => console.log(data)} danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");

    console.log(order, field);
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />

      <ActionBar title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search.."
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
          </Link>

          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              type="primary"
              onClick={resetFilters}
              style={{
                margin: "opx 5px",
              }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        columns={columns}
        loading={isLoading}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total as number}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default ManageDepartmentPage;
