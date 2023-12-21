import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import techParticles from '../img/TechParticles.jpg';
import './About.css';
import { FaChevronDown } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";

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
    <div className='about-container' id='about'>
      <div className='about-hero-layout'>
        <div className='about-image-container'>
          <img src={techParticles} alt='Particles' />
        </div>
        <div className='about-text-container'>
          <h2 ref={titleRef} className='essence fade-in'>
            Essence
          </h2>
          <p>
            <span className='sph'>SMOOTHED PARTICLE HYDRODYNAMICS</span>
            <br />
            <br />
            A computational method used for simulating fluid flows. It represents fluid
            as a set of particles and applies smoothed interpolation functions to
            calculate fluid properties at each particle location.
          </p>
          <p>
            SPH simulations are widely used in various fields, including fluid
            dynamics, astrophysics, and computer graphics, providing a versatile
            approach to model complex fluid behaviors.
          </p>
        <a
          href='https://matthias-research.github.io/pages/publications/sca03.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='research-link'
        >
          RESEARCH
        </a>
        <a
          href='https://github.com/jeremyjosol/less-but-better/tree/main/Assets'
          target='_blank'
          rel='noopener noreferrer'
          className='development-link'
        >
          <FaGithub /> DEVELOPMENT
        </a>
        </div>
        <Link
          to='sequence'
          activeClass='active'
          spy={true}
          smooth='easeInOutQuart'
          offset={0}
          duration={50}
          className='down-icon'
        >
          <FaChevronDown />
        </Link>
      </div>
    </div>
    
  );
};

export default About;
