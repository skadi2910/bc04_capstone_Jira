import React from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
    return (

        <div className="bg-grey-lighter min-h-screen flex flex-col text">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-bold">Đăng ký</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Tên"
                    />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="passWord"
                        placeholder="Mật khẩu"
                    />
                    <input
                        type="number"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="phoneNumber"
                        placeholder="Số điện thoại"
                    />
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded text-white bg-blue-400 duration-200 hover:bg-blue-600 focus:outline-none my-1"
                    >
                        Tạo tài khoản
                    </button>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        Với việc đăng ký, bạn đồng ý với
                        <a
                            className="no-underline border-b border-grey-dark text-grey-dark"
                            href="#"
                        >
                            {" "}
                            Điều khoản dịch vụ
                        </a>{" "}
                        và
                        <a
                            className="no-underline border-b border-grey-dark text-grey-dark"
                            href="#"
                        >
                            {" "}
                            Chính sách bảo mật
                        </a>
                    </div>
                </div>
                <div className="text-grey-dark mt-6">
                    Bạn đã có tài khoản?
                    <NavLink
                        className="no-underline border-b border-blue text-blue"
                        // href="../login/"
                        to="/login"
                    >
                        {" "}  Đăng nhập.
                    </NavLink>

                </div>
            </div>
        </div>

    );
}
