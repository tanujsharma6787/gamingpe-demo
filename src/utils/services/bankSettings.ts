import axiosInstance from "@/utils/axios";
import {BANK_SETTING_BY_ID, BANK_SETTINGS} from "@/utils/endpoints/endpoints";
import {ISetting, ISettingDto} from "@/utils/interfaces/settings.interface";

export const getSettings = async (): Promise<ISetting[]> => {
    try {
        const res = await axiosInstance.get(BANK_SETTINGS);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const getSetting = async (payload: { id: string }): Promise<ISetting> => {
    try {
        const res = await axiosInstance.get(BANK_SETTING_BY_ID(payload.id));
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const updateSetting = async (id: string, payload: ISettingDto): Promise<ISetting> => {
    try {
        const res = await axiosInstance.put(BANK_SETTING_BY_ID(id), payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}
export const creteSetting = async (payload: ISettingDto): Promise<ISetting> => {
    try {
        const res = await axiosInstance.post(BANK_SETTINGS, payload);
        return res.data
    } catch (error: any) {
        throw error;
    }
}