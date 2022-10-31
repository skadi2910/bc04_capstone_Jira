import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BarsOutlined,
  PlusOutlined,
  SearchOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ProjectOutlined,
  SmileOutlined,
  SwitcherOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { TOKEN, USER } from "../../util/settings/config";
import { useNavigate } from "react-router-dom";
import { selectedKeyAction } from "../../redux/actions/SelectKeyAction";
import {
  openDrawerEditProjectForm,
  openDrawerTaskCreateForm,
} from "../../redux/actions/DrawerAction";
import { fetchProjectListData } from "../../redux/actions/ProjectListAction";
// import FormCreateTask from "../Form/FormCreateTask/FormCreateTask";
const { Header, Sider, Content } = Layout;

export default function SidebarCyberbugs() {
  const { selectedKey } = useSelector((state) => state.SelectedKeyReducer);
  const { currentId } = useSelector((state) => state.ProjectDetailReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    collapsed: false,
  });
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  const handleLogout = () => {
    //! click vào ==> xóa dữ liệu local storage và reload toàn bộ website ==> dùng window.reload để xóa sạch dữ liệu
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
    window.location.href = "/login";
  };
  return (
    // https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={state.collapsed}
        style={{
          height: "100%",
          maxWidth: "100%",
          width: "100%",
        }}
        className="hidden lg:block "
      >
        <div className="text-right pr-2" onClick={toggle}>
          <BarsOutlined
            style={{
              cursor: "pointer",
              color: "#fff",
              fontSize: "20px",
            }}
          />
        </div>
        <div className="logo">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="px-4 py-8 cursor-pointer"
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="logo"
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={["1"]}
          selectedKeys={[`${selectedKey}`]}
        >
          <Menu.Item
            onClick={() => {
              dispatch(selectedKeyAction(0));
              navigate(`/projectdetail/${currentId}`);
            }}
            key="0"
            icon={<ProjectOutlined style={{ fontSize: 20 }} />}
          >
            Dasboard
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              dispatch(selectedKeyAction(1));
              navigate("/projectmanagement");
            }}
            key="1"
            icon={<ProjectOutlined style={{ fontSize: 20 }} />}
          >
            Quản lý dự án
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<SmileOutlined style={{ fontSize: 20 }} />}
            onClick={() => {
              //   dispatch(selectedKeyAction(2));
              dispatch(fetchProjectListData());
              dispatch(openDrawerTaskCreateForm());
            }}
          >
            <span className="mb-2">Tạo task</span>
          </Menu.Item>

          <Menu.Item
            onClick={() => {
              navigate("/createproject");
            }}
            key="3"
            icon={<SwitcherOutlined style={{ fontSize: 20 }} />}
          >
            Tạo dự án
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              navigate("/usermanagement");
            }}
            key="4"
            icon={<TeamOutlined style={{ fontSize: 20 }} />}
          >
            Quản lý người dùng
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              // navigate("/usermanagement");
              alert("Chức năng đang được phát triển");
            }}
            key="5"
            icon={<SearchOutlined style={{ fontSize: 20 }} />}
          >
            Search
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              // confirm("Bạn có muốn đăng xuất không", handleLogout)
              if (window.confirm("Bạn có muốn đăng xuất không?")) {
                // window.open("exit.html", "Thanks for Visiting!");
                handleLogout();
              }
            }}
            key="6"
            icon={<AppstoreOutlined style={{ fontSize: 20 }} />}
          >
            Đăng xuất
          </Menu.Item>
        </Menu>
        ;
      </Sider>
    </div>
  );
}
