import React, { useState } from 'react';
import './Home.css';
import Topcards from './Topcards';
import universityBuilding from '../assets/university-building.jpg';
import collegeBuilding from '../assets/main-building-photo.jpg';
import universityNews from '../assets/clg-news.jpg';
import CarouselPage from "./CarouselPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Research from './Research'
import Counter from './Counter'
import CIIT from './CIIT'
import WelcomeSection from './welcomepage';





function Home() {
    return (
        <div className="home-container">
            <CarouselPage className="carousel-section" />
            <WelcomeSection className="welcome-section" />
            <Topcards className="topcards-section" />
            <CIIT className="ciit-section" />
            <Counter className="counter-section" />
            <Research className="research-section" />

        </div>
    );
}

export default Home;