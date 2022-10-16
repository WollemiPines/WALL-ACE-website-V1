import React, { useState } from 'react';
import FbIcon from './icon_fb';
import InstaIcon from './icon_insta';
const Footer = () =>{
    return (
        <footer>
        <div class="container">
         <p class="footer-text">Made by Chris Wallace 2022</p>
         < InstaIcon/>
         < FbIcon/>
        </div>
      </footer>
    )
}
export default Footer;