import { Box } from '@mui/material'
import { FormHome } from './FormHome'
export const MainHome = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'
                }}
            >
                <FormHome />
            </Box>
        </>
    )
}
