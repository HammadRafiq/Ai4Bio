"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./about-us-style";
import CustomButton from "@/components/custom-button/custom-button";
import aboutChart from "../../../assets/aboutChart.svg";
import Image from "next/image";
import { gradientStyle } from "@/app/styles";
import BgEffect from "@/section/common/bgeffect";

const AboutUs = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px", md: "60px 120px 0 120px" } }} position="relative">
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-50px", md: 0 } }}>
            <Image src={aboutChart} alt="about Chart" style={{ width: "100%", marginLeft: "-30px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.sectionTitle}>
            <Typography variant="h2" maxWidth="450px">
              What We Are <span style={gradientStyle}>All</span> <span style={{ color: "#26ACE2" }}>About</span>
            </Typography>
            <Typography variant="body1">
              Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll
              nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat
              trafikmaktordning och egomisa latrer.{" "}
            </Typography>
            <Typography variant="body1">
              Ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase.
              Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och
              egomisa latrer.
            </Typography>
            <CustomButton buttonTitle="Explore More" />
          </Box>
        </Grid>
      </Grid>
      <BgEffect left={0} top={0} size="300px" />
    </Box>
  );
};

export default AboutUs;
