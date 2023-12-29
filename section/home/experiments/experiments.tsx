"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { styles } from "./experiments-style";
import leftArrow from "../../../assets/leftArrow.svg";
import Image from "next/image";
import { cardArray } from "./experiments-data";
import { gradientStyle } from "@/app/styles";

const Experiments = () => {
  return (
    <Box sx={{ padding: { xs: "0 20px 0 20px", md: "70px 120px 0 120px" } }}>
      <Box display="flex" sx={{ marginBottom: { xs: "40px" }, justifyContent: { xs: "left", md: "center" }, textAlign: { xs: "left", md: "center" } }}>
        <Typography variant="h2" sx={{ maxWidth: "900px" }}>
          Turn Your Bio-Imaging Experiments Into
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 3 }}>
        {cardArray.map((item: any) => {
          return (
            <Grid item xs={12} md={4}>
              <Box sx={{ background: "#26ACE215", border: "1px solid #26ACE2", padding: "30px 20px", borderRadius: "16px" }}>
                <Box>
                  <Typography variant="h3">{item.cardTitle1}</Typography>
                  {/* second gradient color: #9E83BD */}
                  <Typography variant="h3" color="#26ACE2" marginTop="-5px" sx={gradientStyle}>{item.cardTitle2}</Typography>
                  <Typography className="body1" sx={{ padding: "15px 0 25px 0" }}>{item.description}</Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
                  <Typography className="body1" marginRight="10px">
                    {item.buttonText}
                  </Typography>
                  <Image src={leftArrow} alt="leftArrow" />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Experiments;
