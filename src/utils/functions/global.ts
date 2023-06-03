import moment from "moment";
import {IOptionItem} from "@/components/filter/main/filterSelect";

// DateFormatter
export const DateFormatter = (value: Date) => moment(value).format('lll')

//OptionsFromArray
type IOptionFromEnum = (value: any) => IOptionItem[]
export const OptionsFromArray: IOptionFromEnum = (value: any[]) => Object.values(value).map(s => (
    {value: s, id: s}
))

//PriceFormatter
export const PriceFormatter: (value: string | number) => string = (value) => value.toLocaleString('en-US')

export const asset = (url: string) => {
    return '/' + url
}

export const isMobile: boolean = (typeof window !== 'undefined') ? window.innerWidth < 600 : false