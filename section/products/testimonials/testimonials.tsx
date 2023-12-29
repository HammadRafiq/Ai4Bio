// "use client";
// import { SplideSlide, SplideTrack, Splide } from "@splidejs/react-splide";
// import { Card, CardContent, Grid, Typography, styled } from "@mui/material";
// import React from "react";
// import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
// import "@splidejs/react-splide/css/core";

// const sliderData = [
//   {
//     id: 1,
//     title: `“Incredible Experience”`,
//     description: `"Together, we're creating a brighter future for children in foster care. Join us in reshaping the fostering landscape and making a difference, one innovative solution at a time."`,
//     name: "Usman Saeed",
//     desgination: "CEO, Foster App",
//   },
//   {
//     id: 2,
//     title: `“An Essential Part of Any Agency Operations”`,
//     description: `"This software is outstanding and very user friendly. It provides the voice of the child where their outcomes are clearly highlighted by the system tools and progress reports."`,
//     name: "Haji Younas",
//     desgination: "Chairman & Co founder",
//   },
//   {
//     id: 3,
//     title: `“An Essential Part of Any Agency Operations”`,
//     description: `"This software is outstanding and very user friendly. It provides the voice of the child where their outcomes are clearly highlighted by the system tools and progress reports."`,
//     name: "Haji Younas",
//     desgination: "Chairman & Co founder",
//   },
//   {
//     id: 4,
//     title: `“An Essential Part of Any Agency Operations”`,
//     description: `"This software is outstanding and very user friendly. It provides the voice of the child where their outcomes are clearly highlighted by the system tools and progress reports."`,
//     name: "Haji Younas",
//     desgination: "Chairman & Co founder",
//   },
// ];

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
// const Testimonials = () => {
//   return (
//     <Grid container>
//       <Grid item>
//         <CustumeSplide
//           className="my-carousel"
//           options={{
//             width: "100%",
//             gap: "2rem",
//             perPage: 3,
//           }}
//         >
//           {sliderData.map((item: any) => (
//             <SplideSlide key={item.id}>
//               <Card
//                 sx={{
//                   p: 2,
//                   mt: 1,
//                   textAlign: "center",
//                   boxShadow: 3,
//                   height: "100%",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h6">{item.title}</Typography>
//                   <Typography
//                     variant="subtitle2"
//                     sx={{
//                       color: "red",
//                       mt: 3,
//                       lineHeight: "28px",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {item.description}
//                   </Typography>
//                   <Typography
//                     variant="subtitle1"
//                     sx={{
//                       color: "red",
//                       mt: 3,
//                       fontWeight: 600,
//                     }}
//                   >
//                     {item.name}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     sx={{
//                       color: "red",
//                       lineHeight: "28px",
//                       fontWeight: 500,
//                     }}
//                   >
//                     {item.desgination}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </SplideSlide>
//           ))}
//         </CustumeSplide>
//       </Grid>
//     </Grid>
//   );
// };

// export default Testimonials;
