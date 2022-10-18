import React from 'react'
import{ThemeProvider, createTheme} from "@mui/material"
import { color, fontSize } from '@mui/system'
import {grey, pink} from '@mui/material/colors'

const theme = createTheme({
        typography:{
            allVariants:{
              fontFamily:  "Roboto",
              fontSize:"14px",
              fontWeight:400,
            },
            
        },
        palette:{
            primary:{
                main:grey[700]
            },
            secondary:{
                main:pink[700]
            }
        }

})






function AppThemeProvider(props) {
  return (
   <>
    <ThemeProvider theme={theme}>{props.children} </ThemeProvider>
   </>
  )
}

export default AppThemeProvider