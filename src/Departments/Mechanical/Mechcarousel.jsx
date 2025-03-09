import React from 'react';
import './Mechcarousel.css';
import Carousel from 'react-bootstrap/Carousel';

// const MechCarousel01 = require('../assets/Mech-carousel-01.jpg');
// const MechCarousel02 = require('../assets/Mech-carousel-02.jpg');
// const MechCarousel03 = require('../assets/Mech-carousel-03.jpg');
// const MechCarousel04 = require('../assets/Mech-carousel-04.jpg');

import MechCarousel01 from '../../assets/instru1.jpg';
import MechCarousel02 from '../../assets/instru2.jpg';
import MechCarousel03 from '../../assets/instru3.jpg';
import MechCarousel04 from '../../assets/instru4.jpg';
import MechCarousel05 from '../../assets/instru5.jpg';



function Mechcarousel() {
  return (
    <div>

      <Carousel interval={1500} className='Mech-carousel w-100'>
        <Carousel.Item>
          <img

            className="d-block "
            src={MechCarousel01}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={MechCarousel02}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={MechCarousel03}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={MechCarousel04}
            alt="Fourth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img

            className="d-block "
            src={MechCarousel05}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>


    </div>
  );
}

export default Mechcarousel