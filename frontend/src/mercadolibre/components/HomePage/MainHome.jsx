
import { Box, Typography } from "@mui/material";
import { FormHome } from "./FormHome";


export const MainHome = () => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
            margin='0 auto'
        >
            <Box
                component="main"
                display='flex'
                flexDirection='column'
                gap={2}
                width='80%'
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    component="img"
                    src="van.png"
                    alt="van-mercadolibre"
                    sx={{
                        width: { xs: '80%', md: '60%' },
                        maxWidth: '512px',
                        height: 'auto',
                    }}
                ></Box>

                <Typography variant="h3" sx={{
                    fontSize: { xs: '3rem', md: '4rem' }
                }} fontWeight={700} color="purple">
                    MercadoLibre
                </Typography>
                
                <FormHome />
            </Box>
        </Box>
    )
}
