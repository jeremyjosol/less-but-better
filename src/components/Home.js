// Home.js
import React from 'react';
import particles from '../img/Particles.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="hero-layout">
        <div className="text-container">
          <h2 className='project-title'>Less, But Better.</h2>
          <p>
            Welcome to our exploration. This application was designed with the intention of observing <strong className='strength'>Smoothed Particle Hydrodynamics</strong> and interacting with it via <em>Unity</em>.
          </p>
          <p>
            SPH simulations are widely used in various fields, including fluid dynamics, astrophysics, and computer graphics, modeling complex fluid behaviors.
          </p>
        </div>
        <div className="image-container">
          <img src={particles} alt="Dieter Rams style dots." />
        </div>
      </div>
    </div>
  );
}

export default Home;
