export type IFilterBankTransactionDto = {
    is_claimed?: boolean;
    utr?: string;
    startDate?: Date;
    endDate?: Date;
    show?: boolean;
};