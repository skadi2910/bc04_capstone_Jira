import { CLOSE_MODAL, OPEN_MODAL } from "../actions/types/ModalType"

const initialState = {
    modalState: false,
    defaultComponent: <p>defalutComponent</p>
}
export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return { ...state, modalState: true, defaultComponent: action.component }
        }
        case CLOSE_MODAL: {
            return { ...state, modalState: false }
        }
        default:
            return state
    }
}
