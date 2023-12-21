import React from 'react';
import Slider from 'react-slick';
import './InfiniteVoid.css';  
import movie from '../mp4/InfiniteVoid.mp4';

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
      <Slider {...infiniteVoidSettings}>
        <div>
          <div className="video-container">
            <video width="500px" height="240px" controls>
              <source src={movie} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteVoid;
