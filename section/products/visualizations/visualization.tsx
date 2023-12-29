"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { styles } from "./visualization-style";
import CustomButton from "@/components/custom-button/custom-button";
import visualizationsChart from "../../../assets/visualizationsChart.svg";
import Image from "next/image";
import { gradientStyle } from "@/app/styles";
import BgEffect from "@/section/common/bgeffect";

const Visualizations = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px", md: "0 120px 0 120px" } }}>
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-100px", md: 0 } }} position={"relative"}>
            <Image src={visualizationsChart} alt="about Chart" style={{ width: "100%", marginLeft: "-30px" }} />
            <BgEffect bottom={-100} left={0} size="300px" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={styles.sectionTitle}>
            <Typography variant="h2" maxWidth="450px" sx={{ marginTop: { xs: 0, md: "70px" } }}>
              Integrated <span style={gradientStyle}>Visualisations</span>
            </Typography>
            <Typography variant="body1">
              Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer. Lörem ipsumi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer.
            </Typography>
            <CustomButton buttonTitle="Learn More" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Visualizations;
