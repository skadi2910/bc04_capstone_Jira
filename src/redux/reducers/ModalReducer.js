import { CLOSE_MODAL, OPEN_MODAL } from "../actions/types/ModalType";

const initialState = {
  modalState: false,
  formType: "" || null,
};
export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return { ...state, modalState: true, formType: action.payload };
    }
    case CLOSE_MODAL: {
      return { ...state, modalState: false };
    }
    default:
      return state;
  }
};
