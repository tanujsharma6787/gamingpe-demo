import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {AccountBalance, CreditCard, Payment, QrCode} from "@mui/icons-material";
import Layout2 from "@/components/layouts/Layout2";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import UpiQr from "@/components/deposit/upi-qr";
import Image from "next/image";
import * as React from "react";
import {UpiCollect} from "@/components/deposit/upi-collect";

const boxStyle = {
    backgroundColor: '#ef5520',
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
export default function Home() {
    // const btnStyle = {width: '300px', textTransform: 'capitalize', mx: 2, my: 2, px: 7, py: 2, mt: 6, fontSize: '20px'}
    const [expanded, setExpanded] = useState<string | false>('panel1');
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                                <Box onClick={handleClickOpen} key={i}
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
                    <Button color='primary' variant='contained'>
                        <Image
                            width={52.5}
                            height={33}
                            src='https://gamingpe.com/wp-content/uploads/2023/02/cropped-new-logo-FINAL-1.png'
                            alt='gamepe logo'/>
                    </Button>
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
                                <Box onClick={handleClickOpen} sx={{cursor: 'pointer'}} key={i}
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
                            <Box onClick={handleClickOpen} sx={{cursor: 'pointer'}} key={i}
                                 style={{
                                     minWidth: '100px',
                                     margin: '0 4px',
                                     height: '50px',
                                     position: 'relative',
                                     display: 'inline-block'
                                 }}>
                                <Image layout="fill" objectFit="contain" src={`/img/net-banking/${i + 1}.png`}
                                       alt='payment-method'/>
                            </Box>
                        )
                    }
                </Box>
            </Box>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <UpiQr/>
            </Dialog>
            <UpiCollect />
        </Layout2>
    )
}
