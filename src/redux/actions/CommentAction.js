import { notification } from "antd";
import CommentService from "../../services/CommentService";
import {
  DELETE_COMMENT,
  GET_ALL_COMMENTS,
  INSERT_COMMENT,
  UPDATE_COMMENT,
} from "./types/CommentType";

export const getAllCommentAction = (taskId) => {
  return async (dispatch) => {
    try {
      const { data } = await CommentService.getAll(taskId);
      dispatch({
        type: GET_ALL_COMMENTS,
        payload: data.content,
      });
    } catch (error) {
      // console.log("error: ", error);
    }
  };
};
export const insertCommentAction = (detail) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await CommentService.insertComment(detail);

      const { userListByProject } = getState().ProjectListReducer;
      const userInfo = userListByProject.find(
        (user) => user.userId === data.content.userId
      );
      const _data = {
        id: data.content.id,
        contentComment: data.content.contentComment,
        user: userInfo,
      };
      const args = {
        message: `${data.message}`,
        description: "Add comment success",
        duration: 2,
        placement: "bottomRight",
      };

      dispatch({ type: INSERT_COMMENT, payload: _data });
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: `${error.response.data.message}`,
        description: "Add comment failed",
        duration: 2,
        placement: "bottomRight",
      };
      notification.error(argsError);
    }
  };
};
export const deleteCommentAction = (idComment) => {
  return async (dispatch) => {
    try {
      const { data } = await CommentService.deleteComment(idComment);
      const args = {
        message: "Delete comment success",
        description: `${data.message}`,
        duration: 2,
        placement: "bottomRight",
      };

      notification.success(args);
      dispatch({ type: DELETE_COMMENT, payload: idComment });
    } catch (error) {
      const argsError = {
        message: `${error.response.data.message}`,
        description: "Delete comment failed",
        duration: 2,
        placement: "bottomRight",
      };
      notification.error(argsError);
    }
  };
};
export const updateCommentAction = (idComment, detail) => {
  return async (dispatch) => {
    try {
      const { data } = await CommentService.updateComment(idComment, detail);
      const args = {
        message: `${data.message}`,
        description: "Update comment success",
        duration: 2,
        placement: "bottomRight",
      };

      notification.success(args);
      dispatch({ type: UPDATE_COMMENT, payload: data.content });
    } catch (error) {
      const argsError = {
        message: `${error.response.data.message}`,
        description: "Update comment failed",
        duration: 2,
        placement: "bottomRight",
      };
      notification.error(argsError);
    }
  };
};
