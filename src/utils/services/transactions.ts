import axiosInstance from "@/utils/axios";
import {
    RELATED_TRANSACTIONS,
    TRANSACTION,
    TRANSACTIONS,
    TRANSACTIONS_CHECKING,
    TRANSACTIONS_LIST,
    TRANSACTIONS_STATISTICS
} from "@/utils/endpoints/endpoints";
import {ICreateTransactionDto, IFilterTransactionDto, IUpdateTransactionDto} from "@/utils/dto/transactions.dto";
import {ITransaction, ITransactionStatistics, ITransactionTable} from "@/utils/interfaces/transaction.interface";
import {IBankTransaction} from "@/utils/interfaces/bankTransaction.interface";

type ITransactions = { page?: number, limit?: number, filter: IFilterTransactionDto }
export type IRelatedTransactionsFilter = {
    utr?: string;
    order_id?: string;
}
export const transactionTable = async (payload: ITransactions): Promise<ITransactionTable> => {
    try {
        if (!payload.page) payload.page = 1
        if (!payload.limit) payload.limit = 10
        const res = await axiosInstance.post(TRANSACTIONS_LIST, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const getTransactionStatistics = async (payload: ITransactions): Promise<ITransactionStatistics> => {
    try {
        if (!payload.page) payload.page = 1
        if (!payload.limit) payload.limit = 10
        const res = await axiosInstance.post(TRANSACTIONS_STATISTICS, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const getRelatedTransactions = async (payload: IRelatedTransactionsFilter): Promise<{
    transactions: ITransaction[];
    bankTransactions: IBankTransaction[];
}> => {
    try {
        const res = await axiosInstance.post(RELATED_TRANSACTIONS, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const transactionsChecking = async (payload: IFilterTransactionDto): Promise<string> => {
    try {
        const res = await axiosInstance.post(TRANSACTIONS_CHECKING, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const createTransaction = async (payload: ICreateTransactionDto): Promise<ITransaction> => {
    try {
        const res = await axiosInstance.post(TRANSACTIONS, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const updateTransaction = async (id: string, payload: IUpdateTransactionDto): Promise<ITransaction> => {
    try {
        const res = await axiosInstance.put(TRANSACTION(id), payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const getTransaction = async (id: string): Promise<ITransaction> => {
    try {
        const res = await axiosInstance.get(TRANSACTION(id));
        return res.data
    } catch (error: any) {
        throw error;
    }
}