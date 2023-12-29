"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import vision from "../../../assets/vision.svg";
import visionChart from "../../../assets/visionChart.svg";

import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { styles } from "./vision-style";
import BgEffect from "@/section/common/bgeffect";

const visionArray = [
  { id: 1, title: "Kropreligt donera" },
  { id: 2, title: "Eurojålig hypobel" },
  { id: 3, title: "Jåpyre padäpärat trafikmaktordning" },
  { id: 4, title: "Väll nytinera" },
];

const Vision = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px 0 20px", md: "0 120px 40px 120px" } }} position="relative">
      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-50px", md: 0 } }}>
            <Typography variant="h2">Our Vision is Simple</Typography>
            <Typography variant="body1" sx={{ my: "20px" }}>
              Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll
              nytinera. Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat
              trafikmaktordning och egomisa latrer.{" "}
            </Typography>
            <List>
              {visionArray.map((item: any) => (
                <ListItem disablePadding sx={styles.version}>
                  <ListItemButton>
                    <Image src={vision} alt="vision icons" />
                    <ListItemText
                      primary={item.title}
                      sx={{ marginLeft: "10px" }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginTop: { xs: "-60px", md: 0 } }}>
            <Image src={visionChart} alt="about Chart" style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
      <BgEffect right={0} top={0} size="300px" />
    </Box>
  );
};

export default Vision;
