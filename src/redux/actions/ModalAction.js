import { CLOSE_MODAL, OPEN_MODAL } from "./types/ModalType";

export const openModalAction = (formType) => ({
  type: OPEN_MODAL,
  payload: formType,
});
export const closeModalAction = () => ({
  type: CLOSE_MODAL,
});
