import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Sequence.css';
import { FaChevronDown } from "react-icons/fa";

const Sequence = () => {
  const voidRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (voidRef.current) {
        const rect = voidRef.current.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <Link
        to="void"
        spy={true}
        smooth="easeInOutQuart"
        offset={255}
        duration={40}
        className="sequence-down-icon"
      >
        <FaChevronDown />
      </Link>
    </div>
  );
}

export default Sequence;



