import { Button, Form, Space } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FormProjectCreate from "../../../components/Forms/Projects/FormProjectCreate";
import { createProjectAction } from "../../../redux/actions/ProjectListAction";
import {
  SelectAction,
  selectedKeyAction,
} from "../../../redux/actions/SelectKeyAction";

export default function CreateProject() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const key = 3;
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        dispatch(createProjectAction(values));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleReset = () => {
    form.resetFields();
  };
  useEffect(() => {
    dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
  }, []);
  return (
    <div className="container mx-auto  border-0 mt-5 ml-10 h-full overflow-y-auto overflow-x-hidden">
      <h3 className="font-bold text-4xl text-bue-900 text-left ">
        Create Project
      </h3>
      <div className="">
        <FormProjectCreate form={form} formType />
        <Space className="pb-10">
          <Button danger onClick={handleReset} className="text-2xl">
            Reset
          </Button>
          <Button
            onClick={handleSubmit}
            type="primary"
            className="font-bold text-lg"
          >
            Create Project
          </Button>
        </Space>
      </div>
    </div>
  );
}
