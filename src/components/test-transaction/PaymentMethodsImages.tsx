import {Link} from "@mui/material";
import Image from "next/image";
import * as React from "react";
import {asset} from "@/utils/functions/global";
import {ITransaction} from "@/utils/interfaces/transaction.interface";


type PaymentMethodsImagesProps = {
    transaction: ITransaction,
}
export const PaymentMethodsImages = ({transaction}: PaymentMethodsImagesProps) => {
    const link = (name: string) => `${name}://${transaction?.bank_account?.qrcode_url || ':qrcode_url'}`

    const paymentMethods: { imgUrl: string, link: string }[] = [{
        imgUrl: asset('img/payment-method/bharatpe.png'), link: link('bharatpe')
    }, {
        imgUrl: asset('img/payment-method/freecharge-icon.png'), link: link('freecharge')
    }, {
        imgUrl: asset('img/payment-method/google-pay-logo-icon.png'), link: link('google-pay')
    }, {
        imgUrl: asset('img/payment-method/icici.png'), link: link('icici')
    }, {
        imgUrl: asset('img/payment-method/mobik-icon.png'), link: link('mobikwik')
    }, {
        imgUrl: asset('img/payment-method/paytm.png'), link: link('paytm')
    }, {
        imgUrl: asset('img/payment-method/phonepe-logo-icon.png'), link: link('phonepe')
    }, {
        imgUrl: asset('img/payment-method/upi-icon.png'), link: link('upi')
    },]
    return (<>
        {  paymentMethods.map((p, i) =>
            <Image style={{borderRadius: '50%', overflow: 'hidden'}}
                   key={i} width={26} height={26} src={p.imgUrl} alt={p.imgUrl}/>)
        }
    </>)
}