import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type LayoutProps = {
    children: React.ReactNode;
};
const HomeLayout = ({children}: LayoutProps): JSX.Element => {

    return (
        <div className="bg-blue-400">
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h1'>GaminGPE</Typography>
                <Typography variant='body1'>Balance: 0.0</Typography>
            </Box>
            {children}
        </div>
    );
};

export default HomeLayout;
