"use client";
import { Box, Card, CardContent, Grid, Typography, styled } from "@mui/material";
import { Navigation, Pagination } from 'swiper/modules';
import Quotations from "../../../assets/quotations.png"
import Rating from '@mui/material/Rating';
import Testimonial1 from "../../../assets/testimonial1.png"
import Testimonial2 from "../../../assets/testimonial2.png"
import Testimonial3 from "../../../assets/testimonial3.png"
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/modules/navigation.scss'; // Navigation module
import 'swiper/css';
import Image from "next/image";
import { gradientStyle } from "@/app/styles";

const sliderData = [
    {
        id: 1,
        description: "any individuals have eaten in this kitchen and have proceeded to lead typical, solid lives. The route to a man’s heart is through his stomach.",
        name: "John De Marli",
        image: Testimonial1
    },
    {
        id: 2,
        description: "Why truly, I’ve found the JOY of cooking. It’s the point at which my better half does it. There is no sincerer love than the adoration for sustenance.",
        name: "Robin Ayala Doe",
        image: Testimonial2
    },
    {
        id: 3,
        description: "You don’t need to cook extravagant or muddled perfect works of art, simply great sustenance from new fixings.",
        name: "Rowhan Smith",
        image: Testimonial3
    },
    {
        id: 4,
        description: "Why truly, I’ve found the JOY of cooking. It’s the point at which my better half does it. There is no sincerer love than the adoration for sustenance.",
        name: "Robin Ayala Doe",
        image: Testimonial2
    },
];

// const CustumeSplide = styled(Splide)`
//   padding: 40px 0px;
//   .splide__arrow {
//     display: none;
//   }
//   .splide__arrow--bottom {
//     display: block;
//   }
//   .splide__pagination {
//     position: absolute;
//     bottom: 10px; /* Adjust the position as needed */
//     left: 50%;
//     transform: translateX(-50%);
//     display: flex;
//     gap: 8px;
//   }
//   .splide__pagination__page {
//     width: 10px;
//     height: 10px;
//     background: #fff; /* Change the background color as needed */
//     border-radius: 50%;
//     cursor: pointer;
//     transition: background 0.3s ease;
//   }
//   .splide__pagination__page.splide__pagination__page--active {
//     background: #333; /* Change the active background color as needed */
//   }
// `;


const Testimonials = () => {
    return (
        <Box sx={{ padding: { xs: "50px 20px", md: "80px 120px" } }}>
            <Typography variant="h2" textAlign="center">
                What Our <span style={gradientStyle}>Customers Say</span>
            </Typography>
            <Box textAlign="center" display={"flex"} justifyContent={"center"} marginBottom="80px" marginTop="15px">
                <Typography variant="body1" maxWidth="450px">
                    Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre
                </Typography>
            </Box>
            <Swiper
                spaceBetween={50}
                // slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    }
                }}
                className="primary-swiper"
            >
                {sliderData.map((item: any, index: number) => (
                    <SwiperSlide key={item.id} style={{ overflow: "visible" }}>
                        {({ isActive, isNext }) => (
                            <Box borderRadius={"24px"} padding={"35px"} textAlign={"center"} position={"relative"} sx={{ boxShadow: isNext ? "0px 25px 120px -30px rgba(0, 0, 0, 0.12)" : "none" }}>
                                <Box sx={{ marginTop: "-62px", marginBottom: "20px" }}>
                                    <Image src={item.image} alt={item.name} />
                                </Box>
                                <Rating name="read-only" value={5} readOnly sx={{ color: "#26ACE2" }} />
                                <Typography sx={{ fontSize: "20px", fontWeight: 700, marginBottom: "15px" }}>
                                    John De Marli {index}
                                </Typography>
                                <Typography variant="body1">
                                    any individuals have eaten in this kitchen and have proceeded to lead typical, solid lives. The route to a man’s heart is through his stomach.
                                </Typography>
                                <Box position={"absolute"} top={30} left={20}>
                                    <Image src={Quotations} alt="quotations" />
                                </Box>
                            </Box>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Testimonials;
