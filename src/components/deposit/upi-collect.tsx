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

const banks = [
    {
        value: 'BHIM',
        label: 'BHIM',
    },
    {
        value: 'MobiKwik',
        label: 'MobiKwik',
    },
    {
        value: 'phonePe',
        label: 'phonePe',
    },
    {
        value: 'Freecharge',
        label: 'Freecharge',
    },
    {
        value: 'Paytm',
        label: 'Paytm',
    },
    {
        value: 'G Pay',
        label: 'G Pay',
    },
    {
        value: 'Buddy',
        label: 'Buddy',
    },
    {
        value: 'JioMoney',
        label: 'JioMoney',
    },
]
export default function UpiCollect() {
    const [step2, setStep2] = useState(false);
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
    const moveToVerify = () => {
        setStep2(true)
        setTimeout(() => {
            handleSubmit()
        }, 5000)
    }


    return (
        <Box sx={{px: 4, pt: 3, pb: 4, width: '400px'}}>
            {!step2 ?
                <>
                    <Typography variant="h5">Payment Details</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', my: 4, px: 2}}>
                        <Box>UPI/BHIM</Box>
                    </Box>
                    <TextField
                        sx={{width: '100%'}}
                        id="outlined-select-currency"
                        select
                        variant='outlined'
                        label="Select your UPI app"
                        defaultValue="BHIM"
                    >
                        {banks.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControl sx={{width: '100%', my: 3}} variant="outlined">
                        <OutlinedInput
                            placeholder='Enter your UPI ID'
                            endAdornment={<InputAdornment position="end">@upi</InputAdornment>}
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
                </> :
                <>
                    <Typography variant="h5">Waiting for your confirmation</Typography>
                    <Box sx={{py: 3}}>
                        <Box>
                            <Typography variant="overline" sx={{borderRadios: '15px', boxShadow: 1, p: 1}}>
                                Step 1
                            </Typography>
                        </Box>
                        <Box sx={{pb: 2, pt: 1}}>Go to your UPI app</Box>
                        <Box>
                            <Typography variant="overline" sx={{borderRadios: '15px', boxShadow: 1, p: 1}}>
                                Step 2
                            </Typography></Box>
                        <Box sx={{pb: 2, pt: 1}}>Enter your PIN and Confirm</Box>
                        <Box sx={{pt: 2}}>
                            <ProgressBar duration={50000}/>
                        </Box>
                    </Box>
                </>
            }
        </Box>
    );
}