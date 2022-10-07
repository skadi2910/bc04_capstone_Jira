import React, { Fragment, useState } from "react";
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
import { useMediaQuery } from 'react-responsive'
import { useSelector } from "react-redux";
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;
export default function HeaderProjectDetail({ members, projectName }) {
    const { creator } = useSelector(state => state.ProjectReducer);
    const [result, setResult] = useState([]);
    // console.log('creator: ', creator);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const toggleClass = (event) => {
        // setActive
        const { id } = event.target;
        setActive(id);
    };
    // console.log('members: ', members);

    const renderMemberInProject = () => {
        //! nếu mảng member lớn hơn 2 thì đối với màn hình laptop nhỏ và ipad sẽ lấy 2 và dấu ... màn lớn sẽ lấy 12 member
        // if (members.length > 2) {
        //     const membersForSmallLaptop = members.slice(0, 2);
        //     const membersForBigLaptop = members.slice(0, 12);
        // }

        const renderForTablet = () => {
            return (
                <>
                    {
                        members?.slice(0, 2).map((member, index) => {
                            return (
                                <Fragment>
                                    <img
                                        className="w-100 h-8 w-8 rounded-full  mx-1"
                                        src={member.avatar}
                                        alt=""
                                    />
                                </Fragment>
                            )
                        })
                    }
                    <p className="cursor-default" >...</p>
                </>
            )
        }
        return (
            <>
                {isDesktopOrLaptop && members?.slice(0, 12).map((member, index) => {
                    return (
                        <Fragment>
                            <img
                                className="w-100 h-8 w-8 rounded-full   mx-1"
                                src={member.avatar}
                                alt=""
                            />
                        </Fragment>
                    )
                })}

                {isTabletOrMobile && renderForTablet()}
                {/* {isDesktopOrLaptop && renderForTablet()} */}
            </>



        )
    }
    const handleSearch = (value) => {
        value = value.trim();
        let res = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            // ! ==> chạy vòng lặp
            members.forEach((member, index) => {
                if (member.name.toLowerCase().includes(value.toLowerCase())) {
                    res.push(member.name);
                }
            })
        }

        setResult(res);
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
                        Jira
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
                                const { value } = event.target;
                                console.log('value: ', value);
                                message.success("Chi tiết người dùng đang được phát triển");
                                // handleSearch();
                            }}
                            className="flex border-2 rounded mx-2"
                        >
                            {/* <input
                                type="text"
                                className="px-4 py-2 w-80 searchInput "
                                placeholder="Search..."
                            /> */}
                            <AutoComplete
                                style={{
                                    width: 200,
                                }}
                                onSearch={handleSearch}
                                placeholder="Tìm thành viên trong dự án"
                                onSelect={(event) => {
                                    // console.log(event);
                                    // console.log("");
                                    message.success("Chức năng tìm kiếm người dùng đang được phát triển, bạn có muốn quản lý người dùng ?")
                                }}
                            >
                                {result.map((email) => (
                                    <Option key={email} value={email}>
                                        {email}
                                    </Option>
                                ))}
                            </AutoComplete>





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
                    >
                        {renderMemberInProject()}


                    </div>
                </div>
                <div>
                    <button
                        onClick={() => {
                            console.log(message.success("Chức năng đang được phát triển"));
                        }}
                    >
                        <ShareAltOutlined className="text-3xl cursor-pointer mx-2" />
                    </button>
                </div>
                <div className="flex items-center">
                    <span

                        className=" border-blue-300 border-4 rounded-full"
                    >
                        <img
                            className="w-100 h-8 w-8 rounded-full "
                            src={`${creator?.avatar}`}
                            alt=""
                        />
                    </span>
                </div>
            </div>
        </div>
        //</div>
        // </div>
    );
}
