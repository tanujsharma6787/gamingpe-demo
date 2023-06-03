import axiosInstance from "@/utils/axios";
import {LOGIN} from "@/utils/endpoints/endpoints";

interface LoginCredentials {
    email: string;
    password: string;
}

export const login = async (credentials: LoginCredentials) => {
    try {
        const response = await axiosInstance.post(LOGIN, credentials);
        return response.data;
    } catch (error: any) {
        throw error;
    }
}