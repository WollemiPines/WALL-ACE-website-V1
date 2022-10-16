import React from 'react';
import { Router, Link } from 'react-router-dom';

export default function Navigation() {
  return (

      <div>
        <nav class='nav-list'>
          <ul>
            <li class="h-ref">
              <Link to="/Wall-Ace/home">Home</Link>
            </li>
            <li class="h-ref">
              <Link to="/Wall-Ace/contact">Contact</Link>
            </li>
            <li class="h-ref">
              <Link to="/Wall-Ace/shop">Shop</Link>
            </li>
            <li class="h-ref">
              <Link to="/Wall-Ace/projects">Projects</Link>
            </li>
            <li class="h-ref">
              <Link to="/Wall-Ace/disclaimers">Disclaimers</Link>
            </li>
          </ul>
        </nav>
      </div>

  );
}
