import { Button } from "@mui/material"

export const ButtonItem = () => {
    return (
        <Button
            variant='contained'
            color="secondary"
            size="large"
            sx={{
                fontWeight: 900,
                color: 'white'
            }}>Añadir al carrito
        </Button>
    )
}
