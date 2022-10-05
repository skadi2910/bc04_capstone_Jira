import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    ProjectOutlined,
    SmileOutlined,
    SwitcherOutlined,
    TeamOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TOKEN, USER } from "../../../util/settings/config";

export default function HeaderCyberbugs() {
    const [current, setCurrent] = useState("1");
    const { selectedKey } = useSelector((state) => state.SelectedKeyReducer);
    const navigate = useNavigate();
    useEffect(() => {
        setCurrent(selectedKey);
    });
    const handleLogout = () => {
        //! click vào ==> xóa dữ liệu local storage và reload toàn bộ website ==> dùng window.reload để xóa sạch dữ liệu
        localStorage.removeItem(TOKEN);
        localStorage.removeItem(USER);
        window.location.href = "/login";
    };
    const items = [
        {
            label: (
                <div className="flex items-center">
                    <img
                        className="h-10"
                        src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
                        alt="logo"
                    />
                </div>
            ),
            key: "logo",
        },
        {
            label: "Quản lý dự án",
            key: "1",
            icon: <ProjectOutlined />,
            onClick: () => {
                navigate("/projectmanagement")
            },
        },
        {
            label: "Tạo Task",
            key: "2",
            icon: <SmileOutlined />,
            onClick: () => {
                // navigate("/create")
                alert("chua biet");
            },
        },
        {
            label: "Tạo dự án",
            key: "3",
            icon: <SwitcherOutlined />,
            onClick: () => {
                navigate("/createproject")
            },
        },
        {
            label: "Quản lý người dùng",
            key: "4",
            icon: <TeamOutlined />,
            onClick: () => {
                navigate("/usermanagement")
            },
        },
        {
            label: "Search",
            key: "5",
            icon: <SearchOutlined />,
            onClick: () => {
                // navigate("/projectmanagement")
                alert("tính năng đang phát triển")
            },
        },
        {
            label: "Đăng xuất",
            key: "6",
            icon: <AppstoreOutlined />,
            onClick: () => {
                // confirm("Bạn có muốn đăng xuất không", handleLogout)
                if (window.confirm("Bạn có muốn đăng xuất không?")) {
                    // window.open("exit.html", "Thanks for Visiting!");
                    handleLogout();
                }
            },
        },
    ];
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <div className="hidden md:block lg:hidden w-full">
            <div className="container">
                <Menu
                    className="py-4"
                    theme={"dark"}
                    onClick={onClick}
                    selectedKeys={[`${current}`]}
                    mode="horizontal"
                    items={items}
                />
                ;
            </div>
        </div>
    );
}
