import React, { useState } from 'react';
import Navigation from './navigation';
import Cart from './icon_cart';

function Header() {

  return (
    <div className="header_container">
      <div className="header_container_two">
      <div className="header_title">
        <h1 className="main-header">Wall Ace</h1>
        <Cart />

      </div>
      <div className="header-links">
        <Navigation />
      </div>
      </div>
    </div>
  );
}
export default Header;
