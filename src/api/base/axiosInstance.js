import axios from "axios"
import { REACT_FE_ACCESS_TOKEN } from "../../utils/constants/constant";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        "content-type": "application/json"
    },
    responseType: "json"
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem(REACT_FE_ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.toString());
    }
);

export { axiosInstance };
