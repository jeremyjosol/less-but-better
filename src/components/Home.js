import React from 'react';
import particles from '../img/Particles.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Home.css';

const Home = () => {
  const scrollToAbout = () => {
    scroll.scrollTo('about', {
      duration: 50,
      smooth: 'easeInOutQuart',
      offset: -55,
    });
  };

  return (
    <div className="home-container" id="home">
      <div className="hero-layout">
        <div className="text-container">
          <h2 className='project-title'>Less, But Better.</h2>
          <p>
            Welcome to exploration. This application was designed with the intention of observing and interacting with <strong className='strength'>Smoothed Particle Hydrodynamics</strong> via <em>Unity</em>.
          </p>
          <p className='p2'>
            Inspired by the ethos of Dieter Rams, we present our findings with as little design as possible, allowing the essence of <strong className='strength2'>SPH</strong> to unfold organically.
          </p>
          <ScrollLink
            className="btn btn-primary learn-more"
            to="about"
            spy={true}
            smooth={true}
            offset={-55}
            duration={50}
            onClick={scrollToAbout}
          >
            LEARN MORE
          </ScrollLink>
        </div>
        <div className="image-container">
          <img src={particles} alt="Modern particles." />
        </div>
      </div>
    </div>
  );
};

export default Home;
