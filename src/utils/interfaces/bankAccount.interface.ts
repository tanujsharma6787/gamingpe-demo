import {IVendor} from "@/utils/interfaces/vendor.interface";

export interface IBank {
    _id?: string
    name: string
}

export interface IBankAccount {
    _id?: string;
    name: string;
    number: number;
    upi_id: string;
    bankId: string | IBank;
    vendorId: string | IVendor;
    daily_limit: number;
    incomes_today?: number;
    is_active: boolean;
    qrcode_url?: string | File | null;
    createdAt?: Date;
    updatedAt?: Date;
}
