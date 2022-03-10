import { instance as api } from "../../api/app/Balance";
import CommonActions from "../base/CommonActions";

export default class BalanceActions extends CommonActions {

    constructor() {
        super("balance", api);
    }
}

export const actions = new BalanceActions();