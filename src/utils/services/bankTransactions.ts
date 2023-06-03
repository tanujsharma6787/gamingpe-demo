import axiosInstance from "@/utils/axios";
import {BANK_TRANSACTIONS_LIST} from "@/utils/endpoints/endpoints";
import {IFilterBankTransactionDto} from "@/utils/dto/bankTransactions.dto";
import {IBankTransaction} from "@/utils/interfaces/bankTransaction.interface";

type IBankTransactions = { page: number, limit: number, filter: IFilterBankTransactionDto }
export const bankTransactionTable = async (payload: IBankTransactions): Promise<{
    page: number,
    total: number,
    transactions: IBankTransaction[]
}> => {
    try {
        if (!payload.page) payload.page = 1
        if (!payload.limit) payload.limit = 10
        const res = await axiosInstance.post(BANK_TRANSACTIONS_LIST, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}