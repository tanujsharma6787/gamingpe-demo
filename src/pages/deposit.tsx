import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import {AccountBalance, CreditCard, CurrencyBitcoin, Payment, QrCode} from "@mui/icons-material";
import Layout2 from "@/components/layouts/Layout2";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {FormEvent, useState} from "react";
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import UpiQr from "@/components/deposit/upi-qr";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setAmount} from "@/store/auth/authSlice";
import UpiCollect from "@/components/deposit/upi-collect";
import DebitCard from "@/components/deposit/debit-card";
import NetBanking from "@/components/deposit/net-banking";
import Crypto from "@/components/deposit/crypto";


const boxStyle = {
    backgroundColor: '#ef5520',
    // backgroundColor: '#222831',
    mb: 3,
    pb: 4,
    width: '100%',
    borderRadius: '10px',
    padding: '15px'
}
const typographyStyle = {
    mb: 2,
    display: 'inline-block',
    color: 'black',
    background: 'white',
    padding: '10px',
    borderRadius: '7px',
    width: '100%',
    maxWidth: '100%',
}
const typographyParentStyle = {mb: 2}

type IDialogs = 'upi-qr' | 'upi-collect' | 'debit-card' | 'net-banking' | 'crypto'
type ICryptoTypes = 'TRC' | 'USDT' | 'ERC' | ''

export default function Home() {
    const [openUpiQr, setOpenUpiQr] = useState(false);
    const [openUpiCollect, setOpenUpiCollect] = useState(false);
    const [cryptoType, setCryptoType] = useState<ICryptoTypes>('');
    const [openCrypto, setOpenCrypto] = useState(false);
    const [openAmount, setOpenAmount] = useState(false);
    const [openDebitCard, setOpenDebitCard] = useState(false);
    const [openNetBanking, setOpenNetBanking] = useState(false);
    const [a, setA] = useState<string | number>('');
    const [target, setTarget] = useState<'' | IDialogs>('');

    const amount = useSelector((state: RootState) => state.auth.amount);
    const dispatch = useDispatch()
    const setAmountValue = (val: number) => {
        dispatch(setAmount(val))
    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenDialog = () => {
        setOpenAmount(false)
        if (target === "upi-qr")
            setOpenUpiQr(true);
        if (target === "upi-collect")
            setOpenUpiCollect(true);
        if (target === "debit-card")
            setOpenDebitCard(true);
        if (target === "net-banking")
            setOpenNetBanking(true);
        if (target === "crypto")
            setOpenCrypto(true);
    };
    const handleOpenAmount = () => {
        setOpenAmount(true)
    };
    const handleCloseDialog = () => {
        setOpenUpiQr(false);
        setOpenUpiCollect(false);
        setOpenDebitCard(false);
        setOpenNetBanking(false);
        setOpenCrypto(false);
    };

    return (
        <Layout2>
            <Box sx={{maxWidth: '90%', my: 20}}>
                <Box sx={boxStyle}>
                    <Box sx={typographyParentStyle}>
                        <Typography sx={typographyStyle}>
                            <QrCode sx={{mr: 1}}/><b>UPI QR</b>
                        </Typography>
                    </Box>
                    <Box sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '15px',
                    }}>
                        {
                            [...Array(10).fill(1)].map((_, i) =>
                                <Box onClick={() => {
                                    setTarget('upi-qr')
                                    handleOpenAmount()
                                }} key={i}
                                     sx={{
                                         minWidth: '80px',
                                         background: '#fff',
                                         cursor: 'pointer',
                                         borderRadius: `${theme.shape.borderRadius}px`,
                                         height: '50px',
                                         position: 'relative',
                                         display: 'inline-block'
                                     }}>
                                    <Image layout="fill"
                                           style={{padding: '7px'}}
                                           objectFit="contain"
                                           src={`/img/payment/${i + 1}.png`}
                                           alt='payment-method'/>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
                <Box sx={boxStyle}>
                    <Box sx={typographyParentStyle}>
                        <Typography sx={typographyStyle}>
                            <Payment sx={{mr: 1}}/><b>UPI Collect</b>
                        </Typography>
                    </Box>
                    {
                        [...Array(1).fill(1)].map((_, i) =>
                            <Box onClick={() => {
                                setTarget('upi-collect')
                                handleOpenAmount()
                            }} key={i}
                                 sx={{
                                     minWidth: '80px',
                                     background: '#fff',
                                     cursor: 'pointer',
                                     borderRadius: `${theme.shape.borderRadius}px`,
                                     height: '50px',
                                     position: 'relative',
                                     display: 'inline-block'
                                 }}>
                                <Image layout="fill"
                                       style={{padding: '7px'}}
                                       objectFit="contain"
                                       src={`/img/payment/3.png`}
                                       alt='payment-method'/>
                            </Box>
                        )
                    }
                </Box>
                <Box sx={boxStyle}>
                    <Box sx={typographyParentStyle}>
                        <Typography sx={typographyStyle}>
                            <CreditCard sx={{mr: 1}}/> <b>Debit Card</b>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '15px',
                        }}
                    >
                        {
                            [...Array(3).fill(1)].map((_, i) =>
                                <Box onClick={() => {
                                    setTarget('debit-card')
                                    handleOpenAmount()
                                }} sx={{cursor: 'pointer'}} key={i}
                                     style={{
                                         minWidth: '80px',
                                         height: '50px',
                                         position: 'relative',
                                         display: 'inline-block'
                                     }}>
                                    <Image layout="fill" objectFit="contain" src={`/img/depit-card/Layer ${i + 1}.png`}
                                           alt='payment-method'/>
                                </Box>
                            )
                        }
                    </Box>

                </Box>
                <Box sx={boxStyle}>
                    <Box sx={typographyParentStyle}>

                        <Typography sx={typographyStyle}>
                            <AccountBalance sx={{mr: 1}}/><b>Net Banking</b>
                        </Typography>
                    </Box>
                    {
                        [...Array(1).fill(1)].map((_, i) =>
                            <Box onClick={() => {
                                setTarget('net-banking')
                                handleOpenAmount()
                            }} key={i}
                                 sx={{
                                     minWidth: '80px',
                                     background: '#fff',
                                     cursor: 'pointer',
                                     borderRadius: `${theme.shape.borderRadius}px`,
                                     height: '50px',
                                     position: 'relative',
                                     display: 'inline-block'
                                 }}>
                                <Image layout="fill"
                                       style={{padding: '7px'}}
                                       objectFit="contain"
                                       src={`/img/net-banking/${i + 1}.png`}
                                       alt='payment-method'/>
                            </Box>
                        )
                    }
                </Box>
                <Box sx={boxStyle}>
                    <Box sx={typographyParentStyle}>
                        <Typography sx={typographyStyle}>
                            <CurrencyBitcoin sx={{mr: 1}}/><b>Crypto</b>
                        </Typography>
                    </Box>
                    {
                        [...Array(3).fill(1)].map((_, i) =>
                            <Box
                                onClick={() => {
                                    setTarget('crypto')
                                    setCryptoType(i === 0 ? 'TRC' :
                                        i === 1 ? 'USDT' :
                                            i === 2 ? 'ERC' : ''
                                    )
                                    handleOpenAmount()
                                }}
                                key={i}
                                sx={{
                                    minWidth: '80px',
                                    background: '#fff',
                                    cursor: 'pointer',
                                    borderRadius: `${theme.shape.borderRadius}px`,
                                    height: '50px',
                                    mr: 2,
                                    position: 'relative',
                                    display: 'inline-block'
                                }}>
                                <Image layout="fill"
                                       style={{padding: '7px'}}
                                       objectFit="contain"
                                       src={`/img/crypto/${i + 1}.png`}
                                       alt='payment-method'/>
                            </Box>
                        )
                    }
                </Box>
            </Box>

            <Dialog
                fullScreen={fullScreen}
                open={openUpiQr}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <UpiQr/>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openUpiCollect}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <UpiCollect/>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openDebitCard}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <DebitCard/>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openNetBanking}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <NetBanking/>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openCrypto}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <Crypto cryptoType={cryptoType}/>
            </Dialog>

            <Dialog
                fullScreen={fullScreen}
                open={openAmount}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <Box component='form' onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    setAmountValue(typeof a === 'string' ? parseInt(a) : a)
                    handleOpenDialog()
                }} sx={{px: 4, py: 4, minWidth: '300px'}}>
                    <Typography variant="h5">Amount</Typography>
                    <TextField sx={{my: 3}} placeholder='amount' type='number'
                               onChange={(event) => setA(event.target.value)}/>
                    <Box sx={{color: 'var(--primary)'}}>
                        <Button
                            sx={{textTransform: 'capitalize', px: 5}}
                            color='success'
                            type='submit'
                            variant='contained'>Pay</Button>
                    </Box>
                </Box>
            </Dialog>
        </Layout2>
    )
}
