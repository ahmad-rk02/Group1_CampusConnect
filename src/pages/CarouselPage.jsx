import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../assets/mainGate.jpg';
import carousel2 from '../assets/mainBuilding.jpg';
import carousel3 from '../assets/Library.jpg';
import carousel4 from '../assets/carousel4.jpg';
// import carousel5 from '../assets/Library.jpg';
// import carousel6 from '../assets/mainBuilding.jpg';
// import carousel7 from '../assets/mainGate.jpg';
import carousel5 from '../assets/cse-carousel-01.jpg'
import carousel8 from '../assets/mechanicalDept.jpg'
import carousel9 from '../assets/civilDept.jpg';
import carousel10 from '../assets/electricDept.jpg';


import './CarouselPage.css';

function CarouselPage() {
  return (
    <div className='Carousel-container-4'>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '80vh', paddingBlock: '0vh' }}
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
          />
          <div className="carousel-caption">
            <h2>Government College Of Engineering, Chandrapur</h2>
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
            <h2>Engineering Degree Programmes</h2>
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
            <h2>Programmes & Events </h2>
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
            <h2>GOVT. COLLEGE OF ENGINEERING, CHANDRAPUR</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel5}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>COMPUTER SCIENCE AND ENGINEERING</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        {/* <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel6}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>GOVT. COLLEGE OF ENGINEERING, CHANDRAPUR</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel7}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>GOVT. COLLEGE OF ENGINEERING, CHANDRAPUR</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item> */}

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel8}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>MECHANICAL ENGINEERING</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel9}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>CIVIL ENGINEERING</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={carousel10}
            alt="Fifth slide"
          />
          <div className="carousel-caption">
            <h2>ELECTRICAL ENGINEERING</h2>
            <button className="more-button">More</button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;