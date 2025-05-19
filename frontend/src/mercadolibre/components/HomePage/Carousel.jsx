import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { startSearchingProducts } from "../../../store/mercadolibre/thunks";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from 'react-router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Carousel = () => {

    const sliderRef = useRef();

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    };

    const dispatch = useDispatch();
    const { itemsSearched } = useSelector((state) => state.mercadolibre);
    const navigate = useNavigate();
    const handleNavigateToProduct = (item) => {
        navigate(`/item/${item}`)
    }

    useEffect(() => {
        dispatch(startSearchingProducts('apple'));
    }, [])

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                borderRadius: 5,
                width: '100%',
                backgroundColor: 'white',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
                gap: 2,
                p: 6,
                margin: 'auto 0'
            }}
        >
            <Typography variant="h4" fontWeight={500} >
                Más vendidos
            </Typography>
            {itemsSearched.length > 0 &&
                <Box
                    sx={{
                        width: '100%',
                        // maxWidth: '1024px',
                    }}
                >
                    <Slider {...settings} ref={sliderRef}>
                        {itemsSearched.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    display: 'flex',
                                    height: '100%',
                                    py: 1,
                                }}
                            >
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.5)',
                                        p: 2,
                                        gap: 2
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={item.thumbnail}
                                        alt={item.title}
                                        sx={{
                                            maxWidth: '300px',
                                            backgroundColor: 'primary.ultraLight',
                                            borderRadius: 5,
                                        }}
                                    />
                                    <CardContent
                                        sx={{
                                            maxWidth: '300px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '100%',
                                            gap: 2,
                                            p: 0
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: '1rem',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,       // máximo 3 líneas
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}>
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: '1rem',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3,       // máximo 3 líneas
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}>
                                            {item.description}
                                        </Typography>
                                        <Button
                                            onClick={() => handleNavigateToProduct(item.id)}
                                            variant="contained"
                                            sx={{
                                                fontWeight: 700,
                                                color: 'white'
                                            }}
                                        >
                                            Ver producto
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            }
        </Box>
    );
}