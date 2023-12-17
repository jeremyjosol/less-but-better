import React, { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './Sequence.css';
import { FaChevronDown } from "react-icons/fa";

const Sequence = () => {
  const voidRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (voidRef.current) {
        const rect = voidRef.current.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport) {
          console.log('Section with ID "void" is in the viewport');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToVoid = () => {
    scroll.scrollTo(voidRef.current.offsetTop, {
      duration: 500,
      smooth: 'easeInOutQuart',
      offset: -150,
    });
  };

  return (
    <div>
      <div className="sequence-container" id='sequence'>
        <h1 className='sequence1'>Sequence</h1>
        <h1 className='sequence2'>Sequence</h1>
        <h1 className='sequence3'>Sequence</h1>
        <h1 className='sequence4'>Sequence</h1>
        <h1 className='sequence5'>Sequence</h1>
        <h1 className='sequence6'>Sequence</h1>
        <h1 className='sequence7'>Sequence</h1>
        <div ref={voidRef} id="void" />
      </div>
      <div className="sequence-down-icon" onClick={scrollToVoid}>
        <FaChevronDown />
      </div>
    </div>
  );
}

export default Sequence;


