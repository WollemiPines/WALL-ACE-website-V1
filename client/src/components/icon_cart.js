import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Cart() {
  return (

      <div className="cart_icon_container">
      
         <Link to="/cart">  
         <img alt="Cart" src='public/images/icons/cart.jpg'/>
         </Link>
  
      </div>

  );
}
