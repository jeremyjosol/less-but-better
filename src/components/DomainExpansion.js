import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './DomainExpansion.css';
import { FaChevronDown } from 'react-icons/fa';
import { GiHolosphere } from "react-icons/gi";


const DomainExpansion = () => {
  const infiniteVoidRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (infiniteVoidRef.current) {
        const rect = infiniteVoidRef.current.getBoundingClientRect();
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
      <div ref={infiniteVoidRef} id="infinite-void" />
      <Link
        to="infinite-void"
        spy={true}
        smooth="easeInOutQuart"
        offset={750}
        duration={40}
        className="domain-down-icon"
      >
        <GiHolosphere />
      </Link>
      <div className={`domain-container ${isVisible ? 'domain-visible' : ''}`} id="domain">
        <h1 className="domain-header">DOMAIN EXPANSION</h1>
      </div>
    </div>
  );
};

export default DomainExpansion;
