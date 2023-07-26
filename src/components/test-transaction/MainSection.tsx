import {ITransaction} from "@/utils/interfaces/transaction.interface";
import awesomeAlert from "@/utils/functions/alert";
import * as React from "react";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import {asset, PriceFormatter} from "@/utils/functions/global";
import {Menu, Modal} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {PaymentMethodsImages} from "@/components/test-transaction/PaymentMethodsImages";
import {CopyAll} from "@mui/icons-material";
import {SecurePaymentImages} from "@/components/test-transaction/SecurePaymentImages";
import {LoadingButton} from "@mui/lab";
import {HowTo} from "@/components/test-transaction/howTo";
import QRCode from "qrcode.react";
import moment from "moment";
import {langEn, langTamil, langTelgu} from "@/utils/translation/lang";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    maxHeight: '90%',
    boxShadow: 24,
    overflowY: 'auto',
    p: 4,
};

type MainSectionProps = {
    transaction: ITransaction,
    onSubmit: any,
    loading: boolean
}

export const MainSection = ({transaction, onSubmit, loading}: MainSectionProps) => {
    const $t = (text: string) => {
        if (lang === 'தா') return (langTamil[text])
        else if (lang === 'తెలుగు') return (langTelgu[text])
        else return (langEn[text])
    }

    function downloadQRCode() {
        // @ts-ignore
        const {toDataURL} = document.querySelector('canvas');
        const dataURL = toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const [remainingTime, setRemainingTime] = useState(0);

    function copyToClipboard(val: string) {
        navigator.clipboard.writeText(val);
        awesomeAlert({msg: 'UPI Copied'});
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const [lang, setLang] = React.useState('En');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openLang = Boolean(anchorEl);
    const upiId = transaction?.setting?.active_upi_id
    const qrCodeUrl = transaction?.bank_account?.qrcode_url
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang?: string) => {
        setAnchorEl(null);
        setLang(lang || '')
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const createdAt = moment();
            const fiveMinutesAgo = moment().subtract(5, 'minutes');
            const diffInSeconds = fiveMinutesAgo.diff(createdAt, 'seconds');
            setRemainingTime(Math.max(0, -diffInSeconds));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    return <Box className='payment'>
        <Box id="payment-form" component="form" method="post" onSubmit={onSubmit}>
            <div className="container">
                <div className="nav text-primary">
                    <div style={{fontSize: '20px'}}>{$t('Payment Data')}</div>
                    <div className="dropdown ms-auto">
                        <button className="" type="button" id="lang-dropdown" onClick={handleClick}
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>{lang} </span>
                            <Image style={{display: 'inline-block', marginRight: '5px'}} width={20} height={20}
                                   src={asset('icons/iconmonstr-globe-6.svg')} alt='time-icon'/>
                            <span id="lang_text2">{$t(anchorEl || 'En')}</span>
                        </button>

                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={openLang}
                            onClose={() => handleClose(lang)}
                            anchorOrigin={{vertical: 'top', horizontal: 'left',}}
                            transformOrigin={{vertical: 'top', horizontal: 'left',}}
                        >
                            <MenuItem id="english2" onClick={() => handleClose('En')}>En</MenuItem>
                            <MenuItem id="tamil2" onClick={() => handleClose('தா')}>தா</MenuItem>
                            <MenuItem id="telgu2" onClick={() => handleClose('తెలుగు')}>తెలుగు</MenuItem>
                        </Menu>
                    </div>

                </div>
            </div>
            <div className="container pb-5">
                <div className="main-row mx-auto pt-7">
                    <Box sx={{
                        color: '#FFF',
                        backgroundImage: `url(${asset('img/price-bg.svg')})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        padding: '24px 20px',
                        margin: '0 auto',
                        width: '346px',
                        height: '202px'
                    }}>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-between',
                        }}>
                            <h2 className="text-center">
                                <span className='f-16'>{$t('Amount')} </span>
                                <span className='font-bold f-24'> {PriceFormatter(transaction?.amount)} ₹</span>
                            </h2>
                            <div className='f-16'>
                                {$t('Timer')} {`${Math.floor(remainingTime / 60)}:${(remainingTime % 60).toString().padStart(2, '0')}`}
                            </div>
                        </Box>
                        <Box className="payment-method my-4">
                            <PaymentMethodsImages transaction={transaction}/>
                        </Box>
                        <Box className="f-20 text-center font-bold copy-upi d-flex justify-content-center my-4 gap-2">
                            <CopyAll sx={{mr: 2}} onClick={() => copyToClipboard(upiId)}/>
                            <Box
                                style={{
                                    display: 'inline-block', wordBreak: 'break-word', fontSize: 'medium',
                                }}
                                className="f-16"
                                id="opportunity_bank">{upiId}</Box>
                            {/*<p className="f-16">Ref. #{transaction?._id}</p>*/}
                        </Box>
                    </Box>
                    <div className="qrcode-container">
                        <p className="translateText f-20"
                           style={{marginTop: '25px'}}>{$t("Scan QR Code To Pay")}</p>
                        <div className="qrcode">
                            {qrCodeUrl ? <Box sx={{pt: 2, mx: 'auto', display: 'inline-block'}}>
                                <QRCode size={200} value={`${qrCodeUrl}`}/>
                            </Box> : $t('Image Is Missing')}
                        </div>
                        <div className="dont-use-text mt-1">
                            <span className="translateText f-10">
                                {$t("Don't use the same QR code to pay multiple times")}
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="utr-input">
                            <div id="handler" className="padd-tp Confirm">
                                <div className="inputUTR">
                                    <span id="error"></span>
                                    <input id="utr" name="utr" type="number" style={{width: '100%', margin: '15px 0'}}
                                           placeholder={$t("Enter 12 Digit UTR Number")}
                                           pattern="/^-?\d+\.?\d*$/"/>
                                    <input type="hidden" name="id" id="id" value={transaction?._id}/>
                                </div>
                            </div>
                            <div className="inline-block mx-auto text-left pl-1">
                                <p className="translateText text-left m-0 pt-1 f-10">{$t("Please Check your payment application for UTR number")}</p>
                                <div className="m-0 pt-1 text-left f-10">
                                    <span className="translateText">{$t("How to find the UTR number ?")} </span>
                                    <a className="" data-toggle="modal"
                                       data-target="#exampleModalLong"
                                       onClick={handleOpen}
                                       style={{color: 'var(--text-color)'}}>
                                        <u className="translateText">{$t("Click Here")}</u>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <LoadingButton type="submit" variant='contained' color='inherit'
                                               loading={loading}
                                               sx={{
                                                   my: 2,
                                                   background: '#376BF5',
                                                   color: 'white',
                                                   width: '200px',
                                               }}>
                                    {$t("Submit")}
                                </LoadingButton>
                            </div>
                        </div>
                        <div className="payment-process mx-auto mt-4 text-white" style={{
                            maxWidth: '346px',
                            background: '#376BF5',
                            borderRadius: '20px',
                            padding: '17px 20px',
                        }}>
                            <div>
                                <h3 className="translateText f-16 font-weight-bold">{$t("Payment Process:")}</h3>
                            </div>
                            <div className="mt-2">
                                <span className="img">
                                    <Image width={30} height={30} alt="qr-scan"
                                           src={asset('icons/iconmonstr-qr-code-9.svg')}
                                           style={{verticalAlign: 'bottom'}}/>
                                </span>
                                <span className="f-14 translateText">{$t("Scan QR Code or copy UPI Id")}</span>
                            </div>
                            <div className="mt-2">
                                <div className="img">
                                    <Image width={30} height={30} alt="card-icon"
                                           src={asset('icons/money-check-dollar-solid.svg')}/>
                                </div>
                                <div className="f-14">
                                    <span
                                        className="translateText">{$t("After paying from your payment apps: PayTM,PhonePE, GooglePay,BHIM,etc.")}</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="img">
                                    <Image width={21} height={28} alt="card-icon" src={asset('icons/receipt-solid.svg')}
                                           style={{verticalAlign: 'bottom', margin: '0 auto'}}/>
                                </div>
                                <div className="f-14 translateText">{$t("Submit the correct UTR code")}</div>
                            </div>
                        </div>
                        <div className="secure-list mt-6 text-center">
                            <div className="flex">
                                <SecurePaymentImages/>
                            </div>
                            <h6 className="translateText f-14 mt-2">{$t("100% Secure Payments")}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <HowTo/>
                </Box>
            </Modal>

        </Box>
    </Box>
}
