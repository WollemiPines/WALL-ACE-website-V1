import React, { useState } from 'react';
import Navigation from './navigation';
import Cart from './icon_cart';

function Header() {

  return (
    <div class="header_container">
      <div class="header_container_two">
      <div class="header_title">
        <h1 class="main-header">Wall Ace</h1>
        <Cart />

      </div>
      <div class="header-links">
        <Navigation />
      </div>
      </div>
    </div>
  );
}
export default Header;
