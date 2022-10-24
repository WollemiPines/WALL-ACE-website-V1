import React from 'react';
import { Router, Link } from 'react-router-dom';
import { TOGGLE_CART } from '../utils/actions';
import { useStoreContext } from '../utils/GlobalState';


export default function CartIcon() {
  const [ dispatch] = useStoreContext();
  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  return (

      <div className="cart_icon_container">
      
         <Link to="/cart">  
         <img  className='cart-icon' alt="Cart" src='/images/icons/cart.jpg'/>
         </Link>
  
      </div>

  );
}
