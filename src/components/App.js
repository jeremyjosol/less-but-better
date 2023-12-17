import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Sequence from './Sequence';
import Void from './Void';
import Simulation from './Simulation';

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
    </div>
  );
};

export default App;
