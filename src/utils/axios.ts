import axios, {AxiosInstance} from 'axios';
import awesomeAlert from "@/utils/functions/alert";
import {AlertTypeEnum} from "@/utils/enums/alertType";
import {store} from "@/store";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add an interceptor to include the token in the headers of each request
axiosInstance.interceptors.request.use(config => {
    const token = store.getState().auth.token;
    console.log({url: config?.url})
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Define a response interceptor to handle errors
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            awesomeAlert({
                msg: error.response?.data?.message,
                type: AlertTypeEnum.error
            })
        } else if (error.request) {
            awesomeAlert({
                msg: error.request,
                type: AlertTypeEnum.error
            })  // The request was made but no response was received
        } else {
            // Something happened in setting up the request that triggered an Error
            awesomeAlert({
                msg: error.message,
                type: AlertTypeEnum.error
            })
        }
        console.log(error.config);
        return Promise.reject(error);
    }
);

export default axiosInstance;