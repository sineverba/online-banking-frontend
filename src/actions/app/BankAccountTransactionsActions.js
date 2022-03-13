import { instance as api } from "../../api/app/BankAccountTransactions";
import CommonActions from "../base/CommonActions";

export default class BankAccountTransactionsActions extends CommonActions {

    constructor() {
        super("bankaccounttransactions", api);
    }
}

export const actions = new BankAccountTransactionsActions();