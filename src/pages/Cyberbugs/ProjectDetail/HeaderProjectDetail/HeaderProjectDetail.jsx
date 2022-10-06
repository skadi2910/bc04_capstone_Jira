import React, { useState } from "react";
import {
    BarChartOutlined,
    CaretDownOutlined,
    SearchOutlined,
    DashboardOutlined,
    ShareAltOutlined,
} from "@ant-design/icons";
import { Button } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import ButtonToggleActive from "./ButtonToggleActive";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
export default function HeaderProjectDetail() {
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const toggleClass = (event) => {
        // setActive
        const { id } = event.target;
        setActive(id);
    };
    return (
        //  <div className="w-full flex justify-center">
        // <div className="container">
        <div className="flex justify-between items-center px-8 py-2 glassMorphismBackground">
            <div className="flex gap-6 items-center">
                <div className="flex items-center">
                    {/* <div>LOGO</div> */}
                    <BarChartOutlined className="text-3xl hidden lg:block" />
                    <h1 className="text-white font-bold ml-0  lg:ml-1 text-lg mr-2 lg:mr-0 lg:text-2xl cursor-default">
                        Tên dự án
                    </h1>
                </div>
                <button
                    id="1"
                    onClick={(event) => {
                        console.log(message.success("Chức năng đang được phát triển"));
                    }}
                    className={`glassMorphismButton mx-1 hidden lg:block px-4 py-2 ${active == "1" ? "activeClass" : ""
                        }`}
                >
                    Workspaces
                </button>
                <button
                    id="2"
                    onClick={(event) => {
                        console.log(message.success("Chức năng đang được phát triển"));
                    }}
                    className={`glassMorphismButton mx-1 hidden lg:block px-4 py-2 ${active == "2" ? "activeClass" : ""
                        }`}
                >
                    Templates
                </button>
                <button
                    id="3"
                    onClick={(event) => {
                        toggleClass(event);
                        navigate("/createproject");
                    }}
                    className={`glassMorphismButton mx-1  px-4 py-2 ${active == "3" ? "activeClass" : ""
                        }`}
                >
                    Create
                </button>
            </div>
            <div className="flex gap-6 items-center ">
                <div>
                    <div className="flex items-center justify-center">
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                message.info("Tạo chức năng search");
                            }}
                            className="flex border-2 rounded mx-2"
                        >
                            <input
                                type="text"
                                className="px-4 py-2 w-80 searchInput "
                                placeholder="Search..."
                            />
                            <button
                                type="submit"
                                className=" items-center justify-center px-4 border-l hidden lg:flex custom-hover-icon"
                            >
                                <SearchOutlined />
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <div
                        className="flex items-center gap-2"
                        onClick={() => {
                            message.info("Tạo chức năng thêm người dùng vào project");
                        }}
                    >
                        <img
                            className="w-100 h-8 w-8 rounded-full cursor-pointer  mx-2"
                            src="https://previews.123rf.com/images/julos/julos1607/julos160748874/81852983-cartoon-character-of-letter-m.jpg"
                            alt=""
                        />
                        <img
                            className="w-100 h-8 w-8 rounded-full cursor-pointer  mx-2"
                            src="https://image.shutterstock.com/image-vector/cute-red-letter-h-all-260nw-2208761553.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => {
                            console.log(message.success("Chức năng đang được phát triển"));
                        }}
                    >
                        <ShareAltOutlined className="text-3xl cursor-pointer  mx-2" />
                    </button>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => {
                            console.log(message.success("Chức năng đang được phát triển"));
                        }}
                    >
                        <img
                            className="w-100 h-8 w-8 rounded-full cursor-pointer"
                            src="https://thumbs.dreamstime.com/b/single-character-t-font-orange-yellow-color-alphabet-red-wall-design-illustration-red-maroon-colour-95737449.jpg"
                            alt=""
                        />
                    </button>
                </div>
            </div>
        </div>
        //</div>
        // </div>
    );
}
