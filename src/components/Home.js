import React from 'react';
import particles from '../img/Particles.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Home.css';
import { FaUnity } from "react-icons/fa6";

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
          <h2 className='project-title'>Less<span className='comma'>,</span> But Better</h2>
          <p>
            Welcome to our exhibition. This application was designed with intention of observation and interaction with <strong className='strength'>Smoothed Particle Hydrodynamics</strong> via <a href='https://unity.com/'><FaUnity className='unity'/><em>Unity</em></a>.
          </p>
          <p className='p2'>
            Inspired by the ethos of Dieter Rams, we present our findings
            <br />
            with <em className='aldap'> as little design as possible</em>, allowing the essence of 
            <br />
            <strong className='strength2'>smoothed particle hydrodynamics</strong> to unfold organically.
          </p>
          <ScrollLink
            className="btn btn-primary learn-more"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
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
