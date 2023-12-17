import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Sequence from './Sequence';
import Void from './Void';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Sequence />
      <div className='cuboid'>
        <Void />
      </div>
    </div>
  );
};

export default App;
