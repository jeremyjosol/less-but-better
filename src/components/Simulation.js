import React from 'react';
import Slider from 'react-slick';
import './Simulation.css';
import modelOne from '../img/GizmoPrototype.jpg';
import modelTwo from '../img/Grid.jpg';
import prototypeOne from '../mp4/simulationOne.mp4';
import prototypeTwo from '../mp4/simulationTwo.mp4';
import prototypeThree from '../mp4/simulationThree.mp4';
import prototypeFour from '../mp4/simulationFour.mp4';
import kaizenOne from '../mp4/simulationSmoothedOne.mp4';
import kaizenTwo from '../mp4/simulationSmoothedTwo.mov';
import kaizenThree from '../mp4/simulationInteractOne.mov';
import kaizenFour from '../mp4/simulationInteractTwo.mov';
import kaizenFive from '../mp4/simulationInteractThree.mov';
import kaizenSix from '../mp4/simulationInteractFour.mov';
import kaizenSeven from '../mp4/simulationInteractFive.mov';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdHub } from 'react-icons/md';
import { GiChaingun } from 'react-icons/gi';
import { GiAbstract069 } from "react-icons/gi";

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
  { id: 1, type: 'photo', src: modelOne, title: 'Gizmo' },
  { id: 2, type: 'photo', src: modelTwo, title: 'Grid' },
];

const prototypeVideos = [
  { id: 1, src: prototypeOne, title: '' },
  { id: 2, src: prototypeTwo, title: '' },
  { id: 3, src: prototypeThree, title: '' },
  { id: 4, src: prototypeFour, title: '' },
];

const kaizenVideos = [
  { id: 1, src: kaizenOne, title: '' },
  { id: 2, src: kaizenTwo, title: '' },
  { id: 3, src: kaizenThree, title: '' },
  { id: 4, src: kaizenFour, title: '' },
  { id: 5, src: kaizenFive, title: '' },
  { id: 6, src: kaizenSix, title: '' },
  { id: 7, src: kaizenSeven, title: '' },
];

const Simulation = () => {
  return (
    <div className="simulation-container" id="simulation">
      <div className="slider-container">
        <h1 className="prototype">
          <GiAbstract069 className="prototype-icon" /> MODEL
        </h1>
        <Slider {...modelSettings}>
          {modelMedia.map((media) => (
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
          <MdHub className="prototype-icon" /> PROTOTYPE
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
          <GiChaingun className="prototype-icon" /> KAIZEN
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
