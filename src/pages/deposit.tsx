import Box from "@mui/material/Box";
import {Accordion, AccordionDetails, AccordionSummary, Button, Link} from "@mui/material";
import {AccountBalance, CreditCard, Payment, QrCode} from "@mui/icons-material";
import Layout2 from "@/components/layouts/Layout2";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {SyntheticEvent, useState} from "react";
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import UpiCollect from "@/pages/upi-collect";
import Image from "next/image";
import * as React from "react";

const panelStyle = {mb: 1, width: '100%'}
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

    const handleChange =
        (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Layout2>
            <Box sx={{minWidth: '80%', maxWidth: '90%', my: 20}}>
                <Accordion expanded={true} sx={panelStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>
                            <QrCode sx={{mr: 1}}/>UPI QR
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {
                                [...Array(10).fill(1)].map((_, i) =>
                                    <Box onClick={handleClickOpen} sx={{cursor: 'pointer'}} key={i}
                                         style={{
                                             minWidth: '100px',
                                             margin: '0 4px',
                                             height: '50px',
                                             position: 'relative',
                                             display: 'inline-block'
                                         }}>
                                        <Image layout="fill" objectFit="contain" src={`/img/payment/${i + 1}.png`}
                                               alt='payment-method'/>
                                    </Box>
                                )
                            }
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true} sx={panelStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            <Payment sx={{mr: 1}}/>UPI Collect
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button color='primary' variant='contained'>
                            <Image
                                width={52.5}
                                height={33}
                                src='https://gamingpe.com/wp-content/uploads/2023/02/cropped-new-logo-FINAL-1.png'
                                alt='gamepe logo'/>
                        </Button>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true} sx={panelStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            <CreditCard sx={{mr: 1}}/> Debit Card
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            [...Array(12).fill(1)].map((_, i) =>
                                <Box onClick={handleClickOpen} sx={{cursor: 'pointer'}} key={i}
                                     style={{
                                         minWidth: '100px',
                                         margin: '0 4px',
                                         height: '50px',
                                         position: 'relative',
                                         display: 'inline-block'
                                     }}>
                                    <Image layout="fill" objectFit="contain" src={`/img/depit-card/Layer ${i + 1}.png`}
                                           alt='payment-method'/>
                                </Box>
                            )
                        }
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true} sx={panelStyle}>
                    <AccordionSummary
                        expandIcon={<ExpandMore/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            <AccountBalance sx={{mr: 1}}/>Net Banking
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <UpiCollect/>
            </Dialog>
        </Layout2>
    )
}
