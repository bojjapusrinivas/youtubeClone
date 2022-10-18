import React, { useState } from 'react'

function UseToggle() {

     const[ el , setEl] = useState(null);
     const open  =  Boolean(el);
    const handelClick = (event) =>{
        setEl(event.currentTarget )
     }
     const handelClose = () =>{
        setEl(null)
     }

    return {
        el,
        open,
        handelClose,
        handelClick,
    
        }
}

export default UseToggle