import { Search } from "@mui/icons-material"
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { startSearchingProducts } from "../../../../store/mercadolibre/thunks"

export const Header = () => {

    const { search } = useSelector((state) => state.mercadolibre)
    const dispatch = useDispatch();
    const inputRef = useRef();
    const navigate = useNavigate();

    const [input, setInput] = useState(search);

    useEffect(() => {
        setInput(search);
    }, [search])

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(startSearchingProducts(input));
        navigate(`/search?q=${input}`);
    }

    const handleNavigateToHome = () => {
        navigate('/');
    }

    return (
        <Box component='header' width='100%' py={3}>
            <FormControl
                onSubmit={handleSubmit}
                width='100%'
                component='form'
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    width: '100%',
                }}
            >
                <IconButton onClick={handleNavigateToHome}>
                    <Box
                        component='img'
                        src='/van.png'
                        sx={{ width: '60px' }}
                    />
                </IconButton>
                <OutlinedInput
                    inputRef={inputRef}
                    sx={{ width: '100%' }}
                    size="medium"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                    placeholder="Laptop, Apple, ..."
                    value={input}
                    onChange={handleChange}
                ></OutlinedInput>
            </FormControl>
        </Box>
    )
}
