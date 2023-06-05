import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import awesomeAlert from "@/utils/functions/alert";
import {AlertTypeEnum} from "@/utils/enums/alertType";
import {setBalance} from "@/store/auth/authSlice";
import {HOME_ROUTE} from "@/utils/endpoints/routes";

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
        <Box sx={{px: 4, pt: 3, pb:4}}>
            <Typography variant="h5">Credit Card Details</Typography>
            <TextField sx={{mt: 2, width:'100%'}} id="outlined-basic" label="Card Number" variant="outlined"/>
            <TextField sx={{my: 2, width:'100%'}} id="outlined-basic" label="Expiry Date (MM/YY)" variant="outlined"/>
            <TextField sx={{mb: 2, width:'100%'}} id="outlined-basic" label="CVV" variant="outlined"/>
            <Button
                size='large'
                sx={{textTransform: 'capitalize', px: 5}}
                onClick={handleSubmit}
                color='success'
                variant='contained'>
                Confirm payment
            </Button>
        </Box>
    );
}