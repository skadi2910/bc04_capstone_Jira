import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { history } from "../../App";
import HeaderCyberbugs from "../../components/Cyberbugs/Header/HeaderCyberbugs";
import MenuCyberbugs from "../../components/Cyberbugs/MenuCyberbugs";
import ModalCyberbugs from "../../components/HigherOrderComponents/ModalCyberbugs";
import SidebarCyberbugs from "../../components/Cyberbugs/SidebarCyberbugs";
import DrawerHOC from "../../components/HigherOrderComponents/HOCDrawer";
import { TOKEN } from "../../util/settings/config";
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
  getItem("Create Task", "1", <PieChartOutlined />),
  getItem("Search", "2", <DesktopOutlined />),
];
export default function CyberBugsTemplate(props) {
  const navigate = useNavigate();
  // ! xử lý resize window
  const [{ width, height }, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.onresize = () => {
      //! resize
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.scrollTo(0, 0); // ! logic: khi vừa vào trang phải cho scroll to top

    // !start logic: nếu chưa đăng nhập ( localStorage chưa có accessToken ) thì đẩy về trang đăng nhập
    if (!localStorage.getItem(TOKEN)) {
      navigate("/login");
    }
    // !end logic: nếu chưa đăng nhập ( localStorage chưa có accessToken ) thì đẩy về trang đăng nhập
  });
  const [collapsed, setCollapsed] = useState(false);
  const { Component } = props;
  return (
    <div className="jira overflow-x-hidden">
      <SidebarCyberbugs />

      {/* <MenuCyberbugs /> */}
      <Layout>
        <HeaderCyberbugs />
        <ModalCyberbugs />
        <DrawerHOC />
        <Component />
      </Layout>
    </div>
  );
}
