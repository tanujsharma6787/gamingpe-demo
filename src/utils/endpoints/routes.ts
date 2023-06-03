import {BanksImportEnum} from "@/utils/enums/banks";
import {ReportEnum} from "@/utils/enums/reports";
import {CheckingEnum} from "@/utils/enums/checking";

export const HOME_ROUTE = '/'
export const TEST_TRANSACTION_ROUTE = '/test'
export const SHOW_TRANSACTION_ROUTE = (id: string) => `${TEST_TRANSACTION_ROUTE}/${id || ':id'}`
const SECRET_ROUTE = '/panel'
export const LOGIN_ROUTE = `${SECRET_ROUTE}/login`;
export const DASHBOARD_ROUTE = `${SECRET_ROUTE}/dashboard`;
export const TRANSACTIONS_ROUTE = `${SECRET_ROUTE}/transactions`;
export const BANK_ACCOUNTS_ROUTE = `${SECRET_ROUTE}/bank-accounts`;
export const CREATE_BANK_ACCOUNTS_ROUTE = `${BANK_ACCOUNTS_ROUTE}/create`;
export const CREATE_VENDOR_ROUTE = `${BANK_ACCOUNTS_ROUTE}/vendor/create`;
export const EDIT_BANK_ACCOUNTS_ROUTE = (id: string) => `${BANK_ACCOUNTS_ROUTE}/${id || ':id'}`;
export const SETTINGS_ROUTE = `${SECRET_ROUTE}/settings`;

export const CREATE_SETTING_ROUTE = `${SETTINGS_ROUTE}/create`;
export const EDIT_SETTING_ROUTE = (id: string) => `${SETTINGS_ROUTE}/${id || ':id'}`;
export const STATEMENT_RECORDS_ROUTE = `${SECRET_ROUTE}/statement-records`;
export const UNCLAIMED_RECORDS_ROUTE = `${SECRET_ROUTE}/unclaimed-records`;
// export const LAST_24_HOURLY_REPORTS_ROUTE = `${SECRET_ROUTE}/24-hourly-reports`;

export const STATEMENT_MANAGEMENT_ROUTE = `${SECRET_ROUTE}/statement-management`;
export const STATEMENT_IMPORT_ROUTE = (bankName: BanksImportEnum) => `${STATEMENT_MANAGEMENT_ROUTE}/${bankName || ':bankName'}`;
export const REPORT_MANAGEMENT_ROUTE = `${SECRET_ROUTE}/report-management`;
export const REPORTS_ROUTE = (report: ReportEnum) => `${REPORT_MANAGEMENT_ROUTE}/${report || ':report'}`;

export const CHECKING_ROUTE = `${SECRET_ROUTE}/checking`;
export const CHECK_ROUTE = (check: CheckingEnum) => `${CHECKING_ROUTE}/${check || ':check'}`;
