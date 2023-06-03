import axiosInstance from "@/utils/axios";
import {
    BANK_TRANSACTIONS_REPORTS,
    RECON_REPORTS,
    TRANSACTIONS_REPORTS,
    VENDOR_REPORTS
} from "@/utils/endpoints/endpoints";
import {IFilterTransactionDto} from "@/utils/dto/transactions.dto";
import {IFilterBankTransactionDto} from "@/utils/dto/bankTransactions.dto";
import {IFilterVendorDto} from "@/utils/interfaces/vendor.interface";
import {AxiosResponse} from "axios";

const fileDownload = async (response: AxiosResponse<any, any>, fileName: string) => {
    try {
        if (!response.data) {
            throw new Error('Error downloading Excel file');
        }

        // Extract the filename from the Content-Disposition header
        const disposition = response.headers['Content-Disposition'];
        const matches = disposition && disposition.match(/filename="(.+)"/);
        const filename = matches && matches.length > 1 ? matches[1] : `${fileName}.xlsx`;

        const url = URL.createObjectURL(response.data);

        // Create a temporary <a> element to initiate the download
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const transactionReport = async (payload: IFilterTransactionDto): Promise<any> => {
    try {
        const res = await axiosInstance({
            method: 'post',
            url: TRANSACTIONS_REPORTS,
            data: payload,
            responseType: 'blob'
        });
        await fileDownload(res, `transaction-report-${Date.now()}`)
        return res.data

    } catch (error: any) {
        throw error;
    }
}
export const reconReport = async (payload: IFilterTransactionDto): Promise<any> => {
    try {
        const res = await axiosInstance({
            method: 'post',
            url: RECON_REPORTS,
            data: payload,
            responseType: 'blob'
        });
        await fileDownload(res, `recon-report-${Date.now()}`)
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const bankTransactionReport = async (payload: IFilterBankTransactionDto): Promise<any> => {
    try {
        const res = await axiosInstance({
            method: 'post',
            url: BANK_TRANSACTIONS_REPORTS,
            data: payload,
            responseType: 'blob'
        });
        await fileDownload(res, `statement-record-report-${Date.now()}`)
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const vendorReport = async (payload: IFilterVendorDto): Promise<any> => {
    try {
        const res = await axiosInstance({
            method: 'post',
            url: VENDOR_REPORTS,
            data: payload,
            responseType: 'blob'
        });
        await fileDownload(res, `vendor-report-${Date.now()}`)
        return res.data
    } catch (error: any) {
        throw error;
    }
}