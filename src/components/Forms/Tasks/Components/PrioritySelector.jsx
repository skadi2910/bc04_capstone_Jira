import { Form, Select, Space } from "antd";
import React from "react";
import ArrowDown from "../../../../assets/icons/ArrowDown";
import ArrowUp from "../../../../assets/icons/ArrowUp";
const { Option } = Select;
export default function PrioritySelector({
  name,
  data,
  onSelect,
  label,
  bordered,
  showArrow,
}) {
  const PriorityOptions = () =>
    data?.map(({ priorityId, priority }, index) => {
      let iconColor = "";
      switch (priorityId) {
        case 1:
          iconColor = "text-red-500";
          break;
        case 2:
          iconColor = "text-orange-500";
          break;
        case 3:
          iconColor = "text-green-600";
          break;
        default:
          iconColor = "text-green-400";
          break;
      }
      return (
        <Option key={priorityId + index} value={priorityId}>
          <Space>
            <span className={`${iconColor}`}>
              {priorityId <= 2 ? <ArrowUp /> : <ArrowDown />}
            </span>
            <span className="capitalize text-md font-semibold">{priority}</span>
          </Space>
        </Option>
      );
    });
  return (
    <Form.Item name={name} label={label}>
      <Select
        className="hover:bg-slate-200 duration-300 rounded-sm p-1 "
        onSelect={onSelect}
        bordered={bordered}
        showArrow={showArrow}
      >
        {PriorityOptions()}
      </Select>
    </Form.Item>
  );
}
