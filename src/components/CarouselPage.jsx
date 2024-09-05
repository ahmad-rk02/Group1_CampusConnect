import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'
import carousel4 from '../assets/carousel4.jpg'
import './CarouselPage.css'

function CarouselPage() {
  return (
    <div className='Carousel-container'>
    <Carousel >
    <Carousel.Item>
      <img style={{height:'90vh', paddingBlock: '0vh'}}
        className="d-block w-100"
        src={carousel1}
        alt="First slide"
      />
      
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={carousel2}
        alt="Second slide"
      />
      
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={carousel3}
        alt="Third slide"
      />
      
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'90vh'}}
        className="d-block w-100"
        src={carousel4}
        alt="Fourth slide"
      />
      
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage