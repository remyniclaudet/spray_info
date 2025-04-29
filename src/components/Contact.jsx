import React from 'react';
import '../assets/styles/Contact.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="containere">
        <div className="contact-container">
          <div className="contact-info" data-animate>
            <h2>Contactez <span className="text-gradient">Nous</span></h2>
            <p className="contact-description">
              Prêt à démarrer votre projet ou à rejoindre nos formations ? 
              Notre équipe est à votre écoute pour répondre à toutes vos questions.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Adresse</h4>
                  <p>Fianarantsoa, Tanambao Fierenana, RN7</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Téléphone</h4>
                  <p>+261 34 28 467 14</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>heriniaina.wbs@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;