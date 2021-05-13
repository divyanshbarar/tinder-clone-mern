import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
           <IconButton>
           <AccountCircleIcon fontSize="large" color="primary" className="header__icon" />
  
           </IconButton>
                      <img src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png" alt="" />

                      <IconButton>
                      <ChatIcon fontSize="large" color="primary" className="header__icon"/>
     
           </IconButton>

                        </div>
    )
}

export default Header
