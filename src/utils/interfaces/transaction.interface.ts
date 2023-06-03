import {IBankAccount} from "@/utils/interfaces/bankAccount.interface";
import {IBankSetting} from "@/utils/interfaces/bankSetting.interface";

export interface ITransaction {
    _id: string;
    order_id: string;
    setting: IBankSetting;
    statusUpdates: { status: string; date: Date }[];
    idx: string;
    amount_and_utr: string;
    utr: string;
    amount: number;
    status: string;
    bank_account: IBankAccount
    is_claimed: boolean;
    updates: { status: string; updatedAt: '' }[];
    createdAt: Date;
    updatedAt: Date;
    email?: string;
    mobile_no?: string;
    signature?: string;
    name?: string;
    redirect_url?: string;
    callback_url?: string;
}

export type ITransactionTable = {
    transactions: ITransaction[];
    pages: number;
    total: number;
}

export type IStatistics = {
    earnings: number;
    success: number;
    failed: number;
    successRate: number;
    pending: number;
}

export type ITransactionStatistics = IStatistics & {
    data: ITransactionTable;
}