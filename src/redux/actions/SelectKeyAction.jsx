import { SELECT_KEY } from "./constants/SelectedKeyConstant";

export const selectedKeyAction = (key) => ({
  type: SELECT_KEY,
  key,
});
