import React from 'react';
import Slider from 'react-slick';
import './Simulation.css';
import simulationOne from '../mp4/simulationOne.mp4';
import simulationTwo from '../mp4/simulationTwo.mp4';
import simulationThree from '../mp4/simulationThree.mp4';
import simulationFour from '../mp4/simulationFour.mp4';
import simulationFive from '../mp4/simulationSmoothedOne.mp4';
import simulationSix from '../mp4/simulationSmoothedTwo.mov';
import simulationSeven from '../mp4/simulationInteractOne.mov';
import simulationEight from '../mp4/simulationInteractTwo.mov';
import simulationNine from '../mp4/simulationInteractThree.mov';
import simulationTen from '../mp4/simulationInteractFour.mov';
import simulationEleven from '../mp4/simulationInteractFive.mov';
import prototypeOne from '../img/GizmoPrototype.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdHub } from 'react-icons/md';
import { GiChaingun } from "react-icons/gi";

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

const prototypeMedia = [
  { id: 1, type: 'photo', src: prototypeOne, title: 'Photo Title' },
  { id: 2, type: 'video', src: simulationOne, title: 'Video Title' },
  { id: 3, type: 'video', src: simulationTwo, title: 'Video Title' },
  { id: 4, type: 'photo', src: simulationThree, title: 'Photo Title' },
  { id: 5, type: 'video', src: simulationFour, title: 'Video Title' },
];
const kaizenVideos = [
  { id: 1, src: simulationFive, title: '' },
  { id: 2, src: simulationSix, title: '' },
  { id: 3, src: simulationSeven, title: ''},
  { id: 4, src: simulationEight, title: ''},
  { id: 5, src: simulationNine, title: ''},
  { id: 6, src: simulationTen, title: ''},
  { id: 7, src: simulationEleven, title: ''},
];

const Simulation = () => {
  return (
    <div className="simulation-container" id="simulation">
      <div className="slider-container">
        <h1 className="prototype">
          <MdHub className="prototype-icon" /> Prototype
        </h1>
        <Slider {...prototypeSettings}>
          {prototypeMedia.map((media) => (
            <div key={media.id}>
              <div className={media.type === 'photo' ? 'photo-container' : 'video-container'}>
                {media.type === 'photo' ? (
                  <img src={media.src} alt={media.title} />
                ) : (
                  <video width="500px" height="240px" controls>
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-container">
        <h1 className="prototype">
          <GiChaingun className="prototype-icon" /> Kaizen
        </h1>
        <Slider {...kaizenSettings}>
          {kaizenVideos.map((video) => (
            <div key={video.id}>
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
