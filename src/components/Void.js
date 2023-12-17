import React, { useRef, useEffect } from 'react';
import './RotatingCuboid.css';

const Void = () => {
  const cuboidRef = useRef();

  useEffect(() => {
    const rotateCuboid = () => {
      cuboidRef.current.style.transform = `rotateX(${Date.now() / 20}deg) rotateY(${Date.now() / 30}deg)`;
      requestAnimationFrame(rotateCuboid);
    };

    rotateCuboid();
  }, []);

  return (
    <div className="cuboid-container" ref={cuboidRef}>
      <div className="face front"></div>
      <div className="face back"></div>
      <div className="face left"></div>
      <div className="face right"></div>
      <div className="face top"></div>
      <div className="face bottom"></div>
    </div>
  );
};

export default Void;
