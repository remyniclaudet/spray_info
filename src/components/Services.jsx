import React, { useEffect } from 'react';
import '../assets/styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "Développement Logiciel",
      description: "Applications web, mobile et desktop sur mesure pour votre entreprise.",
      icon: "fas fa-code",
      color: "#2563eb"
    },
    {
      title: "Solutions Réseaux",
      description: "Infrastructures réseau sécurisées et optimisées pour vos besoins.",
      icon: "fas fa-network-wired",
      color: "#059669"
    },
    {
      title: "Formation en Informatique",
      description: "Cours approfondis en programmation, réseaux et systèmes.",
      icon: "fas fa-laptop-code",
      color: "#7c3aed"
    },
    {
      title: "Développement Personnel",
      description: "Ateliers pour améliorer confiance en soi et leadership.",
      icon: "fas fa-chart-line",
      color: "#d97706"
    },
    {
      title: "Communication Digitale",
      description: "Stratégies de communication efficace pour le milieu professionnel.",
      icon: "fas fa-comments",
      color: "#db2777"
    },
    {
      title: "Marketing Digital",
      description: "Stratégies de marketing en ligne et gestion des réseaux sociaux.",
      icon: "fas fa-bullhorn",
      color: "#9333ea"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header" data-animate>
          <h2>Nos <span className="text-gradient">Services</span></h2>
          <p className="section-subtitle">
            Des solutions complètes allant du développement logiciel aux infrastructures réseau
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-animate
              style={{ '--accent': service.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="card-icon" style={{ background: service.color }}>
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="card-link">
                En savoir plus <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;