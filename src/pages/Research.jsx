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
        <div className="main-research col-md-12">
            <h3 className="text-center mb-0">Research</h3>

            <Carousel
                className='carousel-cont'
                style={{ width: "1400px", margin: "50px auto" }}
                interval={1000} // 1 second interval between transitions
                controls={false} // Optional: Display previous/next controls
                indicators={false} // Optional: Show indicators
                pause={'hover'} // Pauses when hovered
                wrap={true} // Wrap the carousel at the end
            >
                {/* First Set of Slides */}
                <Carousel.Item className='carousel-item-01 d-flex'>
                    <div className='d-flex justify-content-center'>
                        <div className='research-div p-1 m-5' style={{ width: "375px" }}>
                            <img className="d-flex w-100" src={research01} alt="First slide" />
                            <p>PERFORMING COMPLEX ENGINEERING</p>
                        </div>
                        <div className='research-div p-1 m-5' style={{ width: "375px" }}>
                            <img className="d-flex w-100" src={research02} alt="Second slide" />
                            <p>NEXT GENERATION CONCEPT</p>
                        </div>
                        <div className='research-div p-1 m-5' style={{ width: "375px" }}>
                            <img className="d-flex w-100" src={research03} alt="Third slide" />
                            <p>INDUSTRY ORIENTED ENGINEERING</p>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Second Set of Slides */}
                <Carousel.Item className='carousel-item-02 d-flex '>
                    <div className='d-flex justify-content-center'>
                        <div className='research-div p-1 m-5' style={{ width: "375px" }}>
                            <img className="d-flex w-100" src={research04} alt="Fourth slide" />
                            <p>ECHO-FRIENDLY ENGINEERING</p>
                        </div>
                        <div className='research-div p-1 m-5' style={{ width: "375px" }}>
                            <img className="d-flex w-100" src={research05} alt="Fifth slide" />
                            <p>USE OF ADVANCE TECHNOLOGY</p>
                        </div>
                        <div className='research-div p-1 m-5' style={{ width: "375px" }}>
                            <img className="d-flex w-100" src={research06} alt="Sixth slide" />
                            <p>USE OF RENEWABLE ENERGY</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Research;




