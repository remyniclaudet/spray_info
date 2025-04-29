import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containere">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="logo">Spray Info</h3>
            <p className="tagline">L'Excellence Technologique</p>
            <div className="social-links">
              <a href="https://web.facebook.com/profile.php?id=100083174350034&_rdc=1&_rdr" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://github.com/remyniclaudet" aria-label="Github"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/remy-niclaudet-razakatsara-57564b318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#home">Accueil</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#team">Équipe</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Nos Services</h4>
            <ul>
              <li><a href="#services">Développement Logiciel</a></li>
              <li><a href="#services">Solutions Réseaux</a></li>
              <li><a href="#services">Formation en Informatique</a></li>
              <li><a href="#services">Communication Digitale</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Fianarantsoa, Tanambao Fierenana, RN7</li>
              <li><i className="fas fa-phone-alt"></i> +261 34 28 467 14</li>
              <li><i className="fas fa-envelope"></i> heriniaina.wbs@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Spray Info. Tous droits réservés.</p>
          <div className="legal-links">
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;