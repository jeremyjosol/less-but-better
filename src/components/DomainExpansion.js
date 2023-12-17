import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './DomainExpansion.css';
import { FaChevronDown } from 'react-icons/fa';

const DomainExpansion = () => {
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
      <div className={`domain-container ${isVisible ? 'domain-visible' : ''}`} id="domain">
        <h1 className="domain-header">DOMAIN EXPANSION</h1>
        <div ref={voidRef} id="void" />
      </div>
      <Link
        to="void"
        spy={true}
        smooth="easeInOutQuart"
        offset={255}
        duration={40}
        className="domain-down-icon"
      >
        <FaChevronDown />
      </Link>
    </div>
  );
};

export default DomainExpansion;
