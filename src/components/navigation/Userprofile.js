import React from 'react'
import{Menu,Button,List, ListItem, ListItemAvatar, Link, Divider, ListItemButton, ListItemIcon, IconButton, Avatar, ListItemText, Typography} from "@mui/material"
import {FaUserCircle} from "react-icons/fa"
import UseToggle from '../../hooks/UseToggle'
import { Box } from '@mui/system'
import { userProfileItems } from '../../data/app.Data'



function Userprofile() {

 const { el, open, handelClick, handelClose} = UseToggle()
 
  return (
    <>
        <Button
            id="basic-button"
            sx={{minWidth:'auto', mr: "4px"}}
            onClick={handelClick}
            

        >
            <FaUserCircle fontSize={24} />
        </Button>

        <Menu
            id="basic-menu"
            MenuListProps={{'aria-labelledby':"basic-button"}}
            anchorEl={el}
            open={open}
            onClose={handelClose}
            aria-label="basic-button"
        >

             
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src="https://i.pravatar.cc/150?img=2" size={24}/>
                        </ListItemAvatar>
                    <ListItemText 
                        primary="Ho My God"   
                        secondary={
                            <>
                            <Typography>

                                <Link href="#" underline='none'>
                                    Manage your google account
                                </Link>
                            </Typography>

                            </>
                         }
                        ></ListItemText>
                    </ListItem>

                     <Box sx={{width: "300px", borderTop:"1px solid #ddd"}}>
                        <List sx={{p:0}}>
                          {
                            userProfileItems.map(item => (
                               
                                item.divider ? (<Divider/>):(

                                <ListItem sx={{p:0}} key={item.id}>
                                    <ListItemButton  disablePadding>
                                    <ListItemIcon>
                                        {item.icon}
                                        </ListItemIcon>
                                <ListItemText primary={item.text}>

                                </ListItemText>
                                </ListItemButton>
                                </ListItem>
                                )

                            ))
                          }

                        </List>
                    </Box>  
                
           
        </Menu>


    </>
  )
}

export default Userprofile