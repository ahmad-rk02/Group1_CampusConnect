import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/mainGate.jpg';
import carousel2 from '../assets/mainBuilding.jpg';
import carousel3 from '../assets/Library.jpg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/cse-carousel-01.jpg';
import carousel8 from '../assets/mechanicalDept.jpg';
import carousel9 from '../assets/civilDept.jpg';
import carousel10 from '../assets/electricDept.jpg';

import './CarouselPage.css';

function CarouselPage() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='Carousel-container-4'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel1}
            alt="First slide"
          />
          <div className="carousel-caption">
            <h2>Government College Of Engineering, Chandrapur</h2>
            <button className="more-button" onClick={() => handleNavigation('/aboutinstitute')}>More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel2}
            alt="Second slide"
          />
          <div className="carousel-caption">
            <h2>Engineering Degree Programmes</h2>
            <p>Under Graduate & Post Graduate</p>
            <button className="more-button" onClick={() => handleNavigation('/ug')}>More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel3}
            alt="Third slide"
          />
          <div className="carousel-caption">
            <h2>Programmes & Events</h2>
            <p>Cultural & Curricular Activities</p>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel4}
            alt="Fourth slide"
          />
          <div className="carousel-caption">
            <h2>Govt. College of Engineering, Chandrapur</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel5}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>Computer Science and Engineering</h2>
            <button className="more-button" onClick={() => handleNavigation('/aboutinstitute')}>More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel8}
            alt="Mechanical Engineering"
          />
          <div className="carousel-caption">
            <h2>Mechanical Engineering</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel9}
            alt="Civil Engineering"
          />
          <div className="carousel-caption">
            <h2>Civil Engineering</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={carousel10}
            alt="Electrical Engineering"
          />
          <div className="carousel-caption">
            <h2>Electrical Engineering</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
