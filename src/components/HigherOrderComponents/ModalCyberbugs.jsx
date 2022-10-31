import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUser from "../../pages/Cyberbugs/UserManagement/EditUser/EditUser";
import { closeModalAction } from "../../redux/actions/ModalAction";
import { EDIT_TASK } from "../../redux/actions/types/TaskTypes";
import { EDIT_USER } from "../../redux/actions/types/UserTypes";
import FormTaskEdit from "../Forms/Tasks/FormTaskEdit";
export default function ModalCyberbugs() {
  const { modalState, formType } = useSelector((state) => state.ModalReducer);

  const { editUser } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const renderContent = () => {
    if (formType === EDIT_USER) {
      return <EditUser user={editUser} />;
    }
    if (formType === EDIT_TASK) {
      return <FormTaskEdit />;
    }
  };
  return (
    <>
      <Modal
        destroyOnClose
        centered
        open={modalState}
        // onOk={() => {
        //     dispatch(closeModalAction());
        // }}
        onCancel={() => {
          dispatch(closeModalAction());
        }}
        drag
        width={"1000px"}
        height={"90%"}
        footer={null}
        closable={false}
      >
        {renderContent()}
      </Modal>
    </>
  );
}
