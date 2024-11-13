import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Research.css';

import research01 from '../assets/research-img-01.jpg';
import research02 from '../assets/research-img-02.jpg';
import research03 from '../assets/research-img-03.jpg';
import research04 from '../assets/research-img-04.jpg';
import research05 from '../assets/research-img-05.jpg';
import research06 from '../assets/research-img-06.jpg';

const Research = () => {
  return (
    <div className="main-research col-12">
      <h3 className="text-center">Research</h3>
      <Carousel interval={1000} pause="hover">
        {/* First Slide */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block"
              src={research01}
              alt="First slide"
            />
            <img
              className="d-block"
              src={research02}
              alt="First slide"
            />
            <img
              className="d-block"
              src={research03}
              alt="First slide"
            />
          </div>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block"
              src={research04}
              alt="Second slide"
            />
            <img
              className="d-block"
              src={research05}
              alt="Second slide"
            />
            <img
              className="d-block"
              src={research06}
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Research;
