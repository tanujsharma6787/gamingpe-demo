import React from "react";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setBalance} from "@/store/auth/authSlice";
import {HOME_ROUTE} from "@/utils/endpoints/routes";
import awesomeAlert from "@/utils/functions/alert";
import {AlertTypeEnum} from "@/utils/enums/alertType";

const banks = [
    {
        label: 'ICICI Bank',
        value: 'ICICI Bank'
    },
    {
        label: 'HDFC Bank',
        value: 'HDFC Bank'
    },
    {
        label: 'Kotak Bank',
        value: 'Kotak Bank'
    },
    {
        label: 'Yes Bank',
        value: 'Yes Bank'
    },
]
export default function DebitCard() {
    const router = useRouter()
    const dispatch = useDispatch()
    const amount = useSelector((state: RootState) => state.auth.amount);
    const balance = useSelector((state: RootState) => state.auth.balance);
    const handleSubmit = () => {
        awesomeAlert({msg: 'Balance added successfully', type: AlertTypeEnum.success})
        dispatch(setBalance(balance + amount))
        setTimeout(() => {
            router.push(HOME_ROUTE)
        }, 1000)
    }

    return (
        <Box sx={{px: 4, pt: 3, pb: 4}}>
            <Typography variant="h5">Net Banking</Typography>
            <Typography variant="body1" sx={{my: 3}}>Please select bank you want to use to pay for this
                transaction.</Typography>

            <TextField
                sx={{width: '100%', mb: 3}}
                id="outlined-select-currency"
                select
                variant='outlined'
                label="Select Bank"
                defaultValue="ICICI Bank"
            >
                {banks.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
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