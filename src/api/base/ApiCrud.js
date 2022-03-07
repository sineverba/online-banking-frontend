import { axiosInstance as api } from "./axiosInstance";

export default class ApiCrud {

    post(payload) {
        return api.post(`${this.getBaseUrl()}`, payload).then(result => result.data);
    }

    getBaseUrl() {
        return this.baseUrl;
    }

}
