import { combineReducers } from "redux";
import layout from "./app/layout";
import login from "./app/login";

export default combineReducers({
    layout,
    login,
});
