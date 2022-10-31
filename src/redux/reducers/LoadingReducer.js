import { DISPLAY_LOADING, HIDE_LOADING } from "../actions/types/LoadingTypes";

const initialState = {
  isLoading: false,
  messageLoad: "IDLE",
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING: {
      console.log("Len day");
      return { ...state, isLoading: true };
    }
    case HIDE_LOADING: {
      console.log("ok");
      return { ...state, isLoading: false };
    }
    case "MESSAGE_LOAD_IDLE": {
      return { ...state, messageLoad: "IDLE" };
    }
    case "MESSAGE_LOAD_SUCCESS": {
      return { ...state, messageLoad: "SUCCESS" };
    }
    case "MESSAGE_LOAD_FAILED": {
      return { ...state, messageLoad: "FAILED" };
    }
    default:
      return state;
  }
};
