"use client";
import CustomButton from "@/components/custom-button/custom-button";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import mission from "../../../assets/mission.svg";
import Image from "next/image";
import { styles } from "./mission-style";
import { gradientStyle } from "@/app/styles";

const missionData = [
  {
    title: <div>Our Mission & <span style={gradientStyle}>Values</span></div>,
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
  {
    title: <div>Our Mission & <span style={gradientStyle}>Values</span></div>,
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
  {
    title: <div>Our Mission & <span style={gradientStyle}>Values</span></div>,
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
  {
    title: <div>Our Mission & <span style={gradientStyle}>Values</span></div>,
    desc: "Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre"
  },
]

const Mission = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px 50px 20px", md: "80px 120px 80px 120px" } }}>
      <Grid
        container
        alignItems={"center"}
        spacing={8}
      >
        <Grid
          xs={12}
          md={5}
          item
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">Our Mission & <span style={gradientStyle}>Values</span></Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
              Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och egomisa latrer. Lörem ipsum ede telenomi. Kropreligt donera spegåliga.
            </Typography>
            <Box sx={{ mt: 1 }}>
              <CustomButton buttonTitle="Learn More" />
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={7}
          item
          container
          spacing={2}
          marginTop={{ xs: "30px", md: 0 }}
        >
          {missionData.map(item => (
            <Grid xs={12} md={6} item>
              <Card
                sx={styles.missionCardStyle}
              >
                <CardContent>
                  <Image src={mission} alt={mission} />
                  <Typography variant="h5" mt={1}>{item.title}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mission;
