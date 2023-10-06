"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row, message } from "antd";
import { useDepartmentQuery } from "@/redux/api/departmentApi";

type IdProps = {
  params: string;
};

const EditDepartmentPage = ({ params }: IdProps) => {
  console.log(params);

  const id = params?.id;
  const { data, isLoading } = useDepartmentQuery(id);
  console.log(data);

  const onSubmit = async (data: any) => {
    message.loading("Updating");
    try {
      console.log(data);

      message.success("Department Updated successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />

      <ActionBar title="Update Department" />

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
