export interface IBankTransaction {
    id: string;
    bank_account: string;
    amount: number;
    transaction: {
        info: string;
        date: Date;
    };
    idx: string;
    amount_and_utr: string;
    utr: string;
    is_claimed: boolean;
    createdAt: Date;
    updatedAt: Date;
}