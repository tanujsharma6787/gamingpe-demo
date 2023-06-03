import axiosInstance from "@/utils/axios";
import {VENDORS} from "@/utils/endpoints/endpoints";
import {IVendor} from "@/utils/interfaces/vendor.interface";

export const getVendors = async (): Promise<IVendor[]> => {
    try {
        const res = await axiosInstance.get(VENDORS);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const addVendor = async (payload: IVendor): Promise<IVendor> => {
    try {
        const res = await axiosInstance.post(VENDORS, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}