import { EDIT_PROJECT_DETAIL, GET_CREATOR_AVATAR, GET_PROJECT_DETAIL } from "../actions/types/ProjectTypes"

const initialState = {
    projectDetail: {},
    creator: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECT_DETAIL: {
            return { ...state, projectDetail: action.projectDetail }
        }
        case EDIT_PROJECT_DETAIL: {
            const { arrayEdited } = action;
            console.log('arrayEdited: ', arrayEdited);
            return { ...state, projectDetail: arrayEdited }
        }
        case GET_CREATOR_AVATAR: {
            const { creator } = action;
            return { ...state, creator }
        }
        default:
            return state
    }
}
