import { instance as api } from "../../api/app/Login";
import { LOGOUT } from "../../utils/constants/constant";
import CommonActions from "../base/CommonActions";

export default class LoginActions extends CommonActions {

    constructor() {
        super("login", api);
    }

    logout() {
        return dispatch => dispatch({ type: LOGOUT });
    }
}

export const actions = new LoginActions();