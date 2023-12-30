import { Box, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';

const CustomMenu = ({
    renderUI = <MenuIcon sx={{ fontSize: "34px" }} />,
    options = Array(),
    padding = "5px 13px",
    styleObj = {},
}) => {
    const [anchorEl, setAnchorEl]: any = useState(null);
    const open = Boolean(anchorEl);

    const router = useRouter()

    const handleClose = (e: any) => {
        e.stopPropagation()
        setAnchorEl(null)
    }


    return (
        <Box sx={{ overflow: "visible", zIndex: 99 }}>
            <Box
                onClick={event => {
                    event.stopPropagation()
                    setAnchorEl(event.currentTarget)
                }}
                sx={{
                    padding: padding,
                    cursor: "pointer",
                    zIndex: 99,
                    paddingLeft: open ? "30px" : "13px",
                    ...styleObj
                }}
            >
                {renderUI}
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    ".MuiMenu-paper": {
                        backgroundColor: "#fff"
                    }
                }}
            >
                {options?.map((item: any, index) => (
                    <MenuItem
                        key={item?.title + index}
                        onClick={(e: any) => {
                            handleClose(e)
                            router.push(item.link)
                        }}
                    >
                        <Box style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                            <Typography variant='body2'>
                                {item.title}
                            </Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default CustomMenu
