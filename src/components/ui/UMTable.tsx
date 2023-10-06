"use client";

import { Button, Table } from "antd";

type UMTableprops = {
  columns?: any;
  loading?: boolean;
  dataSource?: any;
  pageSize?: number;
  totalPages?: number;
  showPagination?: boolean;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pagesize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
};

const UMTable = ({
  columns,
  loading = false,
  dataSource,
  pageSize,
  showSizeChanger = true,
  totalPages,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMTableprops) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={false}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
