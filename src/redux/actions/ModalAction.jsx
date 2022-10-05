import { CLOSE_MODAL, OPEN_MODAL } from "./types/ModalType";

export const openModalAction = (component = "") => ({
    type: OPEN_MODAL,
    component
})
export const closeModalAction = () => ({
    type: CLOSE_MODAL,
})
