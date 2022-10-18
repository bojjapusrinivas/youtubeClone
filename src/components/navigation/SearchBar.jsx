import React from 'react'
import {Box,Paper, InputBase, IconButton, Button}from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import {searchBar, flexAlignCenter } from '../../styles/styles'
import{BsFillMicFill} from 'react-icons/bs'
import { width } from '@mui/system';

function SearchBar() {
  return (
    <>
      <Box sx={flexAlignCenter}>
        <Paper component="form" sx={searchBar}>
            <InputBase sx={{ml:1, flex:1, pl:1}} placeholder="search"/>
            <IconButton
              sx={{backgroundColor:"#eee", borderRadius:0}}
              aria-label="Search"
              type="button"
            >
             <SearchIcon/>
            </IconButton>
         </Paper>

         <Button sx={{minWidth:"auto"}}>
            <BsFillMicFill size={20}/>
         </Button>
       

        </Box>

    </>
  )
}

export default SearchBar