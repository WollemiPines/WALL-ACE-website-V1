import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Cart() {
  return (

      <div className="cart_icon_container">
      
         <Link to="/cart">  
         <img src="./images/cart_icon.png"/>
         </Link>
  
      </div>

  );
}
