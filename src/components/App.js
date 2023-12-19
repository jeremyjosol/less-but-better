import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Sequence from './Sequence';
import Void from './Void';
import Simulation from './Simulation';
import DomainExpansion from './DomainExpansion';
import InfiniteVoid from './InfiniteVoid';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Sequence />
      <div className='cuboid' id='void'>
        <Void />
      </div>
      <Simulation />
      <DomainExpansion />
      <InfiniteVoid />
    </div>
  );
};

export default App;
