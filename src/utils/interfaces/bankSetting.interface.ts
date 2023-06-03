export interface IBankSetting {
    category: string;
    upi_ids: string[];
    active_upi_id: string;
    is_active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
