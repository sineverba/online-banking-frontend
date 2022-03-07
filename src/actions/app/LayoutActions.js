import { TOGGLE_NAVBAR_BUTTON } from "../../utils/constants/constant";
import CommonActions from "../base/CommonActions";

export default class LayoutActions extends CommonActions {

    constructor() {
        super("layout");
    }

    toggleNavbar() {
        return dispatch => dispatch({ type: TOGGLE_NAVBAR_BUTTON});
    }
}

export const actions = new LayoutActions();