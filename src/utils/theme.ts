import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    shape: {
        borderRadius: 12,
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: 'rgb(49, 138, 236)',
            dark: '#2e91ff',
            contrastText: '#fff',
        },
        error: {
            light: 'rgba(255,86,119,0.55)',
            main: 'rgb(255, 86, 119)',
            // main: '#B83B5E',
            dark: '#c62828',
            contrastText: '#fff',
        },
        success: {
            light: '#4caf50',
            main: 'rgb(56, 201, 121)',
            dark: '#1b5e20',
            contrastText: '#fff',
        },
        warning: {
            light: '#ff9800',
            main: 'rgb(255, 190, 81)',
            dark: '#e65100',
            contrastText: '#fff',
        },
    },
});