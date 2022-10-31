import { Form, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function StatusSelector({
  name,
  data,
  onSelect,
  className,
  bordered,
  showArrow,
  label,
}) {
  const StatusOptions = () =>
    data?.map(({ statusId, statusName }, index) => {
      let bgColor = "";
      switch (statusId) {
        case "1": {
          bgColor = "bg-gray-500";
          break;
        }
        case "2": {
          bgColor = "bg-yellow-500";
          break;
        }
        case "3": {
          bgColor = "bg-blue-500";
          break;
        }
        default: {
          bgColor = "bg-green-500";
          break;
        }
      }
      return (
        <Option key={statusId} value={statusId}>
          <div>
            <span
              className={`text-white mb-2 ${bgColor} rounded-md py-1 px-2 font-semibold hover:text-black duration-500 `}
            >
              {statusName}
            </span>
          </div>
        </Option>
      );
    });
  return (
    <>
      <Form.Item name={name} label={label}>
        <Select
          className="bg-slate-200 rounded-md"
          showArrow={showArrow}
          bordered={bordered}
          onSelect={onSelect}
        >
          {StatusOptions()}
        </Select>
      </Form.Item>
    </>
  );
}
