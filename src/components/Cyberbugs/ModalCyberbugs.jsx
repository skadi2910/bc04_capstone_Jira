import { Button, Modal } from 'antd';
import React, { useState } from 'react';
export default function ModalCyberbugs() {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/*
            //! nút mở modal nếu có dùng
            <Button type="primary" onClick={() => setOpen(!open)}>
                Open Modal of 1000px width
            </Button> */}
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    )
}
