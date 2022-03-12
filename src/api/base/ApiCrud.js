import { STARTING_ZERO } from "../../utils/constants/constant";
import { axiosInstance as api } from "./axiosInstance";

export default class ApiCrud {

    index(pageNumber, perPageNumber) {
        
        let page = pageNumber ?? 1;

        if (STARTING_ZERO) {
            page = page - 1;
        }
        const params = {
            page: page,
            perPage: perPageNumber ?? 5,
        };
        const queryString = new URLSearchParams(params).toString();
        return api.get(`${this.getBaseUrl()}?${queryString}`).then(result => result.data);
    }

    post(payload) {
        return api.post(`${this.getBaseUrl()}`, payload).then(result => result.data);
    }

    getBaseUrl() {
        return this.baseUrl;
    }

}
