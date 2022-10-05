import { message } from "antd";
import { history } from "../../App";
import { loginService } from "../../services/LoginService";
import { TOKEN, USER } from "../../util/settings/config";
import { setLoadingOffAction, setLoadingOnAction } from "./LoadingAction";
export const loginAction = (loginInfor) => {
    return async (dispatch) => {
        dispatch(setLoadingOnAction());
        try {
            const { data, status } = await loginService.login(loginInfor);
            console.log("data: ", data);
            console.log("status: ", status);
            if (status == 200) {
                // ! nếu thành công thì lưu dữ liệu user vào localStorage để hiển thị thông tin trên header và lưu accessToken vào để xác thực khi gọi API
                //////////////////////////////////////////////
                localStorage.setItem(TOKEN, data.content.accessToken); // ! lưu accessToken
                const jsonData = JSON.stringify(data.content);
                localStorage.setItem(USER, jsonData); // !lưu dữ liệu user ( ban đầu là dạng object ==> convert to JSON data )
                message.success("Đăng nhập thành công", 1);
                setTimeout(() => {
                    history.push("/");
                    dispatch(setLoadingOffAction());
                }, 1000);
            }
        } catch (error) {
            message.error(error.response.data.message);
            dispatch(setLoadingOffAction());
            console.log("error: ", error);
        }
    };
};
export const signupAction = (signupInfo) => {
    return async (dispatch) => {
        dispatch(setLoadingOnAction());
        try {
            const { data, status } = await loginService.signup(signupInfo);
            if (status == 200) {
                // ! nếu đăng ký thành công thì đăng nhập luôn ==> gọi lại action đăng nhập
                const { email, passWord } = data.content;
                const loginInfo = { email, passWord };
                message.success("Đăng ký thành công, đang đăng nhập", 2);
                setTimeout(() => {
                    dispatch(loginAction(loginInfo));
                }, 2000);
            }
        } catch (error) {
            message.error(error.response.data.message);
            dispatch(setLoadingOffAction());
            console.log("error: ", error);
        }
    };
};
