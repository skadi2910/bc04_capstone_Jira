import {
  GET_TASK_DETAIL,
  GET_TASK_PRIORITY,
  GET_TASK_STATUS,
  GET_TASK_TYPE,
} from "../actions/types/TaskTypes";

const initialState = {
  taskType: [],
  taskStatus: [],
  taskPriority: [],
  taskDetail: {},
};

export const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TASK_TYPE:
      return { ...state, taskType: payload };
    case GET_TASK_STATUS:
      return { ...state, taskStatus: payload };
    case GET_TASK_PRIORITY:
      return { ...state, taskPriority: payload };
    case GET_TASK_DETAIL:
      return { ...state, taskDetail: payload };
    default:
      return state;
  }
};
