import { message } from "antd";
import { projectService } from "../../services/ProjectService";
import { setLoadingOffAction, setLoadingOnAction } from "./LoadingAction";
import { GET_PROJECT_DETAIL } from "./types/ProjectTypes";
const getProjectDetailCreator = (projectDetail) => {
    return ({
        type: GET_PROJECT_DETAIL,
        projectDetail
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