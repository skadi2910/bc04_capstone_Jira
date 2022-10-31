const initialState = {
  visible: false,
  formType: "",
  title: "",
  placement: "",
  width: "",
  height: "",
};

export const DrawerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "OPEN_DRAWER/PROJECT_EDIT":
      return {
        ...state,
        visible: true,
        formType: "ProjectEdit",
        title: "Edit Project",
        placement: "right",
        width: "70%",
        height: "100%",
      };
    case "OPEN_DRAWER/TASK_CREATE":
      return {
        ...state,
        visible: true,
        formType: "TaskCreate",
        title: "Create Task",
        placement: "left",
        width: "80%",
        height: "100%",
      };
    case "CLOSE_DRAWER":
      return { ...state, visible: false };
    default:
      return state;
  }
};
