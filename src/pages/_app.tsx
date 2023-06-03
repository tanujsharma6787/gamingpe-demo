import '@/styles/globals.css'
import '@/styles/transaction.css'
import type {AppProps} from 'next/app'
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/utils/theme";
import {persistor, store} from "@/store";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    <ToastContainer/>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;