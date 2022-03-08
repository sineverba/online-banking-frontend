import { combineReducers } from "redux";
import layout from "./app/layout";
import login from "./app/login";
import balance from "./app/balance";

export default combineReducers({
    layout,
    login,
    balance,
});
