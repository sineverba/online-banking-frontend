import { axiosInstance as api } from "./axiosInstance";

export default class ApiCrud {

    index() {
        return api.get(`${this.getBaseUrl()}`).then(result => result.data);
    }

    post(payload) {
        return api.post(`${this.getBaseUrl()}`, payload).then(result => result.data);
    }

    getBaseUrl() {
        return this.baseUrl;
    }

}
