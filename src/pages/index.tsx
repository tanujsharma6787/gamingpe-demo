import {Inter} from 'next/font/google'
import {isMobile} from "@/utils/functions/global";
import Box from "@mui/material/Box";
import {Button, Link} from "@mui/material";
import Image from "next/image";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="flex min-h-screen bg-blue-400 flex-col place-content-center items-center">
            <h1 className="font-extrabold indigo-500 place-self-center"
                style={{fontSize: isMobile ? '40px' : '80px',}}>
                <Image
                    width={315}
                    height={198}
                    src='https://gamingpe.com/wp-content/uploads/2023/02/cropped-new-logo-FINAL-1.png'
                    alt='gamepe logo'/>
            </h1>
            <Box sx={{display: 'flex'}}>
                <Link href="https://example.com" underline="none">
                    <Button variant='contained'
                            sx={{textTransform: 'capetalize', mx: 2, my: 4, px: 7, py: 2, fontSize: '20px'}}
                            color='success'
                            size='large'>Deposit</Button>
                </Link>
                <Link href="https://example.com" underline="none">
                    <Button variant='contained'
                            sx={{textTransform: 'capetalize', mx: 2, my: 4, px: 7, py: 2, fontSize: '20px'}}
                            color='success'
                            size='large'>Payout</Button>
                </Link>
            </Box>
        </main>
    )
}
