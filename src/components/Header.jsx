import '../assets/styles/Header.css';
import logo from '../assets/images/s.png';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <img src={logo} alt="Logo Spray Info" className="logo" />
        
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Accueil</a>
          <a href="#about">À Propos</a>
          <a href="#services">Services</a>
          <a href="#team">Équipe</a>
          <a href="#contact" className="cta-nav">Contact</a>
        </nav>

        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;