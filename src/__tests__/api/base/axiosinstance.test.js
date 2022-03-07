import { axiosInstance } from "../../../api/base/axiosInstance";
import { REACT_FE_ACCESS_TOKEN } from "../../../utils/constants/constant";

const token = "a1.b2.c3";

beforeEach(() => {
    localStorage.clear();
});

describe('Test API Instance', () => {
    it ('Test request interceptor with token', () => {
        localStorage.setItem(REACT_FE_ACCESS_TOKEN, token);
        expect(localStorage.getItem(REACT_FE_ACCESS_TOKEN)).toBe(token);
        const result = axiosInstance.interceptors.request.handlers[0].fulfilled({ headers: {} });
        expect(result.headers).toHaveProperty("Authorization");
    });

    it ('Test request interceptor without token', () => {
        const result = axiosInstance.interceptors.request.handlers[0].fulfilled({ headers: {} });
        expect(result.headers).not.toHaveProperty("Authorization");
    });
});
