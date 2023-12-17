import React from 'react';
import Slider from 'react-slick';
import './Simulation.css';
import simulationOne from '../mp4/simulationOne.mp4';
import simulationTwo from '../mp4/simulationTwo.mp4';
import simulationThree from '../mp4/simulationThree.mp4';
import simulationFour from '../mp4/simulationFour.mp4';
import simulationFive from '../mp4/simulationSmoothedOne.mp4';
import simulationSix from '../mp4/simulationSmoothedTwo.mp4';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdHub } from 'react-icons/md';

const prototypeSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const kaizenSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const prototypeVideos = [
  { id: 1, src: simulationOne, title: '' },
  { id: 2, src: simulationTwo, title: '' },
  { id: 3, src: simulationThree, title: '' },
  { id: 4, src: simulationFour, title: '' },
];

const kaizenVideos = [
  { id: 1, src: simulationFive, title: '' },
  { id: 2, src: simulationSix, title: '' },
];

const Simulation = () => {
  return (
    <div className="simulation-container" id="simulation">
      <div className="slider-container">
        <h1 className="prototype">
          <MdHub className="prototype-icon" /> Prototype
        </h1>
        <Slider {...prototypeSettings}>
          {prototypeVideos.map((video) => (
            <div key={video.id}>
              <h1 className="sequence-heading">{video.title}</h1>
              <div className="video-container">
                <video width="500px" height="240px" controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-container">
        <h1 className="prototype">
          <MdHub className="prototype-icon" /> Kaizen
        </h1>
        <Slider {...kaizenSettings}>
          {kaizenVideos.map((video) => (
            <div key={video.id}>
              <h1 className="sequence-heading">{video.title}</h1>
              <div className="video-container">
                <video width="500px" height="240px" controls>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Simulation;
