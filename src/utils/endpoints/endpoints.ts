import {BanksImportEnum} from "@/utils/enums/banks";

export const LOGIN = `/auth/login`;
export const BANK_TRANSACTION_UPLOAD = (bankName: BanksImportEnum | string) => `/bank-transactions/upload/${bankName || ':bankName'}`;
export const CHECK_TRANSACTIONS = `/check-transactions`;
export const RELATED_TRANSACTIONS = `${CHECK_TRANSACTIONS}/related`;
export const TRANSACTIONS_CHECKING = `${CHECK_TRANSACTIONS}/match-by-transaction`;

export const TRANSACTIONS = `/transactions`;
export const TRANSACTION = (id: string) => `${TRANSACTIONS}/${id || ':id'}`;
export const TRANSACTIONS_LIST = `${TRANSACTIONS}/find`;
export const TRANSACTIONS_STATISTICS = `${TRANSACTIONS}/statistics`;
export const BANK_TRANSACTIONS = `/bank-transactions`;
export const BANK_TRANSACTIONS_LIST = `${BANK_TRANSACTIONS}/find`;
export const BANK_SETTINGS = `/bank-setting`;
export const BANK_SETTING_BY_ID = (id: string) => `${BANK_SETTINGS}/${id || ':id'}`;
export const BANK_ACCOUNTS = `/bank-accounts`;
export const BANK_ACCOUNT = (id: string) => `/bank-accounts/${id || ':id'}`;
export const BANKS = `/bank`;
export const VENDORS = `/vendors`;
export const REPORTS = `/reports`;
export const TRANSACTIONS_REPORTS = `${REPORTS}/transaction`;
export const BANK_TRANSACTIONS_REPORTS = `${REPORTS}/bank-transaction`;
export const VENDOR_REPORTS = `${REPORTS}/vendor`;
export const RECON_REPORTS = `${REPORTS}/recon`;
