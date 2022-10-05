import { message } from "antd";
import { userService } from "../../services/UserService";
import { setLoadingOffAction, setLoadingOnAction } from "./LoadingAction";
import { closeModalAction } from "./ModalAction";
import { GET_USER_LIST } from "./types/UserTypes";
export const getUserListCreator = (userName) => ({
    type: GET_USER_LIST,
    userList: userName
})
/**
 //! hàm getUserListAction là action thunk dùng để lấy tất cả user hoặc tìm kiếm user
 * @param {*} userName 
 * @param {*} isSearching : optional
 * @returns 
 */
export const getUserListAction = (userName, isSearching = false) => {
    return async (dispatch) => {
        if (!isSearching) {
            dispatch(setLoadingOnAction());
        }
        try {
            const { data, status } = await userService.getUserList(userName);
            if (status == 200) {
                if (isSearching) {
                    await dispatch(getUserListCreator(data.content));

                    return dispatch(setLoadingOffAction());

                }
                message.success("Bạn vui lòng chờ xíu", 1);
                dispatch(getUserListCreator(data.content));
                setTimeout(() => {
                    message.success("Thành công");
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
export const deleteUserAction = (userID) => {
    console.log('userID: ', userID);
    return async (dispatch) => {
        dispatch(setLoadingOnAction());
        try {
            const { data, status } = await userService.deleteUser(userID);
            if (status == 200) {
                // message.success("Xóa thành công User ID: " + userID, .5);
                dispatch(getUserListAction(""));

            }
        } catch (error) {
            message.error(error.response.data.message);
            dispatch(setLoadingOffAction());
            console.log("error: ", error);
        }
    };
};
export const editUserAction = (userEdited) => {
    return async (dispatch) => {
        dispatch(setLoadingOnAction());
        try {
            const { data, status } = await userService.editUser(userEdited);
            if (status == 200) {
                await dispatch(getUserListAction(""));
                await dispatch(closeModalAction());
            }
        } catch (error) {
            message.error(error.response.data.message);
            dispatch(setLoadingOffAction());
            console.log("error: ", error);
        }
    };
};
