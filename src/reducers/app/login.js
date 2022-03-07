import { combineReducers } from "redux";
import { LOGOUT, REACT_FE_ACCESS_TOKEN } from "../../utils/constants/constant";
import CommonStore from "../base/CommonStore";

const cStore = new CommonStore();

let commonStore = cStore.create("login");

export const accessToken = (state = null, { type, data } = {}) => {
    if (type === "POST_LOGIN_ITEMS_SUCCEEDED") {
        if (data && data.access_token) {
            localStorage.setItem(REACT_FE_ACCESS_TOKEN, data.access_token);
            return data.access_token;
        }
        return null;
    }
    if (type === LOGOUT) {
        localStorage.removeItem(REACT_FE_ACCESS_TOKEN);
        return null;
    }
    if (localStorage.getItem(REACT_FE_ACCESS_TOKEN) !== null) {
        return localStorage.getItem(REACT_FE_ACCESS_TOKEN);
    }
    return state;
}

export default combineReducers({
    ...commonStore,
    accessToken
});