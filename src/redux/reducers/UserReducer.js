import { EDIT_USER, GET_USER_LIST } from "../actions/types/UserTypes";

const initialState = {
  userList: [],
  userSearch: [],
  editUser: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      const { userList } = action;
      return { ...state, userList: userList };
    }
    case "GET_USER_SEARCH": {
      const { payload } = action;
      return { ...state, userSearch: payload };
    }
    case EDIT_USER: {
      return { ...state, editUser: action.payload };
    }
    default:
      return state;
  }
};
