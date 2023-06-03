import Typography from "@mui/material/Typography";
import {isMobile} from "@/utils/functions/global";
import Image from "next/image";
import Box from "@mui/material/Box";

type LayoutProps = {
    children: React.ReactNode;
};
const Layout2 = ({children}: LayoutProps): JSX.Element => {

    return (
        <main className="flex min-h-screen text-white bg-blue-400 flex-col place-content-center items-center">
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'fixed',
                top: '30px',
                right: '50px',
                left: '50px'
            }}>
                <Image
                    width={105}
                    height={66}
                    src='https://gamingpe.com/wp-content/uploads/2023/02/cropped-new-logo-FINAL-1.png'
                    alt='gamepe logo'/>
                <Typography variant='h6'>
                    Balance: 0.0
                </Typography>
            </Box>
            {children}
        </main>);
};

export default Layout2;
