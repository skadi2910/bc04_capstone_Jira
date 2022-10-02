import React, { Fragment, useEffect } from 'react'
import { Route } from 'react-router-dom';
// import { Route } from 'react-router-dom'; //!  hoặc là từ react-router
import MenuUser from '../../components/User/MenuUser/MenuUser';
import ModalUser from '../../components/User/ModalUser/ModalUser';
import SidebarUser from '../../components/User/SidebarUser/SidebarUser';

export default function UserTemplate(props) {
    // ! logic: khi vừa vào trang phải cho scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const { Component } = props;
    return (
        <div >
            <SidebarUser />
            <MenuUser />
            <Component />
            <ModalUser />
        </div>
    )


}
