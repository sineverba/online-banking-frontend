import { combineReducers } from "redux";
import { TOGGLE_NAVBAR_BUTTON } from "../../utils/constants/constant";
import CommonStore from "../base/CommonStore";

const cStore = new CommonStore();

let commonStore = cStore.create("layout");

export const isNavbarClosed = (state = false, { type } = {}) => {
    if (type === TOGGLE_NAVBAR_BUTTON) {
        return !state;
    }
    return state;
}

export default combineReducers({
    ...commonStore,
    isNavbarClosed
});