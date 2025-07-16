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
      title: "Université Privé",
      description: "Former des futurs experts de l'informatique, alliant expertise académique et savoir-faire pratique pour répondre aux défis du monde numérique.",
      icon: "fas fa-university",
      color: "#d97706"
    },
       {
      title: "Formation en Informatique",
      description: "Cours approfondis en programmation, réseaux et systèmes.",
      icon: "fas fa-laptop-code",
      color: "#7c3aed"
    },
    {
      title: (
        <div style={{ textAlign: "center", fontSize: "1rem"}}>
          <div>Développement personnel</div>
          <div style={{ fontWeight: 'bold', fontSize: "1rem", marginTop: 2 ,}}>
            Communication et Marketing digital
          </div>
        </div>
      ),
      description: (
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li>Ateliers pour améliorer confiance en soi et leadership.</li>
          <li>Stratégies de communication efficace pour le milieu professionnel.</li>
          <li>Stratégies de marketing en ligne.</li>
        </ul>
      ),
      icon: "fas fa-comments",
      color: "#db2777"
    },
    {
      title: "Autres services numériques",
      description: "",
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