import { Box, CircularProgress, LinearProgress, Modal, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const Loading = () => {

  const { isLoading, firstLoading } = useSelector((state) => state.mercadolibre);

  return (
    <>
      {!firstLoading
        ?
        <Modal
          open={isLoading}
          onClose={!isLoading}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <CircularProgress size={100} thickness={3} sx={{ color: "#FFFFFF" }} />
          </Box>
        </Modal>
        :
        <Modal
          open={firstLoading}
          onClose={!firstLoading}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              backgroundColor: 'white',
              gap: 4
            }}
          >
            <Typography
              variant="h4"
              color="primary"
              fontWeight={500}
              sx={{
                fontSize: { xs: 25, sm: 35, md: 45 }
              }}>MercadoLibre</Typography>
            <LinearProgress color="primary" sx={{ width: '60%' }} />
          </Box>
        </Modal>
      }
    </>
  )
}
