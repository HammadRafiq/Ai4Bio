import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// google fonts
import { Poppins } from "next/font/google";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import CustomButton from "@/components/custom-button/custom-button";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const pagesNavbar = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/" },
  { id: 3, title: "Case Studies", link: "/" },
  { id: 3, title: "Testimonials", link: "/" },
  {
    id: 4,
    title: <CustomButton padding="5px 25px" buttonTitle="Contact" />,
    link: "/",
  },
];

const DesktopNavbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", lg: "flex", justifyContent: "end" },
          alignItems: "center",
          gap: 3,
        }}
      >
        {pagesNavbar.map((page) => (
          <StyledNavLink key={page.id} href={page.link}>
            {page.title}
          </StyledNavLink>
        ))}
      </Box>
    </>
  );
};

export default DesktopNavbar;

//--------------------------------------------------------
// Styled  components

const StyledNavLink = styled(Link)(({ theme }) => ({
  fontSize: "16px",
  padding: "25px 15px",
  color: "#000000",
  textDecoration: "none",
  textAlign: "center",
  fontFamily: "Satoshi, sans-serif",
}));
