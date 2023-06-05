import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {AccountBalance, CreditCard, Payment, QrCode} from "@mui/icons-material";
import Layout2 from "@/components/layouts/Layout2";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import UpiQr from "@/components/deposit/upi-qr";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {setAmount} from "@/store/auth/authSlice";
import CustomizedDialogs from "@/components/deposit/amount-dialog";


const boxStyle = {
    // backgroundColor: '#ef5520',
    backgroundColor: '#222831',
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

type IDialogs = 'upi-qr' | 'upi-collect' | 'debit-card' | 'net-banking'

export default function Home() {
    const [openUpiQr, setOpenUpiQr] = useState(false);
    const [openUpiCollect, setOpenUpiCollect] = useState(false);
    const [openAmount, setOpenAmount] = useState(false);
    const [openDebitCard, setOpenDebitCard] = useState(false);
    const [openNetBanking, setOpenNetBanking] = useState(false);
    const [target, setTarget] = useState<'' | IDialogs>('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch()

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
    };
    const handleOpenAmount = () => {
        setOpenAmount(true)
    };
    const handleCloseDialog = () => {
        setOpenUpiQr(false);
        setOpenUpiCollect(false);
        setOpenDebitCard(false);
        setOpenNetBanking(false);
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
                                    setTarget('upi-qr')
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
                                       src={`/img/net-banking/${i + 1}.png`}
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
                open={openAmount}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <CustomizedDialogs />
            </Dialog>
        </Layout2>
    )
}
