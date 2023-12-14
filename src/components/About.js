import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container" id="about">
      <h2>Smoothed Particle Hydrodynamics</h2>
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
  );
};

export default About;