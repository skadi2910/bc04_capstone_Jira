import { ProjectService } from "../../services/ProjectService";
import {
  PROJECT_FETCH_FUFILLED,
  PROJECT_FETCH_PENDING,
  PROJECT_FETCH_REJECTED,
} from "./constants/ProjectListContstant";

//normal thunk
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
