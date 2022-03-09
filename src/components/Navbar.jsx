import React, { useContext, useEffect } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo-nav">
               <NavLink to ="/" >
                  <p class="site-title">STUDIO ICH - COACH STYLE</p>
               </NavLink>
            </div>
            <div className="links-nav">
               <NavLink to ="/new-in" className={({ isActive }) =>
              isActive ? "selected" : "navigation-link"}>
                  New in
               </NavLink>
               <NavLink to ="/concept" className={({ isActive }) =>
              isActive ? "selected" : "navigation-link"}>
                  Concept
               </NavLink>
               <NavLink to ="/ebooks" className={({ isActive }) =>
              isActive ? "selected" : "navigation-link"}>
                  Ebook
               </NavLink>               
               <NavLink to ="/prestations" className={({ isActive }) =>
              isActive ? "selected" : "navigation-link"}>
                   Réserver une prestation
               </NavLink>
            </div>
        </div>
    )
}

export default Navbar;