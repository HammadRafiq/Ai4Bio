import React from 'react'
import { Box } from "@mui/material";

type Props = {
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
    size?: string,
    zIndex?: number
}

const BgEffect = (
    {
        left,
        top,
        right,
        bottom,
        size = "500px",
        zIndex = -1
    }: Props
) => {
    return (
        <Box
            sx={{
                height: size,
                width: size,
                zIndex: zIndex,
                opacity: 0.2,
                position: "absolute",
                filter: "blur(100px)",
                background: "linear-gradient(90deg, #26ACE2 1.99%, #9E83BD 100%)",
                left,
                top,
                right,
                bottom
            }}
        >
        </Box>
    )
}

export default BgEffect