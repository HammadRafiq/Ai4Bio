"use client";
import CustomButton from "@/components/custom-button/custom-button";
import { Grid, Box, Typography, Container } from "@mui/material";
import React from "react";
import heroSectionImage from "../../../assets/heroSectionImage.svg";
import bgHeroSection from "../../../assets/bgHeroSection.svg";
import Image from "next/image";
import { styles } from "@/section/home/hero-section/hero-section-style";
import BgEffect from "@/section/common/bgeffect";

const HeroSection = () => {
  return (
    <Box sx={styles.sectionTitle}>
      <Box sx={styles.bgHeroImage}>
        <Image src={bgHeroSection} alt="hero section" />
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box sx={{ marginTop: { xs: "40px", md: 0 } }}>
            <Typography variant="h1" maxWidth="700px">
              Get Leverage From Our Range Of <span style={gradientStyle}>Ai-Bio Products</span>
            </Typography>
            <Typography className="body1">
              Detect & Track | Merge with external data inputs | Generate charts
              to guide your future experiments
            </Typography>
            <CustomButton buttonTitle="Explore Now" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Box marginTop={{ xs: "-120px", md: 0 }} position={'relative'}>
            <Image
              src={heroSectionImage}
              alt="hero section"
              style={{ width: "100%" }}
            />
            <BgEffect top={0} right={0} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;

const gradientStyle = {
  background: "linear-gradient(90deg, #9E83BD  2%, #26ACE2 50%)",
  WebkitBackgroundClip: "text", // for webkit-based browsers
  color: "#yourTextColor", // Replace with your desired text color
  display: "inline", // Ensures that the gradient is applied only to the text
};
