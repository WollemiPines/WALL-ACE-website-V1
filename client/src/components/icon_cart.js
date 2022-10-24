import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Cart() {
  return (

      <div className="cart_icon_container">
      
         <Link to="/cart">  
         <img className='cart-icon' alt="Cart" src='/images/icons/cart.jpg'/>
         </Link>
  
      </div>

  );
}
