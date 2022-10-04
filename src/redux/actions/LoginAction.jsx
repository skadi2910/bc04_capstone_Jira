import { loginService } from "../../services/LoginService";
import { setLoadingOffAction, setLoadingOnAction } from "./LoadingAction";

export const loginAction = (loginInfor) => {
    return async (dispatch) => {
        dispatch(setLoadingOnAction());
        try {
            const { data, status } = await loginService.login(loginInfor);
            console.log('data: ', data);
            console.log('status: ', status);
            if (status == 200) {
                // dispatch({
                //     type: SET_HE_THONG_RAP_CHIEU,
                //     heThongRapChieu: data.content
                // })
                
                dispatch(setLoadingOffAction());
            }
        } catch (error) {
            dispatch(setLoadingOffAction());
            console.log('error: ', error);
        }
    }
}