import ApiCrud from "../base/ApiCrud";


export default class Balance extends ApiCrud {

    getBaseUrl() {
        return "/balance";
    }

}

export const instance = new Balance();
