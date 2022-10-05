import { SELECT_KEY } from "../actions/types/SelectedKeyTypes";

const initialState = {
    selectedKey: 1
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_KEY: {
            return { ...state, selectedKey: action.key }
        }
        default:
            return state;
    }
}

