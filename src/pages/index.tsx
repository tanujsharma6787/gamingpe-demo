import {Inter} from 'next/font/google'
import Box from "@mui/material/Box";
import {Button, Link} from "@mui/material";
import HomeLayout from "@/components/layouts/HomeLayout";
import {DEPOSIT_ROUTE} from "@/utils/endpoints/routes";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const btnStyle = {textTransform: 'capitalize', mx: 2, mt: 6, px: 7, py: 2, fontSize: '20px'}
    return (
        <HomeLayout>
            <Box sx={{display: 'flex'}}>
                <Link href={DEPOSIT_ROUTE} underline="none">
                    <Button variant='contained'
                            sx={btnStyle}
                            color='success'
                            size='large'>Deposit</Button>
                </Link>
                <Link href="#" underline="none">
                    <Button variant='contained'
                            sx={btnStyle}
                            color='success'
                            disabled={true}
                            size='large'>Payout</Button>
                </Link>
            </Box>
        </HomeLayout>
    )
}
