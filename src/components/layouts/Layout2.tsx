import Typography from "@mui/material/Typography";
import Image from "next/image";
import Box from "@mui/material/Box";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {useEffect} from "react";
import {setBalance} from "@/store/auth/authSlice";

type LayoutProps = {
    children: React.ReactNode;
};
const Layout2 = ({children}: LayoutProps): JSX.Element => {
    const balance = useSelector((state: RootState) => state.auth.balance);

    const router = useRouter()
    return (
        <main className="flex min-h-screen text-white flex-col place-content-center items-center">
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'fixed',
                padding: '30px 50px 30px 50px',
                backgroundColor: 'var(--primary)',
                zIndex: 9,
                borderBottom: '1px solid #ffffff36',
                top: 0,
                right: 0,
                left: 0
            }}>
                <Image
                    width={105}
                    onClick={() => goToHome()}
                    height={66}
                    src='https://gamingpe.com/wp-content/uploads/2023/02/cropped-new-logo-FINAL-1.png'
                    alt='gamepe logo'/>
                <Typography variant='h6' sx={{alignSelf: 'center'}}>
                    Balance: {((balance || 0).toFixed(1)).toLocaleString()}
                </Typography>
            </Box>
            {children}
        </main>);
};

export default Layout2;
