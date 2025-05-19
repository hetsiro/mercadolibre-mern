import { useRef } from "react";
import { useNavigate } from "react-router";
import { Search } from "@mui/icons-material";

import { Button, FormControl, IconButton, OutlinedInput, InputAdornment, Typography, Box } from "@mui/material";

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
                width: { xs: '80%', md: '40%' },
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
            }}
            onSubmit={handleSubmit}
        >
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                gap={2}
            >
                {/* <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '25%',
                        height: '100%',
                        backgroundColor: 'white',
                    }}
                >
                    <Box
                        component='img'
                        src='/van.png'
                        sx={{
                            width: { xs: 100, md: 200},
                            height: { xs: 100, md: 200},
                            p: { xs: 1, md: 2}
                        }}
                    />
                </Box> */}
                <Typography
                    variant="h3"
                    sx={{
                        color: "white",
                        fontWeight: 700,
                        fontSize: { xs: '3rem', md: '5rem' }
                    }}
                >
                    MercadoLibre
                </Typography>
            </Box>

            <OutlinedInput
                sx={{
                    backgroundColor: 'white',
                    fontSize: { xs: '16px', md: '22px' },
                }}
                inputRef={inputRef}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton type='submit'>
                            <Search sx={{
                                height: '100%',
                                width: '40px',
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
                    height: '60px',
                    width: '100%',
                    maxWidth: 200,
                    borderRadius: 10,
                    fontSize: 20,
                    fontWeight: 900,
                    color: 'primary.ultraLight'
                }}>
                Buscar
            </Button>
        </FormControl>
    )
}
