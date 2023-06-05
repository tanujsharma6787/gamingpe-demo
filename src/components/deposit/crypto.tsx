import React, {useState} from "react";
import {Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import awesomeAlert from "@/utils/functions/alert";
import {AlertTypeEnum} from "@/utils/enums/alertType";
import {setBalance} from "@/store/auth/authSlice";
import {HOME_ROUTE} from "@/utils/endpoints/routes";
import ProgressBar from "@/components/prgressBar";
import {CopyAll} from "@mui/icons-material";
import QRCode from "qrcode.react";

const currencies = [
    {
        value: 'BHIM',
        label: 'BHIM',
    },
]
const multiple = 1.25;
export default function Crypto(props: { cryptoType: string }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const amount = useSelector((state: RootState) => state.auth.amount);
    const balance = useSelector((state: RootState) => state.auth.balance);
    const handleSubmit = () => {
        awesomeAlert({msg: 'Balance added successfully', type: AlertTypeEnum.success})
        dispatch(setBalance(balance + amount))
        setTimeout(() => {
            router.push(HOME_ROUTE)
        })
    }

    function copyToClipboard(val: string) {
        navigator.clipboard.writeText(val);
        awesomeAlert({msg: 'Wallet Copied'});
    }


    return (
        <Box sx={{px: 4, pt: 3, pb: 4, width: '400px'}}>
            <Typography variant="h5">{props.cryptoType} Address</Typography>
            <Box className="qrcode">
                <Box sx={{
                    borderRadius: '30px', py: 2, mx: 'auto', background: 'white', display: 'inline-block'
                }}>
                    <QRCode size={200}
                            value={`bitcoin:17Tc9japXyKWRvvxTWKmmoqihLF6N16RuL?amount=${amount * multiple}`}/>
                </Box>
            </Box>
            <Box sx={{fontSize: '20px', py: 3}}>
                {amount * multiple} {props.cryptoType}
            </Box>
            <Box sx={{pb: 2}}>
                Send {amount * multiple} {props.cryptoType} (in ONE payment) to: don't include transaction fee in this amount
            </Box>
            <Box sx={{pb: 3}}>
                17Tc9japXyKWRvvxTWKmmoqihL
                <CopyAll sx={{ml: 2}} onClick={() => copyToClipboard('17Tc9japXyKWRvvxTWKmmoqihLF6N16RuL')}/>
            </Box>
            <Button
                size='large'
                sx={{textTransform: 'capitalize', px: 5}}
                color='success'
                onClick={handleSubmit}
                variant='contained'>
                Confirm payment
            </Button>
        </Box>
    );
}