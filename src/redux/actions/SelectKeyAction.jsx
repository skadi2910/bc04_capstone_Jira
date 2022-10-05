import { SELECT_KEY } from "./types/SelectedKeyTypes";

export const selectedKeyAction = (key) => ({
    type: SELECT_KEY,
    key
})
