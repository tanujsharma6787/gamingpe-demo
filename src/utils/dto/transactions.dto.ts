import {IBankSetting} from "@/utils/interfaces/bankSetting.interface";
import {IBankAccount} from "@/utils/interfaces/bankAccount.interface";

export type IFilterTransactionDto = {
    // _ids?: string[];
    status?: string;
    category?: string;
    statuses?: string[];
    is_claimed?: boolean;
    startDate?: Date;
    endDate?: Date;
    show?: boolean

    setting?: IBankSetting | string;
    bank_account?: IBankAccount | string;

}
export type ICreateTransactionDto = {
    status?: string;
    category?: string;
    statuses?: string[];
    is_claimed?: boolean;
    startDate?: Date;
    endDate?: Date;
    show?: boolean

    setting?: string;
    bank_account?: IBankAccount | string;

}

export interface IUpdateTransactionDto {
    ids?: string[];
    status?: string;
    is_claimed?: boolean;
    utr?: string;
    amount_and_utr?: string;
}
