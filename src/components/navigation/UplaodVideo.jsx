import React from 'react'
import{Box, Menu, Link, List, ListItemIcon, ListItemText, Button, ListItemButton, ListItem,MenuItem, Typography} from '@mui/material'
import { RiVideoUploadFill } from 'react-icons/ri';
import UseToggle from '../../hooks/UseToggle';
import {uploadMenuItems} from "../../data/app.Data"



function UplaodVideo() {

    const { el, open, handelClick, handelClose} = UseToggle()

  return (
    <>
        <Box sx={{x:1}}>
                
                <Button sx={{minWidth: ' auto', mr: "4px"}} onClick={handelClick} id="uploadVideoButton">
                    <RiVideoUploadFill size={24}/>
                </Button>

                <Menu 
                     id="upload-menu"
                    anchorEl={el}
                    open={open}
                    onClose={handelClose}
                    MenuListProps={{'aria-labelledby':'uploadVideoButton'}}

                >
                      {uploadMenuItems.map((item) => {
                        return (
                            <MenuItem key={item.id} onClick={handelClose}>
                            {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
                            <Typography
                                sx={{ textAlign: 'center', width: '100%' }}
                                component="span"
                            >
                                {item.text}
                            </Typography>
                            </MenuItem>
          );
        })}

                </Menu>
        </Box>
    
    </>
  )
}

export default UplaodVideo