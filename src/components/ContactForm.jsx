import React, { useState } from 'react';
import '../assets/styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simuler un envoi de formulaire
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-animate>
      <h3 className="form-title">Envoyez-nous un message</h3>
      
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Votre nom complet"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <span className="input-border"></span>
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className="input-border"></span>
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Votre message..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <span className="input-border"></span>
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> Envoi en cours...
          </>
        ) : (
          <>
            Envoyer <i className="fas fa-paper-plane"></i>
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="form-alert success">
          <i className="fas fa-check-circle"></i>
          Message envoyé avec succès !
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="form-alert error">
          <i className="fas fa-exclamation-circle"></i>
          Une erreur est survenue. Veuillez réessayer.
        </div>
      )}
    </form>
  );
};

export default ContactForm;