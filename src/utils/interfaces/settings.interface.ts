import {IBankAccount} from "@/utils/interfaces/bankAccount.interface";

export type ISetting = {
    _id: string
    category: string
    upi_ids: IBankAccount[]
    active_upi_id: IBankAccount
    is_active: boolean
    updatedAt?: string
}

export type ISettingDto = {
    _id?: string
    category?: string
    upi_ids: string[]
    active_upi_id: string
    is_active: boolean
}