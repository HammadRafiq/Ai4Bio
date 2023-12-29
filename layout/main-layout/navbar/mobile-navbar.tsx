import React, { useState } from "react";
import Link from "next/link";
import { Drawer, Button, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/logo.svg";

// google fonts
import { Poppins } from "next/font/google";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/" },
  { id: 3, title: "Case Studies", link: "/" },
  { id: 4, title: <Button>Contact</Button>, link: "/" },
];

const MobileNavbar = ({ toggleDrawerMenu, openMenu }: any) => {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
        <Box sx={{ flexGrow: 0 }}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={toggleDrawerMenu}
            sx={{
              "& .MuiPaper-root": {
                background:
                  "linear-gradient(92deg, rgba(248, 250, 252, 0.80) 7.57%, rgba(248, 250, 252, 0.73) 32.7%, rgba(248, 250, 252, 0.80) 55.51%, rgba(248, 250, 252, 0.72) 96.73%)",
                boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
              },
            }}
          >
            <Box sx={{ width: "240px", p: 2 }}>
              <IconButton
                sx={{ display: "block", ml: "auto" }}
                onClick={toggleDrawerMenu}
              >
                <CloseIcon />
              </IconButton>
              {pagesNavbar.map((item) => (
                <StyledMenuLink key={item.id} href={item.link}>
                  <Typography>{item.title}</Typography>
                </StyledMenuLink>
              ))}
            </Box>
          </Drawer>
        </Box>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", lg: "none" },
          justifyContent: "flex-end",
          color: "white",
        }}
      >
        <Button onClick={toggleDrawerMenu}>
          <MenuIcon sx={{ color: "white" }} />
        </Button>
      </Box>
    </>
  );
};

export default MobileNavbar;

//--------------------------------------------------------
// Styled  components

const StyledMenuLink = styled(Link)(({ theme }) => ({
  padding: "15px",
  color: theme.palette.text.secondary,
  textDecoration: "none",
  fontFamily: poppins.style.fontFamily,
}));
