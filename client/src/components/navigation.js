import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Navigation() {
  return (

      <div>
        <nav className='nav-list'>
          <ul>
            <li className="h-ref">
              <Link to="/home">Home</Link>
            </li>
            <li className="h-ref">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="h-ref">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="h-ref">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="h-ref">
              <Link to="/disclaimers">Disclaimers</Link>
            </li>
          </ul>
        </nav>
      </div>

  );
}
