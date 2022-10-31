import {
  PROJECT_FETCH_FUFILLED,
  PROJECT_FETCH_PENDING,
  PROJECT_FETCH_REJECTED,
} from "../actions/types/ProjectListTypes";
import _ from "lodash";
const initialState = {
  projectList: [
    {
      id: "1",
      projectName: "abc",
      categoryName: "abc",
      creator: { id: 1, name: "Alice" },
      members: [],
    },
  ],
  userListByProject: [],
  editProject: {
    id: "",
    projectName: "",
    categoryName: "",
    creator: { id: null, name: "" },
    description: "",
  },
  isLoading: false,
  error: "" || null,
};
export const ProjectListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_FETCH_PENDING: {
      return { ...state, isLoading: true };
    }
    case PROJECT_FETCH_FUFILLED: {
      return {
        ...state,
        projectList: action.payload,
        isLoading: false,
      };
    }
    case PROJECT_FETCH_REJECTED: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case "ASSIGN_USER_PROJECT": {
      const _projectList = [...state.projectList];
      const { projectId, userInfo } = action.payload;
      const projectIndex = _.findIndex(_projectList, function (o) {
        return o.id.toString() === projectId.toString();
      });
      _projectList[projectIndex].members.push(userInfo);
      return {
        ...state,
        projectList: _projectList,
      };
    }
    case "REMOVE_USER_PROJECT": {
      const { projectId, userId } = action.payload;
      const _projectList = [...state.projectList];
      const projectIndex = _.findIndex(_projectList, function (o) {
        return o.id.toString() === projectId.toString();
      });
      const userIndex = _.findIndex(
        _projectList[projectIndex].members,
        function (o) {
          return o.userId.toString() === userId.toString();
        }
      );
      _projectList[projectIndex].members.splice(userIndex, 1);
      return {
        ...state,
        projectList: _projectList,
        userListByProject: state.userListByProject.filter(
          (item, index) => item.userId !== userId
        ),
      };
    }
    case "SET_USERLIST_BY_PROJECT": {
      return { ...state, userListByProject: action.payload };
    }
    case "EDIT_PROJECT": {
      return { ...state, editProject: action.payload };
    }
    case "PROJECT_DELETE": {
      const { payload: projectId } = action;
      const projectIndex = _.findIndex(state.projectList, function (o) {
        return o.id.toString() === projectId.toString();
      });
      return {
        ...state,
        projectList: state.projectList.filter(
          (item, index) => index !== projectIndex
        ),
      };
    }
    default:
      return state;
  }
};
