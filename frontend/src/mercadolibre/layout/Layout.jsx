import { Box } from "@mui/material"

export const Layout = ({ children }) => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            minHeight='100vh'
            width='95%'
            margin='0 auto'
        >
            {children}
        </Box>
    )
}
