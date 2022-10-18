import { combineReducers } from "redux";

import LoadingReducer from "./reducers/LoadingReducer";
import SelectedKeyReducer from "./reducers/SelectedKeyReducer";
import { configureStore } from "@reduxjs/toolkit";

import ProjectDetailSlice from "./features/ProjectDetail/ProjectDetailSlice";
import { ProjectListReducer } from "./reducers/ProjectListReducer";

// ! redux devtool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
const rootReducer = combineReducers({
  LoadingReducer,
  SelectedKeyReducer,
  ProjectListReducer,

  projectDetailReducer: ProjectDetailSlice,
});
// ConfigureStore có sẵn redux_thunk && redux_devtools
export const store = configureStore({ reducer: rootReducer });
