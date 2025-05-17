import { Button } from "@mui/material"

export const ButtonItem = () => {
    return (
        <Button
            variant='contained'
            sx={{
                width: '100%',
                maxWidth: 600,
                height: '80px',
                borderRadius: 10,
                my: 6,
                fontSize: 28,
                fontWeight: 900,
                color: 'purple'
            }}>Añadir al carrito
        </Button>
    )
}
