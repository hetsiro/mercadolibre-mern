import { Box } from "@mui/material"

export const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#f7f9fb'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 64px)',
                    margin: '0 auto',
                    width: '95%',
                    maxWidth: '1280px'
                }}
            >
                {children}
            </Box>
        </Box>
    )
}
