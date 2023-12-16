import React from 'react';
import './Sequence.css';
import simulationOne from '../mp4/simulationOne.mp4';

const Sequence = () => {
  return (
    <div className="sequence-container" id='sequence'>
      <h1 className='sequence1'>Sequence</h1>
      <h1 className='sequence2'>Sequence</h1>
      <h1 className='sequence3'>Sequence</h1>
      <h1 className='sequence4'>Sequence</h1>
      <h1 className='sequence5'>Sequence</h1>
      <h1 className='sequence6'>Sequence</h1>
      <h1 className='sequence7'>Sequence</h1>

      <video width="320" height="240" controls>
        <source src={simulationOne} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Sequence;

