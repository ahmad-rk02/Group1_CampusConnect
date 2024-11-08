import React from 'react';
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

function NewsSection() {
    return (
        <div className="col-md-5 news-section">
            <div className="section-title">News</div>
            <Carousel>
                {[{
                    img: collegeBuilding,
                    title: "CHANDRAPUR GOVERNMENT ENGINEERING COLLEGE GETS NBA STATUS",
                    text: "As per the central government's policy, two departments of machine and electrical engineering at Chandrapur Government Engineering College have been accorded special status by the NBA...",
                }, {
                    img: universityBuilding,
                    title: "UGC APPROVES GONDWANA UNIVERSITY TO RECEIVE CENTRAL FUNDS",
                    text: "Gondwana University in Gadchiroli District was declared fit to receive central funds by the University Grants Commission (UGC)...",
                }, {
                    img: universityNews,
                    title: "PRESIDENT MURMU TO ATTEND GONDWANA UNIVERSITY CONVOCATION DURING MAHA VISIT",
                    text: "President Droupadi Murmu has arrived in Nagpur on a visit to Maharashtra where she will address the convocation of the Gondwana University...",
                }].map((news, index) => (
                    <Carousel.Item interval={2000} key={index}>
                        <div className="card1 shadow">
                            <img src={news.img} className="card-img-top" alt="College" />
                            <div className="card-body">
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text">{news.text}</p>
                                <button href="#" className="news-btn btn-primary">More</button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

function EventsSection() {
    const events = [
        "Girls Hostel Direct Second Year Allotment Round I 2023-24",
        "Boys Hostel Direct Second Year Allotment Round I 2023-24",
        "Direct Second Year Girls Hostel Provisional Allotment Merit List 2023-24",
        "Direct Second Year Boys Hostel Provisional Allotment Merit List 2023-24",
        "First Year Girls Quarter Allotment Round I 2023-24",
        "Girls Hostel First year Allotment Round II, III 2023-24",
        "Boys Hostel Allotment Round III 2023-24",
        "Fee Structure Institute Round 2023-24"
    ];

    return (
        <div className="col-md-5 event-section">
            <div className="section-title">Events</div>
            <ul className="list-group">
                {events.map((event, index) => (
                    <li className="list-group-items d-flex justify-content-between align-items-center" key={index}>
                        <span className="new-blink badge rounded-pill me-1">NEW</span>
                        <a href="#" className="event-link">{event}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Home() {
    return (
        <div className="home-container">
            <CarouselPage className="carousel-section" />
            <WelcomeSection className="welcome-section" />
            <Topcards className="topcards-section" />
            <CIIT className="ciit-section" />
            <div className="d-flex justify-content-around news-events-section">
                <NewsSection />
                <EventsSection />
            </div>
            <Counter className="counter-section" />
            <Research className="research-section" />
        </div>
    );
}

export default Home;
