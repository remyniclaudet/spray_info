import React, { useEffect } from 'react';
import '../assets/styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-content > *');
    elements.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.15}s`;
      el.classList.add('animate-fade-up');
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Spray Info</span>
            <span className="hero-subtitle">L'Excellence Technologique</span>
          </h1>
          
          <p className="hero-text">
            Formation professionnelle et prestations techniques en développement logiciel, 
            solutions réseaux et communication digitale
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <span>Nous Contacter</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#services" className="btn btn-outline">
              Voir nos Prestations
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="tech-circle">
            <div className="tech-item" data-tech="Web">
              <i className="fas fa-globe"></i>
            </div>
            <div className="tech-item" data-tech="Mobile">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="tech-item" data-tech="Réseaux">
              <i className="fas fa-network-wired"></i>
            </div>
            <div className="tech-item" data-tech="Cloud">
              <i className="fas fa-cloud"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;