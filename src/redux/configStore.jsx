import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import LoadingReducer from "./reducers/LoadingReducer";
import SelectedKeyReducer from "./reducers/SelectedKeyReducer";
import UserReducer from "./reducers/UserReducer";
import ModalReducer from "./reducers/ModalReducer";
// ! redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    LoadingReducer, SelectedKeyReducer, UserReducer, ModalReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));