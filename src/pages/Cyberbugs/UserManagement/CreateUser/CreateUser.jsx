import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { signupAction } from "../../../../redux/actions/LoginAction";
export default function CreateUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email chưa đúng định dạng rồi nà")
            .required("Vui lòng nhập email"),
        passWord: Yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                "ít nhất 8 kí tự, có ít nhất 1 chữ và 1 số"
            )
            .required("Vui lòng nhập mật khẩu"),
        name: Yup.string()
            .matches(/^([^0-9]*)$/, "Tên không được chứa số")
            .required("Vui lòng nhập thông tin"),
        phoneNumber: Yup.string()
            .matches(
                /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                "Vui lòng nhập đúng số điện thoại"
            )
            .required("Vui lòng nhập thông tin"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            passWord: "",
            name: "",
            phoneNumber: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            dispatch(signupAction(values, false));
        },
    });
    return (
        <div className="w-full flex justify-center">
            <div className="container py-16">
                <h1 className="px-16 text-3xl font-bold">Tạo người dùng: </h1>
                <form
                    onSubmit={formik.handleSubmit}
                    className="container py-8  mx-auto flex-1 flex flex-col items-center lg:justify-center px-2"
                >
                    <div className=" px-6 py-8 rounded shadow-md text-black w-full">
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-red-500">{formik.errors.email}</p>
                        )}
                        <Input
                            onChange={formik.handleChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                        />
                        {formik.errors.name && formik.touched.name && (
                            <p className="text-red-500">{formik.errors.name}</p>
                        )}
                        <Input
                            onChange={formik.handleChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Tên"
                        />
                        {formik.errors.passWord && formik.touched.passWord && (
                            <p className="text-red-500">{formik.errors.passWord}</p>
                        )}
                        <Input.Password
                            onChange={formik.handleChange}
                            type="password"
                            className=" p-3 rounded mb-4"
                            name="passWord"
                            placeholder="Mật khẩu"
                        />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                            <p className="text-red-500">{formik.errors.phoneNumber}</p>
                        )}
                        <Input
                            onChange={formik.handleChange}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="phoneNumber"
                            placeholder="Số điện thoại"
                        />
                        {/* <button
                            type="submit"
                            className="w-full text-center py-3 rounded text-white bg-blue-400 duration-200 hover:bg-blue-600 focus:outline-none my-1"
                        >
                            Tạo tài khoản
                        </button> */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Tạo tài khoản
                            </button>
                            <button
                                onClick={() => {
                                    navigate(-1);
                                }}
                                type="button"
                                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Quay lại
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
