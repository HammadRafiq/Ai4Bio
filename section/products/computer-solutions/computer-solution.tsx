"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./computer-solution-style";
import CustomButton from "@/components/custom-button/custom-button";
import visualizationsChart from "../../../assets/visualizationsChart.svg";
import ComputerVision from "../../../assets/computer-vision.png"
import Image from "next/image";
import { gradientStyle } from "@/app/styles";
import BgEffect from "@/section/common/bgeffect";

const ComputerSolution = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px 0 20px", md: "80px 120px 40px 120px" } }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-50px", md: 0 } }}>
            <Typography variant="h2" textTransform="capitalize" sx={{ marginTop: { xs: 0, md: "50px" } }}>
              Computer Vision solutions with <span style={gradientStyle}>personalized outputs</span>
            </Typography>
            <Typography variant="body1" sx={{ my: "20px" }}>
              Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer. Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer.
            </Typography>
            <CustomButton buttonTitle="Learn More" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-20px", md: 0 } }} position={"relative"}>
            <Image src={ComputerVision} alt="about Chart" style={{ width: "100%" }} />
            <BgEffect right={0} bottom={-100} size="200px" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComputerSolution;
