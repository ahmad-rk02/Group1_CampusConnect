import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, event) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => setIndex((prevIndex) => prevIndex + 1), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path/to/image1.jpg" // Replace with your image path
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>Conveyor</h3>
          <p>Description for conveyor</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path/to/image2.jpg" // Replace with your image path
          alt="Second Slide"
        />
        <Carousel.Caption>
          <h3>Robotics</h3>
          <p>Description for robotics</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path/to/image3.jpg" // Replace with your image path
          alt="Third Slide"
        />
        <Carousel.Caption>
          <h3>Industrial Equipment</h3>
          <p>Description for industrial equipment</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel; 