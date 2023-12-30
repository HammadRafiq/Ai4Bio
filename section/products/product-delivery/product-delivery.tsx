"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./product-delivery-style";
import CustomButton from "@/components/custom-button/custom-button";
import productDelivery from "../../../assets/aiBio.svg";
import Image from "next/image";
import { gradientStyle } from "@/app/styles";

const ProductDelivery = () => {
  return (
    <Box
      sx={{ background: "linear-gradient(90deg, rgba(38, 172, 226, 0.5) 1.99%, rgba(158, 131, 189, 0.3) 100%)", padding: { xs: "50px 0", md: "20px 0 45px 0" } }}
    >
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box display="flex" alignItems="center" height="100%" sx={{ paddingLeft: { xs: "20px", md: "120px" } }}>
            <Box>
              <Typography variant="h1">
                <span style={gradientStyle}>2 Months</span>
              </Typography>
              <Typography variant="h2" textTransform="capitalize" maxWidth="500px">
                Our average computer vision product delivery
              </Typography>
              <Box sx={{ mt: 4 }}>
                <CustomButton buttonTitle="Learn More" />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }} marginTop={{ xs: "40px", md: 0 }}>
          <Image
            src={productDelivery}
            alt="about Chart"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDelivery;
