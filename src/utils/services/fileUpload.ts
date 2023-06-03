import axiosInstance from "@/utils/axios";
import {BANK_TRANSACTION_UPLOAD} from "@/utils/endpoints/endpoints";
import {BanksImportEnum} from "@/utils/enums/banks";

export const bankTransactionFileUpload = async (formData: FormData, bank: BanksImportEnum | string) => {
    try {
        const response = await axiosInstance.post(BANK_TRANSACTION_UPLOAD(bank),
            // {file: formData, key: process.env.NEXT_PUBLIC_FILE_SECRET_KEY}, {
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        console.log({response})
        return response;
    } catch (error: any) {
        throw error;
    }
}