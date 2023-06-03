import * as React from "react";
import {FormEvent, useEffect, useState} from "react";
import {ITransaction} from "@/utils/interfaces/transaction.interface";
import {useRouter} from "next/router";
import {updateTransaction} from "@/utils/services/transactions";
import moment from "moment";
import {MainSection} from "@/components/test-transaction/MainSection";
import awesomeAlert from "@/utils/functions/alert";
import {AlertTypeEnum} from "@/utils/enums/alertType";
import {CircularProgress, Typography} from "@mui/material";
import {IUpdateTransactionDto} from "@/utils/dto/transactions.dto";
import Box from "@mui/material/Box";

export default function TransactionShow() {
    const [loading, setLoading] = useState(false)
    const [remainingTime, setRemainingTime] = useState(300);
    const router = useRouter()
    const {id} = router.query;

    // @ts-ignore
    const transaction: ITransaction = {
        "_id": "6479f80028ce931be0ea7d13",
        "order_id": "8224411252838l2lk",
        "setting": {
            "category": "P2",
            "upi_ids": [
                "647a0644ace9f6421ea6dabd"
            ],
            "active_upi_id": "647a0644ace9f6421ea6dabd",
            "is_active": true,
        },
        "statusUpdates": [],
        "bank_account": {
            "_id": "6479f7e828ce931be0ea7d00",
            "name": "bank account for HDFC",
            "number": 153213213,
            "upi_id": "9888168256@paytm",
            "bankId": "6479ebe1b97a723883f71b30",
            "vendorId": "6479f7b528ce931be0ea7cfa",
            "daily_limit": 100000,
            "incomes_today": 0,
            "is_active": false,
            "qrcode_url": "upi://pay?pa=9888168256@paytm&pn=gb%20gc&mc=0000&mode=02&purpose=00&orgid=159761",
        },
        "amount": 100,
        "status": "failed",
        "is_claimed": false,
        "updates": [],
        "amount_and_utr": "100_123456789119",
        "idx": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbW91bnQiOjEwMCwidXRyIjoiMTIzNDU2Nzg5MTE5IiwiaWF0IjoxNjg1NzE1MDIwfQ.BVfK-Jm657ZOc8xteV5sAADCBp4sxVMeySqaLgF7NSs",
        "utr": "123456789119"
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget);
        const data: IUpdateTransactionDto = {};
        formData.forEach((value, key) => {
            // @ts-ignore
            if (value) data[key] = value;
        });
        if (data.utr && data.utr.length === 12) {
            updateTransaction(typeof id === "string" ? id : ':id', {utr: data.utr}).then(res => {
                if (res?._id) {
                    awesomeAlert({msg: 'UTR submit successfully', type: AlertTypeEnum.success})
                    if (transaction?.redirect_url) {
                        window.location.href = transaction.redirect_url
                    } else {
                        window.location.reload()
                    }
                    // @ts-ignore
                } else if (typeof res?.message === 'string') {
                    // @ts-ignore
                    awesomeAlert({msg: res?.message, type: AlertTypeEnum.error})
                }
                return res
            }).catch(err => {
                setLoading(false)
                console.error(err)
            })
        } else {
            awesomeAlert({msg: 'UTR Must Be 12 Digit only', type: AlertTypeEnum.error})
        }
        setLoading(false)
        return;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const createdAt = moment();
            const fiveMinutesAgo = moment().subtract(5, 'minutes');
            const diffInSeconds = fiveMinutesAgo.diff(createdAt, 'seconds');
            setRemainingTime(Math.max(0, -diffInSeconds));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <>
        {
            loading && <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <CircularProgress size={50}/>
            </Box>
        }
        {
            !loading && !transaction?.utr ? (
                (remainingTime <= 0) ?
                    <Typography variant='h6' sx={{m: 3}}>
                        The page is locked because the last transaction was more than 5 minutes ago.
                    </Typography> :
                    !!transaction && <MainSection loading={loading} transaction={transaction} onSubmit={handleSubmit}/>
            ) : <Typography variant='h4' sx={{m: 6}}>Submit Successfully</Typography>
        }
    </>

}


