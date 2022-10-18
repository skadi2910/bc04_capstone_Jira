import { DISPLAY_LOADING, HIDE_LOADING } from "./constants/LoadingConstant";

export const setLoadingOnAction = () => ({
  type: DISPLAY_LOADING,
});
export const setLoadingOffAction = () => ({
  type: HIDE_LOADING,
});
