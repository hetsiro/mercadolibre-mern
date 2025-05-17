import { Box, ButtonBase, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startSearchingProducts } from "../../../store/mercadolibre/thunks"
import { useNavigate } from "react-router"

export const Results = () => {

    const { categories, search, page, totalProducts } = useSelector((state) => state.mercadolibre)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSelected, setIsSelected] = useState(null);

    const handleFilterCategory = (category) => {

        setIsSelected((isSelected) => {
            const newValue = isSelected === category ? null : category;
            if (newValue === category) {
                dispatch(startSearchingProducts(search, 1, category));
                const mappedCategory = category.split(' ').join('-').toLowerCase();
                navigate(`/search/?q=${search}&page=1&category=${mappedCategory}`);
            } else {
                dispatch(startSearchingProducts(search, page));
                navigate(`/search/?q=${search}&page=${page}`);
            }
            return newValue;
        });
    }

    return (
        <>
            <Box component='ul' display='flex' flexDirection='column' gap={0}>
                <Typography component='li' fontSize={20} variant='body1'><strong>{totalProducts}</strong> Resultados de <strong>{search}</strong></Typography>
            </Box>

            {categories.length !== 0 &&
                <Box
                    component='ul'
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent:' center',
                        gap: 2,
                        listStyle: 'none',
                    }}>
                    {
                        categories.map((category) => (
                            <ButtonBase key={category.title}>
                                <Box
                                    onClick={() => handleFilterCategory(category.title)}
                                    component='li'
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        bgcolor: isSelected === category.title ? 'secondary.light' : 'primary.light',
                                        px: 2,
                                        py: 1,
                                        borderRadius: 2,
                                    }}>
                                    <Typography variant="body2" fontWeight={500} sx={{
                                    }}>{category.title}</Typography>
                                    <Typography variant="body2" fontWeight={500} sx={{
                                    }}>{category.count}</Typography>
                                </Box>
                            </ButtonBase>
                        ))
                    }
                </Box>
            }
        </>
    )
}
