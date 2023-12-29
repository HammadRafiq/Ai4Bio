"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Paper, Typography } from "@mui/material";
import { styles } from "./our-projects-style";
import CustomButton from "@/components/custom-button/custom-button";
import { gradientStyle } from "@/app/styles";

const data = [
  {
    title: "3-d micro-organisms detection reporting",
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre örem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
  {
    title: "PDF text extractor to database",
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre örem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
  {
    title: "Create cloud infrastructure from scratch",
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre örem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
]

const OurProjects = () => {
  return (
    <Box sx={{ padding: { xs: "50px 20px 50px 20px", md: "80px 120px 80px 120px" }, background: "#9E83BD10" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box textAlign="center" maxWidth="550px">
          <Typography variant="h2">
            See Our <span style={gradientStyle}>Projects</span>
          </Typography>
          <Typography variant="body1" marginTop="20px" marginBottom="60px">
            Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre
          </Typography>
        </Box>
      </Box>

      {data.map((item, index) => (
        <Grid container spacing={{ xs: 2, sm: 4, md: 15 }} alignItems="center" flexDirection={index % 2 === 0 ? "row" : "row-reverse"} sx={{ marginBottom: { xs: "25px", md: "60px" } }}>
          <Grid item xs={12} md={6} width="100%">
            <Paper sx={styles.PaperStyle}></Paper>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box marginBottom={{ xs: data.length - 1 !== index ? "30px" : 0, md: 0 }}>
              <Typography variant="h4" textTransform="capitalize">
                {item.title}
              </Typography>
              <Typography variant="body1" my={2}>
                {item.desc}
              </Typography>
              <Box>
                <CustomButton buttonTitle="Learn More" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default OurProjects;
