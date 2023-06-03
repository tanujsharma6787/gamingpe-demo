import Typography from "@mui/material/Typography";
import {isMobile} from "@/utils/functions/global";
import Image from "next/image";

type LayoutProps = {
    children: React.ReactNode;
};
const HomeLayout = ({children}: LayoutProps): JSX.Element => {

    return (
        <main className="flex min-h-screen text-white bg-blue-400 flex-col place-content-center items-center">
            <Typography variant='h6' sx={{position: 'fixed', top: '30px', right: '30px'}}>
                Balance: 0.0
            </Typography>
            <h1 className="font-extrabold indigo-500 place-self-center"
                style={{fontSize: isMobile ? '40px' : '80px',}}>
                <Image
                    width={315}
                    height={198}
                    src='https://gamingpe.com/wp-content/uploads/2023/02/cropped-new-logo-FINAL-1.png'
                    alt='gamepe logo'/>
            </h1>
            {children}
        </main>);
};

export default HomeLayout;
