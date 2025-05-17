import { useRef } from "react";
import { useNavigate } from "react-router";
import { Search } from "@mui/icons-material";

import { Button, FormControl, IconButton, OutlinedInput, InputAdornment, Typography } from "@mui/material";

export const FormHome = () => {

    const navigate = useNavigate();
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const search = inputRef.current.value;
        navigate(`/search/?q=${search}`);
    }

    return (
        <FormControl
            component='form'
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                width: "100%",
            }}
            onSubmit={handleSubmit}
        >
            <Typography variant="h3" sx={{
                fontSize: { xs: '4rem', md: '7rem' }
            }} fontWeight={700} color="white">
                MercadoLibre
            </Typography>
            <OutlinedInput
                sx={{
                    backgroundColor: 'white',
                    fontSize: '28px',
                }}
                inputRef={inputRef}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton type='submit'>
                            <Search sx={{
                                height: '100%',
                                width: '50px',
                            }} />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Laptop, Apple, ..."
                fullWidth
            />
            <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: '80px',
                    borderRadius: 10,
                    fontSize: 28,
                    fontWeight: 900,
                    color: 'purple'
                }}>
                Buscar
            </Button>
        </FormControl>
    )
}
