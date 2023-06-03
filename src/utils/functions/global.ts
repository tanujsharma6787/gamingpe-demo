import moment from "moment";

// DateFormatter
export const DateFormatter = (value: Date) => moment(value).format('lll')

//PriceFormatter
export const PriceFormatter: (value: string | number) => string = (value) => value.toLocaleString('en-US')

export const asset = (url: string) => {
    return '/' + url
}

export const isMobile: boolean = (typeof window !== 'undefined') ? window.innerWidth < 600 : false