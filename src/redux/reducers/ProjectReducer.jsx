import { GET_PROJECT_DETAIL } from "../actions/types/ProjectTypes"

const initialState = {
    projectDetail: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECT_DETAIL: {
            return { ...state, projectDetail: action.projectDetail }
        }
        default:
            return state
    }
}
