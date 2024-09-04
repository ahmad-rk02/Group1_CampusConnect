import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import './CarouselPage.css';

function CarouselPage() {
  return (
    <div className='Carousel-container'>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '80vh', paddingBlock: '0vh' }}
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <div className="carousel-caption">
            <h3>Government College Of Engineering, Chandrapur</h3>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
          <div className="carousel-caption">
            <h3>Engineering Degree Programmes</h3>
            <p>Under Graduate & Post Graduate</p>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
          <div className="carousel-caption">
            <h3>Programmes & Events </h3>
            <p>Cultural & Curricular Activities</p>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel4}
            alt="Fourth slide"
          />
          <div className="carousel-caption">
            <h3>GCOEC</h3>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
