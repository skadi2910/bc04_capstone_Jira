import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import MenuCyberbugs from '../../components/Cyberbugs/MenuCyberbugs';
import ModalCyberbugs from '../../components/Cyberbugs/ModalCyberbugs';
import SidebarCyberbugs from '../../components/Cyberbugs/SidebarCyberbugs';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Create Task', '1', <PieChartOutlined />),
    getItem('Search', '2', <DesktopOutlined />),
];


export default function CyberBugsTemplate(props) {
    // ! logic: khi vừa vào trang phải cho scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const [collapsed, setCollapsed] = useState(false);
    const { Component } = props;
    return (
        <div className="jira">
            <SidebarCyberbugs />
            <MenuCyberbugs />
            <Component />
            <ModalCyberbugs />
        </div>
    )


}
