import { alpha, createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#edb1ff',
            light: alpha('#edb1ff',0.5)
        },
        secondary: {
            main: '#004dff',
            light: '#5BC0EB',
            ultraLight: alpha('#5BC0EB',0.5)
        }
    }
});
