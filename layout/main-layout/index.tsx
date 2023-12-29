import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./header/indexold";
import Footer from "./footer";

const MainLayout = ({ children }: any) => {
  return (
    <Stack>
      {/* <Header /> */}
      <Box>{children}</Box>
      {/* <Footer /> */}
    </Stack>
  );
};

export default MainLayout;
