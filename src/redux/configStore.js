import { combineReducers } from "redux";

import { LoadingReducer } from "./reducers/LoadingReducer";
import { SelectedKeyReducer } from "./reducers/SelectedKeyReducer";
import { configureStore } from "@reduxjs/toolkit";
import { ProjectDetailReducer } from "./reducers/ProjectDetailReducer";
import { ProjectListReducer } from "./reducers/ProjectListReducer";
import { UserReducer } from "./reducers/UserReducer";
import { ModalReducer } from "./reducers/ModalReducer";
import { DrawerReducer } from "./reducers/DrawerReducer";
import { TaskReducer } from "./reducers/TaskReducer";
import CommentReducer from "./reducers/CommentReducer";
// ! redux devtool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
const rootReducer = combineReducers({
  LoadingReducer,
  ModalReducer,
  SelectedKeyReducer,
  DrawerReducer,
  ProjectListReducer,
  ProjectDetailReducer,
  UserReducer,
  TaskReducer,
  CommentReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
