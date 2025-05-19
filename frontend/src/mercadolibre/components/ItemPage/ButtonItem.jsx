import { Button } from "@mui/material"

export const ButtonItem = () => {
    return (
        <Button
            variant='contained'
            color="secondary"
            sx={{
                width: '100%',
                // maxWidth: 600,
                height: '80px',
                borderRadius: 10,
                // my: 6,
                fontSize: 28,
                fontWeight: 900,
                color: 'white'
            }}>Añadir al carrito
        </Button>
    )
}
