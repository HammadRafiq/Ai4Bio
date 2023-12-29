"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./edge-cloud -styling";
import CustomButton from "@/components/custom-button/custom-button";
import EdgeCloudImage from "../../../assets/EdgeCloudImage.png";
import Image from "next/image";
import { gradientStyle } from "@/app/styles";
import BgEffect from "@/section/common/bgeffect";


const EdgeCloud = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px 50px 20px", md: "0 120px 80px 120px" } }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-90px", md: 0 } }}>
            <Typography variant="h2" textTransform="capitalize" sx={{ marginTop: { xs: 0, md: "60px" } }}>
              Cutting Edge Cloud<span style={gradientStyle}>AI Components</span>
            </Typography>
            <Typography variant="body1" sx={{ my: "20px" }}>
              Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer. Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer.
            </Typography>
            <CustomButton buttonTitle="Learn More" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "20px", md: 0 } }} textAlign={"center"} position={"relative"}>
            <Image src={EdgeCloudImage} alt="about Chart" style={{ width: "70%", height: "auto" }} />
            <BgEffect right={0} bottom={0} size="300px" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EdgeCloud;
