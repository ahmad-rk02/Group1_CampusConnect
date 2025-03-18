import React from 'react';
import './Home.css';
import Topcards from './Topcards';
import CarouselPage from "./CarouselPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <ErrorBoundary>
                <Counter className="counter-section" />
            </ErrorBoundary>
            <Research className="research-section" />
        </div>
    );
}

export default Home;
