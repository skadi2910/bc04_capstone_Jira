import { Form, Select, Space } from "antd";
import React from "react";
import Bookmark from "../../../../assets/icons/Bookmark";
import ExclamationCircle from "../../../../assets/icons/ExclamationCircle";

const { Option } = Select;
export default function TaskTypeSelector({
  label,
  name,
  data,
  bordered,
  showArrow,
}) {
  const TaskTypeOptions = () =>
    data?.map(({ id, taskType }, index) => {
      return (
        <Option key={id + index} value={id}>
          <Space>
            {id === 1 ? (
              <span className="text-red-500">
                <ExclamationCircle />
              </span>
            ) : (
              <span className="text-green-400">
                <Bookmark />
              </span>
            )}
            <span className="capitalize text-md font-semibold">{taskType}</span>
          </Space>
        </Option>
      );
    });
  return (
    <>
      <Form.Item label={label} name={name}>
        <Select
          className=""
          bordered={bordered}
          showArrow={showArrow}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {TaskTypeOptions()}
        </Select>
      </Form.Item>
    </>
  );
}
