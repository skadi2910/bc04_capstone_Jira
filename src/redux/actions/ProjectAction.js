import { message } from "antd";
import { ProjectService } from "../../services/ProjectService";
import {
  EDIT_PROJECT_DETAIL,
  GET_CREATOR_AVATAR,
  GET_PROJECT_DETAIL,
} from "./types/ProjectTypes";
const getProjectDetailCreator = (projectDetail) => {
  return {
    type: GET_PROJECT_DETAIL,
    projectDetail,
  };
};
export const editProjectDetailCreator = (changeDetail) => {
  return {
    type: EDIT_PROJECT_DETAIL,
    payload: changeDetail,
  };
};
export const getCreatorAvatarCreator = (creator) => {
  return {
    type: GET_CREATOR_AVATAR,
    creator,
  };
};

export const getProjectDetailAction = (projectID) => {
  return async (dispatch) => {
    try {
      const { data } = await ProjectService.getProjectDetail(projectID);
      dispatch(getProjectDetailCreator(data.content));
      //! gọi thêm 1 API lấy avatar của creattor
      const creatorID = data.content.creator.id;
      dispatch(getCreatorAvatarAction(creatorID));
    } catch (error) {
      if (error.response.data.message)
        message.error(error.response.data.message);
      message.error("Đã bị lỗi");
      console.log("error: ", error);
    }
  };
};
export const updateStatusTaskInProjectAction = (taskUpdated) => {
  return async (dispatch) => {
    try {
      const { data, status } = await ProjectService.updateTaskStatus(
        taskUpdated
      );
      console.log("data: ", data);
      console.log("taskUpdated: ", taskUpdated);
    } catch (error) {
      message.error(error.response.data.message);
      console.log("error: ", error);
    }
  };
};
export const getCreatorAvatarAction = (creatorID) => {
  return async (dispatch) => {
    try {
      const { data, status } = await ProjectService.getUserInformation(
        creatorID
      );
      // console.log('data: ', data);
      dispatch(getCreatorAvatarCreator(data.content[0]));
    } catch (error) {
      // message.error(error.response.data.message);
      console.log("error: ", error);
    }
  };
};
