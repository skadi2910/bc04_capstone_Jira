import { Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup"
import { signupAction } from "../../../redux/actions/LoginAction";
export default function Signup() {
    const dispatch = useDispatch();
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Email chưa đúng định dạng rồi nà').required('Vui lòng nhập email'),
        passWord: Yup.string()
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "ít nhất 8 kí tự, có ít nhất 1 chữ và 1 số")
            .required("Vui lòng nhập mật khẩu"),
        name: Yup.string()
            .matches(/^([^0-9]*)$/, "Tên không được chứa số")
            .required("Vui lòng nhập thông tin"),
        phoneNumber: Yup.string()
            .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, "Vui lòng nhập đúng số điện thoại")
            .required("Vui lòng nhập thông tin"),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            passWord: '',
            name: "",
            phoneNumber: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            dispatch(signupAction(values));
        },
    });
    return (

        <div className="bg-grey-lighter min-h-screen flex flex-col text">
            <form
                onSubmit={formik.handleSubmit}
                className="container  mx-auto flex-1 flex flex-col items-center lg:justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center font-bold">Đăng ký</h1>
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
            </form>
        </div>

    );
}
