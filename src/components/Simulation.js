import React from 'react';
import Slider from 'react-slick';
import './Simulation.css';
import prototypeOne from '../img/GizmoPrototype.jpg';
import simulationFive from '../mp4/simulationSmoothedOne.mp4';
import simulationSix from '../mp4/simulationSmoothedTwo.mov';
import simulationSeven from '../mp4/simulationInteractOne.mov';
import simulationEight from '../mp4/simulationInteractTwo.mov';
import simulationNine from '../mp4/simulationInteractThree.mov';
import simulationTen from '../mp4/simulationInteractFour.mov';
import simulationEleven from '../mp4/simulationInteractFive.mov';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdHub } from 'react-icons/md';
import { GiChaingun } from 'react-icons/gi';

const modelSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

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

const modelMedia = [
  { id: 1, type: 'photo', src: prototypeOne, title: 'Gizmo Prototype' },
  { id: 2, type: 'photo', src: prototypeOne, title: 'Gizmo Prototype' },
  { id: 3, type: 'photo', src: prototypeOne, title: 'Gizmo Prototype' },
  { id: 4, type: 'photo', src: prototypeOne, title: 'Gizmo Prototype' },
  { id: 5, type: 'photo', src: prototypeOne, title: 'Gizmo Prototype' },
];

const prototypeVideos = [
  { id: 1, src: simulationFive, title: 'Simulation Five' },
  { id: 2, src: simulationSix, title: 'Simulation Six' },
  { id: 3, src: simulationSeven, title: 'Simulation Seven' },
  { id: 4, src: simulationEight, title: 'Simulation Eight' },
  { id: 5, src: simulationNine, title: 'Simulation Nine' },
  { id: 6, src: simulationTen, title: 'Simulation Ten' },
  { id: 7, src: simulationEleven, title: 'Simulation Eleven' },
];

const kaizenVideos = [
  { id: 1, src: simulationFive, title: 'Simulation Five' },
  { id: 2, src: simulationSix, title: 'Simulation Six' },
  { id: 3, src: simulationSeven, title: 'Simulation Seven' },
  { id: 4, src: simulationEight, title: 'Simulation Eight' },
  { id: 5, src: simulationNine, title: 'Simulation Nine' },
  { id: 6, src: simulationTen, title: 'Simulation Ten' },
  { id: 7, src: simulationEleven, title: 'Simulation Eleven' },
];

const Simulation = () => {
  return (
    <div className="simulation-container" id="simulation">
      <div className="slider-container">
        <h1 className="prototype">
          <MdHub className="prototype-icon" /> Model
        </h1>
        <Slider {...modelSettings}>
          {modelMedia.map((media) => (
            <div key={media.id}>
              <div className={media.type === 'photo' ? 'photo-container' : 'video-container'}>
                {media.type === 'photo' ? (
                  <img width="100%" src={media.src} alt={media.title} />
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
          <MdHub className="prototype-icon" /> Prototype
        </h1>
        <Slider {...prototypeSettings}>
          {prototypeVideos.map((video) => (
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
