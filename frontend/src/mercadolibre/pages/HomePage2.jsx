import { Box } from '@mui/material'
import { FormHome } from '../components/HomePage/FormHome'

export const HomePage2 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',



                background: 'linear-gradient( 200deg, #70d6ff, #8ecae6, #ffc8dd, #ff70a6)',
                // backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))',
                // backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(/home.jpg)',
                margin: 0,
                padding: 0,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}

        >
            <Box
                sx={{
                    width: { xs: '95%', md: '60%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                
                <FormHome />
            </Box>
        </Box>
    )
}
