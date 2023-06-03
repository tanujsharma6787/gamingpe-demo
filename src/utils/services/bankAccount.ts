import axiosInstance from "@/utils/axios";
import {BANK_ACCOUNT, BANK_ACCOUNTS} from "@/utils/endpoints/endpoints";
import {IBankAccount} from "@/utils/interfaces/bankAccount.interface";

export const getBankAccounts = async (): Promise<IBankAccount[]> => {
    try {
        const res = await axiosInstance.get(BANK_ACCOUNTS);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const getBankAccount = async (payload: { id: string }): Promise<IBankAccount> => {
    try {
        const res = await axiosInstance.get(BANK_ACCOUNT(payload.id));
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const updateBankAccount = async (id: string, payload: IBankAccount): Promise<IBankAccount> => {
    try {
        const res = await axiosInstance.put(BANK_ACCOUNT(id), payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const createBankAccount = async (payload: IBankAccount): Promise<IBankAccount> => {
    try {
        const res = await axiosInstance.post(BANK_ACCOUNTS, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}