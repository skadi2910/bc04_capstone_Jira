import { message } from "antd";
import { ProjectService } from "../../services/ProjectService";
import {
  PROJECT_FETCH_FUFILLED,
  PROJECT_FETCH_PENDING,
  PROJECT_FETCH_REJECTED,
} from "./types/ProjectListTypes";
import _ from "lodash";
import { UserService } from "../../services/UserService";

export const fetchProjectListData = () => {
  return async (dispatch) => {
    dispatch({
      type: PROJECT_FETCH_PENDING,
    });
    try {
      const { data } = await ProjectService.getProjectList();
      dispatch({
        type: PROJECT_FETCH_FUFILLED,
        payload: data.content,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_FETCH_REJECTED,
        payload: err.message,
      });
    }
  };
};
export const getUserListByProject = (projectId) => {
  return async (dispatch) => {
    try {
      const { data } = await UserService.getUserFromProjectId(projectId);
      dispatch({
        type: "SET_USERLIST_BY_PROJECT",
        payload: data.content,
      });
    } catch (error) {}
  };
};
export const getEditProject = (projectId) => {
  return async (dispatch) => {
    try {
      const { data } = await ProjectService.getProjectDetail(projectId);
      dispatch({
        type: "EDIT_PROJECT",
        payload: data.content,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};

export const createProjectAction = (projectDetail) => {
  return async () => {
    try {
      const { data } = await ProjectService.createProjectAuthorize(
        projectDetail
      );
      message.success("Project Created Success", 2);
    } catch (error) {
      if (error.response) {
        let { message: errMessage } = error.response.data;

        message.error(errMessage, 2);
      }
    }
  };
};

export const updateProjectAction = (projectDetail) => {
  return async (dispatch) => {
    try {
      const { id } = projectDetail;
      const { data } = await ProjectService.updateProject(id, projectDetail);
      // dispatch({ type: "EDIT_PROJECT", payload: projectDetail });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
export const deleteProjectAction = (projectId) => {
  return async (dispatch) => {
    try {
      const { data } = await ProjectService.deleteProject(projectId);
      message.success("Project Deleted!", 0.5);
      dispatch({ type: "PROJECT_DELETE", payload: projectId });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
export const assignUserProject = (userProjectInfo) => {
  const { projectId, userId } = userProjectInfo;
  return async (dispatch, getState) => {
    try {
      const { data } = await ProjectService.assignUserProject(userProjectInfo);
      const { userSearch } = getState().UserReducer;
      const userInfo = _.find(userSearch, function (o) {
        return o.userId.toString() === userId;
      });
      message.success(`You ${data.content}`, 1);
      dispatch({
        type: "ASSIGN_USER_PROJECT",
        payload: { projectId, userInfo },
      });
    } catch (error) {
      if (error.response) {
        let { message: errMessage } = error.response.data;
        message.error(errMessage, 1);
      }
    }
  };
};
export const removeUserFromProject = (userProjectInfo) => {
  return async (dispatch, getState) => {
    try {
      const { projectId, userId } = userProjectInfo;
      const { data } = await ProjectService.removeUserFromProject(
        userProjectInfo
      );
      message.success(`You ${data.content}`, 2);
      dispatch({
        type: "REMOVE_USER_PROJECT",
        payload: { projectId: projectId, userId: userId },
      });
    } catch (error) {
      if (error.response) {
        let { message: errMessage } = error.response.data;
        message.error(errMessage, 2);
      }
    }
  };
};
