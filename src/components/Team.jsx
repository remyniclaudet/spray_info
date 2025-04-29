import React, { useEffect } from 'react';
import dir from '../assets/images/heriniaina.jpg';
import pdg from '../assets/images/4.png'
import dev from '../assets/images/6.png'
import malala from '../assets/images/5.png'
import '../assets/styles/Team.css';
import '../assets/styles/Layout.css'

const team = [
  {
    name: "RAMANANJANAHARY Heriniaina Jacquino",
    role: "Directeur Général Formateur..",
    photo: pdg,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "RALANTOHARIJAONA Malala",
    role: "IT Manager",
    photo: malala,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "RAZAKATSARA Remy Niclaudet",
    role: "Développeur FullStack Designer Graphique",
    photo: dev,
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
];

const Team = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.team-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="team section-padding">
      <div className="containere">
        <div className="section-header" data-animate>
          <h2>Notre <span className="text-gradient">Équipe</span></h2>
          <p className="section-subtitle">Des experts passionnés par votre réussite</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <div 
              className="team-card" 
              key={index}
              data-animate
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="card-image">
                <img src={member.photo} alt={member.name} />
                <div className="social-links">
                  <a href={member.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href={member.social.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.social.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="card-content">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default Team;