import React from 'react'

import {Link, List, ListItemAvatar, ListItemText, ListItemButton, Button, Menu, ListItem, Avatar, Divider, Typography, Box} from "@mui/material"
import NotificationsIcon from '@mui/icons-material/Notifications';
import  {notificationData}  from '../../data/app.Data';
import UseToggle from '../../hooks/UseToggle';
import {notificationWrapper, inlineText} from "../../styles/styles";


function Notification() {

    const{el, open, handelClick, handelClose} = UseToggle();

  return (
    <>
      <Button disableFocusRipple sx={{minWidth:'auto'}} onClick={handelClick} id='notificagtion-botton'>
            <NotificationsIcon size={24}/>
      </Button>
      
      <Menu
        id='basic-menu'
        anchorEl={el}
        open={open}
        onClose={handelClose}
        MenuListProps={{'aria-labelledby':"notificagtion-botton"}}
      >

               <List sx={notificationWrapper}>
          {notificationData.map((item) => {
            return (
              <Link href={item.url} key={item.id} underline="none">
                <ListItem sx={{ pt: 0, pb: 1, mt: 1 }} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.alt} src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.text}
                    secondary={
                      <React.Fragment>
                        <Box sx={{ mt: 2 }}>
                          <Typography sx={inlineText} component="span">
                            {item.time}
                          </Typography>
                        </Box>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {notificationData.length !== item.id && (
                  <Divider variant="inset" component="li" />
                )}
              </Link>
            );
          })}
        </List>



          
      </Menu>
      

    </>
  )
}

export default Notification