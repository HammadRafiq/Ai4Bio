"use client";
import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../assets/logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const platform = [
  { id: 1, title: "Platform Overview", link: "/" },
  { id: 2, title: "Accounts", link: "/" },
  { id: 3, title: "Payments", link: "/" },
  { id: 4, title: "Branded Cards", link: "/" },
  { id: 5, title: "Global Money Transfers", link: "/" },
  { id: 6, title: "Crypto & Web3", link: "/" },
];
const solutions = [
  { id: 1, title: "B2B Payments", md: 2, link: "/" },
  { id: 2, title: "Promotional Gift Cards", md: 2, link: "/" },
  { id: 3, title: "Virtual Cards & Disbursements", md: 2, link: "/" },
  { id: 4, title: "Recurring Deposits & Savings", md: 2, link: "/" },
  { id: 5, title: "Cross-Border Remittances", md: 2, link: "/" },
];
const learn = [
  { id: 1, title: "Articles", md: 2, link: "/" },
  { id: 2, title: "Podcasts", md: 2, link: "/" },
  { id: 3, title: "Yuvalocity", md: 2, link: "/" },
];
const company = [
  { id: 1, title: "About", md: 2, link: "/" },
  { id: 2, title: "Careers", md: 2, link: "/" },
  { id: 3, title: "Newsroom", md: 2, link: "/" },
];

const Footer = () => {
  return (
    <Box sx={{ padding: { xs: "50px 20px 0 20px", md: "80px 120px 0 120px" } }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <Link href="/">
                <GradientAvatar>
                  <TwitterIcon />
                </GradientAvatar>
              </Link>
              <Link href="/">
                <GradientAvatar>
                  <EmailIcon />
                </GradientAvatar>
              </Link>
              <Link href="/">
                <GradientAvatar>
                  <LinkedInIcon />
                </GradientAvatar>
              </Link>
              <Link href="/">
                <GradientAvatar>
                  <InstagramIcon />
                </GradientAvatar>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Typography variant="h4" sx={{ fontSize: "24px", fontWeight: "500", marginTop: { xs: "30px", md: 0 } }}>
            Platform
          </Typography>
          <List>
            {platform.map((item) => (
              <Link key={item.id} href={item.link}>
                <ListItemText primary={item.title} sx={{ mb: 1 }} />
              </Link>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Typography variant="h4" sx={{ fontSize: "24px", fontWeight: "500" }}>
            Solutions
          </Typography>
          <List>
            {solutions.map((item) => (
              <Link key={item.id} href={item.link}>
                <ListItemText primary={item.title} sx={{ mb: 1 }} />
              </Link>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h4" sx={{ fontSize: "24px", fontWeight: "500" }}>
            Learn
          </Typography>
          <List>
            {learn.map((item) => (
              <Link key={item.id} href={item.link}>
                <ListItemText primary={item.title} sx={{ mb: 1 }} />
              </Link>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h4" sx={{ fontSize: "24px", fontWeight: "500" }}>
            Company
          </Typography>
          <List>
            {company.map((item) => (
              <Link key={item.id} href={item.link}>
                <ListItemText primary={item.title} sx={{ mb: 1 }} />
              </Link>
            ))}
          </List>
        </Grid>
      </Grid>
      <Box mt="30px">
        <Divider />
        <Typography sx={{ textAlign: "center", my: 3 }}>
          Copyright 2023 Ai4Bio. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

//--------------------------------------------------------
const GradientAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  background: "linear-gradient(90deg, #26ACE2 1.99%, #9E83BD 100%)",
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));
