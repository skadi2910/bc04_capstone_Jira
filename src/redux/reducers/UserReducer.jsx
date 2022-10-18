import { GET_USER_LIST } from "../actions/types/UserTypes"

const initialState = {
    userList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST: {
            const { userList } = action;
            return { ...state, userList: userList }
        }
        default:
            return state
    }
}
