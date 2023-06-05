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

const currencies = [
    {
        value: 'BHIM',
        label: 'BHIM',
    },
]
export default function UpiCollect() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };
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
    const moveToVerify = () => {

    }

    return (
        <Box sx={{px: 4, pt: 3, pb: 4}}>
            <Typography variant="h5">Payment Details</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 4, mb: 3, px: 2}}>
                <Box>UPI/BHIM</Box>
                <Box>
                    <Button color='success'>Change</Button>
                </Box>
            </Box>
            <TextField
                sx={{width: '100%'}}
                id="outlined-select-currency"
                select
                variant='outlined'
                label="Select your UPI app"
                defaultValue="BHIM"
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <FormControl sx={{width: '100%', my: 3}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Enter your UPI ID</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    endAdornment={<InputAdornment position="end">@upi</InputAdornment>}
                    label="Password"
                />
            </FormControl>
            <Button
                size='large'
                sx={{textTransform: 'capitalize', px: 5}}
                color='success'
                onClick={moveToVerify}
                variant='contained'>
                Verify & Pay
            </Button>
        </Box>
    );
}