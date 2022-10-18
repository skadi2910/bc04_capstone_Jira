import { message } from "antd";
import { projectService } from "../../services/ProjectService";
import { setLoadingOffAction, setLoadingOnAction } from "./LoadingAction";
import { EDIT_PROJECT_DETAIL, GET_CREATOR_AVATAR, GET_PROJECT_DETAIL } from "./types/ProjectTypes";
const getProjectDetailCreator = (projectDetail) => {
    return ({
        type: GET_PROJECT_DETAIL,
        projectDetail
    })
}
export const editProjectDetailCreator = (arrayEdited) => {
    return ({
        type: EDIT_PROJECT_DETAIL,
        arrayEdited
    })
}
export const getCreatorAvatarCreator = (creator) => {
    return ({
        type: GET_CREATOR_AVATAR,
        creator
    })
}


export const getProjectDetailAction = (projectID) => {
    return async (dispatch) => {
        dispatch(setLoadingOnAction());
        try {
            const { data, status } = await projectService.getProjectDetail(projectID);
            if (status == 200) {
                message.success("Bạn vui lòng chờ xíu", 1);
                dispatch(getProjectDetailCreator(data.content));
                //! gọi thêm 1 API lấy avatar của creattor
                const creatorID = data.content.creator.id;
                dispatch(getCreatorAvatarAction(creatorID));
                setTimeout(() => {
                    message.success("Thành công");
                    dispatch(setLoadingOffAction());
                }, 1000);
            }
        } catch (error) {
            if (error.response.data.message) message.error(error.response.data.message);
            message.error("Đã bị lỗi");
            dispatch(setLoadingOffAction());
            console.log("error: ", error);
        }
    };
};
export const updateStatusTaskInProjectAction = (taskUpdated) => {
    return async (dispatch) => {
        try {
            const { data, status } = await projectService.updateTaskStatus(taskUpdated);
        } catch (error) {
            message.error(error.response.data.message);
            console.log("error: ", error);
        }
    };
};
export const getCreatorAvatarAction = (creatorID) => {
    return async (dispatch) => {
        try {
            const { data, status } = await projectService.getUserInformation(creatorID);
            // console.log('data: ', data);
            dispatch(getCreatorAvatarCreator(data.content[0]));
        } catch (error) {
            // message.error(error.response.data.message);
            console.log("error: ", error);
        }
    };
};
