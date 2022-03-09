import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div>STUDIO ICH - COACH STYLE</div>
            <div class="network">
               <a class="instagram"><img></img></a>
               <a class="facebook"><img></img></a>
               <a class="linkedin"><img></img></a>
            </div>
            <div className="footNav">
            <NavLink to="/about" className='foot-link'>
                <p>A propos</p>
            </NavLink>
            <NavLink to="/contact" className='foot-link'>
                <p>Contactez-nous</p>
            </NavLink>
            <NavLink to="/mentions-legales" className='foot-link'>
                <p>Mentions légales</p>
            </NavLink>
            <NavLink to="/CGV" className='foot-link'>
                <p>CGV</p>
            </NavLink>
            </div>
        </div>
    )
}

export default Footer;