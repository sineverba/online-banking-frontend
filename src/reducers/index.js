import { combineReducers } from "redux";
import layout from "./app/layout";
import login from "./app/login";
import balance from "./app/balance";
import bankAccountTransactions from "./app/bankAccountTransactions";

export default combineReducers({
    layout,
    login,
    balance,
    bankAccountTransactions
});
