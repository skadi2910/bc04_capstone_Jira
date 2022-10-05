import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAction } from '../../redux/actions/ModalAction';
export default function ModalCyberbugs() {
    const { modalState, defaultComponent } = useSelector(state => state.ModalReducer);
    const dispatch = useDispatch();
    return (
        <>
            {/*
            //! nút mở modal nếu có dùng
            <Button type="primary" onClick={() => setOpen(!open)}>
                Open Modal of 1000px width
            </Button> */}
            <Modal
                centered
                open={modalState}
                // onOk={() => {
                //     dispatch(closeModalAction());
                // }}
                onCancel={() => {
                    dispatch(closeModalAction());
                }}

                width={1000}
                footer={null}
            >
                {defaultComponent}
            </Modal>
        </>
    )
}
