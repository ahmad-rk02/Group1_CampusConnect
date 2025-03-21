import React from 'react';
import './CSECarousel.css';
import Carousel from 'react-bootstrap/Carousel';

// const cseCarousel01 = require('../assets/cse-carousel-01.jpg');
// const cseCarousel02 = require('../assets/cse-carousel-02.jpg');
// const cseCarousel03 = require('../assets/cse-carousel-03.jpg');
// const cseCarousel04 = require('../assets/cse-carousel-04.jpg');

import cseCarousel01 from '../../assets/cse-carousel-01.jpg';
import cseCarousel02 from '../../assets/cse-carousel-02.jpg';
import cseCarousel03 from '../../assets/cse-carousel-03.jpg';
import cseCarousel04 from '../../assets/cse-carousel-04.jpg';
import cseCarousel05 from '../../assets/cse-carousel-05.jpg';
import cseCarousel06 from '../../assets/cse-carousel-06.jpg';
import cseCarousel07 from '../../assets/cse-carousel-07.jpg';


function CSECarousel() {
  return (
    <div>

      <Carousel interval={2000} className='cse-carousel w-100'>
        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel01}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel02}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel03}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel04}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel05}
            alt="Fifth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel06}
            alt="Sixth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={cseCarousel07}
            alt="Seventh slide"
          />
        </Carousel.Item>
      </Carousel>


    </div>
  );
}

export default CSECarousel