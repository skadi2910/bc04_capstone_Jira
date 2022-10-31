import { Avatar, Form, Select, Space } from "antd";
import React from "react";
import { useState } from "react";

export default function MemberSelector({
  name,
  data,
  onSelect,
  onDeselect,
  label,
  bordered,
}) {
  const AssigneeOptions = () =>
    data?.map(({ avatar, userId, name }, index) => {
      return (
        <Select.Option key={userId + index} value={userId}>
          <Space className="cursor-pointer  scale-90 align-middle">
            <Avatar src={avatar} alt="name" />
            <span className="text-md font-semibold">{name}</span>
          </Space>
        </Select.Option>
      );
    });
  return (
    <Form.Item label={label} name={name}>
      <Select
        placeholder={
          <span className="text-blue-700 font-semibold ">+ Add more</span>
        }
        onSelect={onSelect}
        onDeselect={onDeselect}
        mode="multiple"
        bordered={bordered}
        placement={"bottomRight"}
      >
        {AssigneeOptions()}
      </Select>
    </Form.Item>
  );
}
