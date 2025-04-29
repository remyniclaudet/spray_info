import React, { useEffect } from 'react';
import hero from '../assets/images/hero.png';
import '../assets/styles/About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header-about" data-animate>
          <h2>À <span className="text-gradient">Propos</span></h2>
          <p className="section-subtitle">Notre expertise au service de votre réussite</p>
        </div>

        <div className="about-grid">
          <div className="about-card" data-animate>
            <div className="card-icon">
              <i className="fas fa-history"></i>
            </div>
            <h3>Notre histoire</h3>
            <div className="card-content-about">
              <p>
                <span className="highlight">Spray Info</span> est un centre de formation et prestations techniques fondé en 2022 par trois ingénieurs en informatique.
              </p>
              <p>
                Nous avons commencé avec 2 étudiants et formons aujourd'hui plus de <span className="highlight">100</span> personnes chaque année.
              </p>
            </div>
          </div>

          <div className="about-card" data-animate>
            <div className="card-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Nos Prestations</h3>
            <div className="card-content">
              <ul className="expertise-list">
                <li>
                  <i className="fas fa-code"></i>
                  <span>Développement logiciel sur mesure</span>
                </li>
                <li>
                  <i className="fas fa-network-wired"></i>
                  <span>Solutions réseaux sécurisées</span>
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i>
                  <span>Applications mobile et web</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-image" data-animate>
            <img src={hero} alt="Équipe Spray Info" />
            <div className="achievement-badge">
              <span className="badge-number">100+</span>
              <span className="badge-text">Clients satisfaits</span>
            </div>
          </div>

          <div className="about-card" data-animate>
            <div className="card-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Notre mission</h3>
            <div className="card-content-about">
              <p>
                Former les talents de demain et fournir des solutions technologiques innovantes 
                pour accompagner la transformation digitale des entreprises.
              </p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export default About;