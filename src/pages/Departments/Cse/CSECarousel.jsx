import react from 'react';
import './CSECarousel.css';
import Carousel from 'react-bootstrap/Carousel';
// import cseCarousel01 from '../assets/cse-carousel-01.jpg';
// import cseCarousel02 from '../assets/cse-carousel-02.jpg';
// import cseCarousel03 from '../assets/cse-carousel-03.jpg';
// import cseCarousel04 from '../assets/cse-carousel-04.jpg';
// import cseCarousel05 from '../assets/cse-carousel-05.jpg';
// import cseCarousel06 from '../assets/cse-carousel-06.jpg';
// import cseCarousel07 from '../assets/cse-carousel-07.jpg';


function CSECarousel(){
    return (
        <div>
              <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '80vh', paddingBlock: '0vh' }}
            className="d-block w-100"
            src={cseCarousel01}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={cseCarousel02}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={cseCarousel03}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={cseCarousel04}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
    );
}

export default CSECarousel