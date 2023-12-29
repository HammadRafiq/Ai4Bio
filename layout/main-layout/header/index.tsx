"use client"
import React, { useMemo } from 'react'
import Logo from "../../../assets/logo.svg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomMenu from './custom-menu';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const pages = [
    {
        title: "Home",
        link: "/",
        linkRef: "/"
    },
    {
        title: "Products",
        link: "/products",
        linkRef: "/products"
    },
    {
        title: "Case Studies",
        link: "/",
        linkRef: "/case-studies"
    },
    {
        title: "Testimonials",
        link: "/",
        linkRef: "/testimonials"
    },
]


const Header = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: { xs: "15px 20px", md: "15px 120px" } }}> {/* HEADER */}
                <Box sx={{ width: { xs: "150px", md: "250px" } }}>
                    <Image src={Logo} alt="logo" />
                </Box>
                <Box>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                        {pages.map((page) => {
                            const isActiveMenu = pathname === page.linkRef
                            return (
                                <Button
                                    key={page.link}
                                    onClick={() => {
                                        router.push(page.link)
                                    }}
                                    sx={{
                                        my: 2, color: isActiveMenu ? "#26ACE2" : 'black', display: 'block', textTransform: "capitalize", cursor: "pointer", zIndex: 9, fontSize: 16, fontWeight: isActiveMenu ? 700 : 400
                                    }}
                                >
                                    {page.title}
                                </Button>
                            )
                        })}
                    </Box>
                    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                        <CustomMenu options={pages} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
