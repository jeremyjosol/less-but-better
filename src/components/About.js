import React, { useEffect, useRef } from 'react';
import techParticles from '../img/TechParticles.jpg';
import './About.css';

const About = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current.classList.add('active');
          } else {
            titleRef.current.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="about-hero-layout">
        <div className="about-image-container">
          <img src={techParticles} alt="Particles" />
        </div>
        <div className="about-text-container">
          <h2 ref={titleRef} className="essence fade-in">
            Essence
          </h2>
          <p>
            Smoothed Particle Hydrodynamics (SPH) is a computational method used for
            simulating fluid flows. It represents fluid as a set of particles and
            applies smoothed interpolation functions to calculate fluid properties at
            each particle location.
          </p>
          <p>
            SPH simulations are widely used in various fields, including fluid
            dynamics, astrophysics, and computer graphics, providing a versatile
            approach to model complex fluid behaviors.
          </p>        
        </div>
      </div>
    </div>
  );
};

export default About;