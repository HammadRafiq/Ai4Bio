import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/layout/root";
import { styles } from "@/components/custom-button/custom-button-style";
import { Box } from "@mui/material";
import Image from "next/image";
import bgHeroSection from "../assets/bgHeroSection.svg";
import "./globals.css"
import Header from "@/layout/main-layout/header";
import Footer from "@/layout/main-layout/footer";
import { bgEffect } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ai4Bio",
  description: "Turn your bio-imaging experiments into leverageable data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#fff" }}>
        <Box sx={{ left: "-2px", top: "-100px", ...bgEffect }}></Box>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
