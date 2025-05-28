import { Button } from "@mui/material"
import { addToCart } from "../../../store/cart/cartSlice"
import { useDispatch } from "react-redux"

export const ButtonItem = ({item}) => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    return (
        <Button
            onClick={() => handleAddToCart(item)}
            variant='contained'
            color="secondary"
            size="large"
            sx={{
                fontWeight: 700,
                color: 'white'
            }}>Añadir al carrito
        </Button>
    )
}
