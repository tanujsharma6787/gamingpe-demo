import Typography from "@mui/material/Typography";
import {isMobile} from "@/utils/functions/global";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {setBalance} from "@/store/auth/authSlice";

type LayoutProps = {
    children: React.ReactNode;
};
const HomeLayout = ({children}: LayoutProps): JSX.Element => {
    const balance = useSelector((state: RootState) => state.auth.balance);

    const dispatch = useDispatch()
    const resetBalance = () => {
        dispatch(setBalance(0))
    }

    return (
        <main style={{backgroundColor: 'var(--primary)', backgroundImage: `url('bg.png')`, backgroundSize: 'cover'}}
              className="flex min-h-screen text-white flex-col place-content-center items-center">
            <Typography variant='h6' sx={{position: 'fixed', top: '30px', right: '30px'}}>
                <span onClick={resetBalance}>Balance</span>: {((balance || 0).toFixed(1)).toLocaleString()}
            </Typography>
            <h1 className="font-extrabold indigo-500 place-self-center"
                style={{fontSize: isMobile ? '40px' : '80px',}}>
                <Image
                    width={315}
                    height={198}
                    src="logo.png"
                    alt='gamepe logo'/>
            </h1>
            {children}
        </main>);
};

export default HomeLayout;
