import React from 'react';

import './Footer.css';

import blogger from "../images/blogger.png";

// TODO: Animation.. 

const Footer = () => (
    <div className="footer__container">
        <p>Made with code</p>
        <img src={blogger} className=""/> 
    </div> 
);

export default Footer;