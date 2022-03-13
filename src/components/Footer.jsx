import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';
import insta from "../assets/pics/instaGrey.png"

const Footer = () => {
    return (
        <div className='Footer'>
            <NavLink to="/" className='foot-link'>
            <div className='footerTitle'>STUDIO ICH - COACH STYLE</div>
            </NavLink>
            <div className="footNav">
               <p className="foot-text">Suivez nous sur Instagram</p>
               <a class="logoContainer" href="https://www.instagram.com/studioichparis/"><img class="logoInsta" src={insta} alt="logo instagram"></img></a>
            </div>
            <NavLink to="/contact" className='foot-link'>
                <p>Contactez-nous</p>
            </NavLink>
            <NavLink to="/mentions-legales" className='foot-link'>
                <p>Mentions légales</p>
            </NavLink>
            
        </div>
    )
}

export default Footer;