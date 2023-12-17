import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Simulation.css';
import simulationOne from '../mp4/simulationOne.mp4';
import simulationTwo from '../mp4/simulationTwo.mp4';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false, 
};

const Simulation = () => {
  const sliderRef = useRef(null);
  const videos = [
    { id: 1, src: simulationOne, title: 'PHASE ONE' },
    { id: 2, src: simulationTwo, title: '' },
  ];

  const handleBeforeChange = (oldIndex, newIndex) => {
    const video = document.getElementById(`video-${oldIndex + 1}`);
    if (video) {
      video.pause();
      video.currentTime = 0; 
    }
  };

  const handleAfterChange = (index) => {
    const video = document.getElementById(`video-${index + 1}`);
    if (video) {
      video.play();
    }
  };

  return (
    <div className='simulation-container' id='simulation'>
      <Slider
        {...settings}
        ref={sliderRef}
        beforeChange={handleBeforeChange}
        afterChange={handleAfterChange}
      >
        {videos.map((video) => (
          <div key={video.id}>
            <h1 className="sequence-heading">{video.title}</h1>
            <div className="video-container">
              <video
                id={`video-${video.id}`}
                width="500px"
                height="240px"
                controls
                preload="auto"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Simulation;
