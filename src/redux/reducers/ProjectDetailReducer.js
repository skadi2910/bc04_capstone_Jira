import {
  EDIT_PROJECT_DETAIL,
  GET_CREATOR_AVATAR,
  GET_PROJECT_DETAIL,
} from "../actions/types/ProjectTypes";
import _ from "lodash";
const initialState = {
  projectDetail: {},
  creator: {},
  currentId: "",
};

export const ProjectDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_DETAIL: {
      return { ...state, projectDetail: action.projectDetail };
    }
    case EDIT_PROJECT_DETAIL: {
      const {
        sourceDroppableID,
        sourceDroppableIndex,
        destinationDropableID,
        destinationDroppableIndex,
      } = action.payload;
      // SHALLOW COPY Bị Lỗi không call API được
      // Dùng DEEP COPY để clone lại ProjectDetail
      // DEEP COPY bằng Lodash
      const originalProjectDetail = _.cloneDeep(state.projectDetail);
      const [ItemVuaKeo] = originalProjectDetail.lstTask[
        sourceDroppableID
      ].lstTaskDeTail.splice(sourceDroppableIndex, 1); //! cấu trúc destructuring array
      originalProjectDetail.lstTask[destinationDropableID].lstTaskDeTail.splice(
        destinationDroppableIndex,
        0,
        ItemVuaKeo
      );
      return { ...state, projectDetail: originalProjectDetail };
    }
    case GET_CREATOR_AVATAR: {
      const { creator } = action;
      return { ...state, creator };
    }
    case "SET_CURRENTID": {
      return { ...state, currentId: action.payload };
    }
    default:
      return state;
  }
};
