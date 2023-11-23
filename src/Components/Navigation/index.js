import React, { useState } from "react";
import './style.css';

const Navigation = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navigation">
        <div className="amali-logo">
          <img className="athlete2" src={"images/Amali.png"} alt="athlete"/>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} data-testid="nav-links">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">AboutUs</a></li>
            <li><a href="#athletes">Athletes</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="sponsor-button">Sponsor</button></li>
          </ul>
        </div>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} data-testid="hamburger-icon" onClick={toggleMenu}>
        <div className="humberger-bar"></div>
        <div className="humberger-bar"></div>
        <div className="humberger-bar"></div>
      </div>
    </nav>
  );
};
export default Navigation;