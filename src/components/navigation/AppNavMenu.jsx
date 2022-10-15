import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { appBar, toolbarWrapper, flexAlignCenter, logoText, hideonMobile } from '../../styles/styles'


function AppNavMenu(props) {
    return (
        <>
            <AppBar component="nav" sx={appBar}>
                <Toolbar>
                    <Box sx={toolbarWrapper}>
                        <Box sx={flexAlignCenter}>

                            <MenuIcon
                                sx={{ mr: 3 }}
                                size={32}

                            />

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onclick={props.handelDrawerToggle}
                                disableRipple
                                sx={{ mr: 2 }}
                            >
                                <AiFillYoutube size={32} />
                                <Typography variant='h6' sx={logoText}>YOUTUBE</Typography>


                            </IconButton>



                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default AppNavMenu