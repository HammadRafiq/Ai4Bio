"use client";
import CustomButton from "@/components/custom-button/custom-button";
import { Box, Typography } from "@mui/material";
import React from "react";
import { styles } from "./contact-section-style";
import { gradientStyle } from "@/app/styles";
import BgEffect from "@/section/common/bgeffect";

const ContactSection = () => {
  return (
    <Box sx={styles.contactSectionStyle} position="relative">
      <Box display="flex" justifyContent="center">
        <Typography variant="h1" color="#fff" maxWidth="990px">
          Ready to Leverage From The <span style={gradientStyle}>Leveragable Data</span>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography className="body1" variant="body2" py="30px" color="#fff" maxWidth="750px">
          Lörem ipsum ede telenomi. Kropreligt donera spegåliga. Väll nytinera.
          Plase. Eurojålig hypobel i plapp. Jåpyre padäpärat trafikmaktordning och
          egomisa latrer.
        </Typography>
      </Box>
      <CustomButton buttonTitle="Contact Now" />
      <BgEffect top={50} left={50} zIndex={9} size="150px" />
    </Box>
  );
};

export default ContactSection;
