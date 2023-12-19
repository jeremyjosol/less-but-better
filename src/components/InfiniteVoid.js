import React from 'react';
import Slider from 'react-slick';
import './InfiniteVoid.css';  
import simulationOne from '../mp4/simulationOptimizedOne.mp4';
import { GiGalaxy } from "react-icons/gi";

const infiniteVoidSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const InfiniteVoid = () => {
  return (
    <div className="slider-container">
      <h1 className="infinite-void">
        <GiGalaxy className="infinite-void-icon" /> Infinite Void
      </h1>
      <Slider {...infiniteVoidSettings}>
        <div>
          <div className="video-container">
            <video width="500px" height="240px" controls>
              <source src={simulationOne} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteVoid;
