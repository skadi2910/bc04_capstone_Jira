import { Button, Drawer, Form, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../../redux/actions/DrawerAction";
import { updateProjectAction } from "../../redux/actions/ProjectListAction";
import { createTaskAction } from "../../redux/actions/TaskAction";
import FormProjectEdit from "../Forms/Projects/FormProjectEdit";
import FormTaskCreate from "../Forms/Tasks/FormTaskCreate";
const DrawerHOC = () => {
  const { visible, formType, title, placement, width, height } = useSelector(
    (state) => state.DrawerReducer
  );
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleEditFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        dispatch(updateProjectAction(values));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleTaskCreate = () => {
    form
      .validateFields()
      .then((values) => {
        // dispatch(updateProjectAction(values));
        dispatch(createTaskAction(values));
        form.resetFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClose = () => {
    dispatch(closeDrawer());
    form.resetFields();
  };
  const renderContent = () => {
    if (formType === "ProjectEdit") {
      return <FormProjectEdit form={form} />;
    } else if (formType === "TaskCreate") {
      return <FormTaskCreate form={form} />;
    }
  };
  const renderHandleButton = () => {
    return (
      <Space>
        <button
          className="bg-red-600 hover:bg-red-500 hover:scale-110 duration-200  px-3 py-2 rounded-md text-white"
          onClick={onClose}
        >
          Cancel
        </button>
        {formType === "ProjectEdit" ? (
          <button
            className="bg-blue-600 hover:bg-blue-500 hover:scale-110 duration-200  px-3 py-2 rounded-md text-white"
            type="submit"
            onClick={handleEditFormSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-green-600 hover:bg-green-500 hover:scale-110 duration-200 px-3 py-2 rounded-md text-white"
            type="submit"
            onClick={handleTaskCreate}
          >
            Create
          </button>
        )}
      </Space>
    );
  };
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        width={width}
        height={height}
        onClose={onClose}
        open={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={renderHandleButton()}
        destroyOnClose
      >
        {renderContent()}
      </Drawer>
    </>
  );
};
export default DrawerHOC;
