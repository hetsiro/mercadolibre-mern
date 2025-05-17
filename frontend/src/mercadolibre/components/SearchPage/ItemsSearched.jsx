import { Box, ButtonBase, Divider, Grid, Rating, Typography } from '@mui/material'
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { normalizeCategory } from '../../helpers/normalizeCategory';

export const ItemsSearched = () => {

    const { itemsSearched } = useSelector((state) => state.mercadolibre)
    const navigate = useNavigate();

    const handleShowItem = (product) => {
        navigate(`/item/${product.id}`);
    }

    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            {itemsSearched.map((product) => {
                return (
                    <Fragment
                        key={product.id}
                    >
                        <Divider
                            sx={{ width: '100%' }}
                        />
                        <ButtonBase
                            sx={{ paddingY: 4 }}
                            onClick={() => handleShowItem(product)}
                        >
                            <Grid
                                container
                                component='ul'
                                alignItems='center'
                                spacing={2}
                                sx={{ width: '100%' }}
                            >
                                <Grid
                                    size={5}
                                >
                                    <Box
                                        component='img'
                                        src={product.thumbnail}
                                        alt={product.title}
                                        sx={{
                                            maxWidth: '300px',
                                            width: '100%',
                                            backgroundColor: 'secondary.ultraLight',
                                            borderRadius: 5,
                                            p: 1
                                        }}
                                    >
                                    </Box>
                                </Grid>
                                <Grid
                                    component='li'
                                    size={7}
                                    display='flex'
                                    justifyContent='flex-start'
                                    textAlign='start'
                                    flexDirection='column'
                                    gap={2}
                                >
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        gap={1}
                                    >
                                        <Typography variant='h6' fontWeight={700}>{product.title}</Typography>
                                        <Box
                                            component='li'
                                            sx={{
                                                backgroundColor: 'primary.light',
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 2,
                                                width: 'fit-content'
                                            }}>
                                            <Typography
                                                variant="caption"
                                                fontWeight={500}
                                                sx={{
                                                    width: 'auto'
                                                }}
                                            >{normalizeCategory(product.category)}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,       // máximo 3 líneas
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }} variant='body1' textAlign='justify' >{product.description}</Typography>

                                    </Box>
                                    <Box
                                        display='flex'
                                        flexDirection='row'
                                        justifyContent='flex-start'
                                        alignItems='center'
                                        gap={2}
                                    >
                                        <Typography variant='h6' fontWeight={700}>{product.price}$</Typography>
                                        <Rating name="read-only" value={product.rating} precision={0.5} readOnly />
                                    </Box>
                                </Grid>
                            </Grid>
                        </ButtonBase>
                    </Fragment>
                )
            })}
        </Box>
    )
}
