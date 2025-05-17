import { Box, CircularProgress, Modal } from "@mui/material"
import { useSelector } from "react-redux"

export const Loading = () => {

  const { isLoading } = useSelector(( state ) => state.mercadolibre);

  return (
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
          // background: 'linear-gradient( 160deg, #8ecae6 , #219ebc)',
        }}
      >
        <CircularProgress size={100} thickness={3} sx={{ color: "#FFFFFF" }} />
      </Box>
    </Modal>
  )
}
