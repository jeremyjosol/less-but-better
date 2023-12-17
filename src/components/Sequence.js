import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './Sequence.css';
import { FaChevronDown } from 'react-icons/fa';

const Sequence = () => {
  const voidRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (voidRef.current) {
        const rect = voidRef.current.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInViewport && !isVisible) {
          setIsVisible(true);
        } else if (!isInViewport && isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div>
      <div className={`sequence-container ${isVisible ? 'sequence-visible' : ''}`} id="sequence">
        <h1 className="sequence1">Sequence</h1>
        <h1 className="sequence2">Sequence</h1>
        <h1 className="sequence3">Sequence</h1>
        <h1 className="sequence4">Sequence</h1>
        <h1 className="sequence5">Sequence</h1>
        <h1 className="sequence6">Sequence</h1>
        <h1 className="sequence7">Sequence</h1>
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
};

export default Sequence;



