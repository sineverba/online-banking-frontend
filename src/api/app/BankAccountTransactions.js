import ApiCrud from "../base/ApiCrud";


export default class BankAccountTransactions extends ApiCrud {

    getBaseUrl() {
        return "/bank-account-transactions";
    }

}

export const instance = new BankAccountTransactions();
