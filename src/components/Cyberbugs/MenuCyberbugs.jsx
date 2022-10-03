import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/download.jfif";
export default function MenuCyberbugs() {
    return (
        <>
            <div className="menu">
                <div className="account">
                    <div className="avatar">
                        {/* <img src={require("../../assets/img/download.jfif")} alt="ok" /> */}
                        <img src={logo} alt="ok" />
                    </div>
                    <div className="account-info">
                        <p>CyberLearn.vn</p>
                        <p>Report bugs</p>
                    </div>
                </div>
                <div className="control">
                    {/* 
                    //! chưa hiểu tại sao phải có trang này
                    <div>
                        <i className=" mr-1 fa fa-credit-card" />
                        <NavLink
                            className="text-dark"
                            activeClassName="active font-weight-bold"
                            to="/projectdetail/:id"
                        >
                            Cyber Board
                        </NavLink>
                    </div> */}
                    <div>
                        <i className=" mr-1 fa fa-credit-card" />
                        <NavLink
                            className="text-dark"
                            activeClassName="active font-weight-bold"
                            to="/"
                        >
                            Project management
                        </NavLink>
                    </div>
                    <div>
                        <i className=" mr-1 fa fa-cog" />
                        <NavLink
                            className="text-dark"
                            activeClassName="active font-weight-bold"
                            to="/createproject"
                        >
                            Create Project
                        </NavLink>
                    </div>
                    <div>
                        <i class="fa fa-user"></i>
                        <NavLink
                            className="text-dark"
                            activeClassName="active font-weight-bold"
                            to="/usermanagement"
                        >
                            User Management
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
