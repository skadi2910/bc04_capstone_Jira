import React, { useEffect } from "react";
import { Form, Input, Select, Row, Col } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "../../../util/settings/config";

export default function FormProjectCreate({ form }) {
  return (
    <Form layout="vertical" form={form} size="large">
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label={<h4 className="font-bold text-xl">Name</h4>}
            name="projectName"
            rules={[
              {
                required: true,
                message: "please enter Project name",
              },
            ]}
          >
            <Input
              row={6}
              placeholder="Tên dự án"
              // value={value}
              // onChange={onChange}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label={<h4 className="font-bold text-xl">Category</h4>}
            name="categoryId"
          >
            <Select
              defaultValue="Chọn Dự Án"
              style={{
                width: 240,
              }}
            >
              <Select.Option value="1">Dự Án Web</Select.Option>
              <Select.Option value="2">Dự Án Phần Mềm</Select.Option>
              <Select.Option value="3">Dự Án Mobile</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={18}>
          <Form.Item
            label={<h4 className="font-bold text-xl">Description</h4>}
            name="description"
          >
            <ReactQuill
              modules={{ toolbar: toolbarOptions }}
              className="min-h-52 overflow-auto"
              theme="snow"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
