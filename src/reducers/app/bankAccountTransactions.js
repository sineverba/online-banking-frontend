import { combineReducers } from "redux";
import CommonStore from "../base/CommonStore";

const cStore = new CommonStore();

let commonStore = cStore.create("bankAccountTransactions");

export default combineReducers({
    ...commonStore,
});