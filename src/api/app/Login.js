import ApiCrud from "../base/ApiCrud";


export default class Login extends ApiCrud {

    getBaseUrl() {
        return "/auth/login";
    }

}

export const instance = new Login();
