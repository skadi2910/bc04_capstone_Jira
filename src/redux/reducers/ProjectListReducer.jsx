import {
  PROJECT_FETCH_FUFILLED,
  PROJECT_FETCH_PENDING,
  PROJECT_FETCH_REJECTED,
} from "../actions/constants/ProjectListContstant";

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
    default:
      return state;
  }
};
