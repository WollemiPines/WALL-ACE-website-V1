import React, { useState } from 'react';
import Navigation from './navigation';
import Cart from './icon_cart';

import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';



function Header() {

  return (
    <div className="header_container">
      <div className="header_container_two">
      <div className="header_title">
        <h1 className="main-header">Wall Ace</h1>
        <img className='logo-header' alt="Logo" src='/images/header/logo.jpg'/>
        <div className="header_title_login_cart">
        <Button className="logsignbttn" variant="contained" color="primary" disableElevation component={RouterLink} to="/signup"> Login/Signup </Button>
        <IconButton color="primary" aria-label="add to shopping cart">
          <Cart/>
        </IconButton>
        
        </div>
      </div>
      
      </div>
      <div className="header-links">
        <Navigation />
      </div>
    </div>
  );
}
export default Header;
