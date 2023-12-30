"use client"
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./font.css"
import { Layout } from "@/layout/root";
import { Box, Typography } from "@mui/material";
import "./globals.css"
import Header from "@/layout/main-layout/header";
import Footer from "@/layout/main-layout/footer";
import { bgEffect } from "./styles";
import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Light.woff2',
      weight: '300',
    },
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
    },
  ],
});

const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Ai4Bio",
//   description: "Turn your bio-imaging experiments into leverageable data",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#fff" }}>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
