import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';
import Topcards from './Topcards'; // Now we will use this component
import universityBuilding from '../assets/university-building.jpg';
import collegeBuilding from '../assets/main-building-photo.jpg';
import universityNews from '../assets/clg-news.jpg';
import CarouselPage from "../components/CarouselPage";
import '@fortawesome/fontawesome-free/css/all.min.css';

function NewsSection() {
    return (
        <div className="col-md-5">
            <h3 className="text-center mb-4">News</h3>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="card shadow">
                        <img src={collegeBuilding} className="card-img-top" alt="College Building" />
                        <div className="card-body">
                            <h5 className="card-title">
                                CHANDRAPUR GOVERNMENT ENGINEERING COLLEGE GETS NBA STATUS
                            </h5>
                            <p className="card-text" style={{ height: "30vh" }}>
                                Chandrapur: As per the central government's policy, two departments of machine and electrical engineering at Chandrapur Government Engineering College have been accorded special status by the NBA...
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <div className="card shadow">
                        <img src={universityBuilding} className="card-img-top" alt="University Building" />
                        <div className="card-body">
                            <h5 className="card-title">
                                UGG APPROVES GONDWANA UNIVERSITY TO RECEIVE CENTRAL FUNDS
                            </h5>
                            <p className="card-text " style={{ height: "30vh" }}>
                                Gondwana University in Gadchiroli District was declared fit to receive central funds by the University Grants Commission (UGC)...
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <div className="card shadow">
                        <img src={universityNews} className="card-img-top" alt="University Building" />
                        <div className="card-body">
                            <h5 className="card-title">
                                PRESIDENT MURMU TO ATTEND GONDWANA UNIVERSITY CONVOCATION DURING MAHA VISIT
                            </h5>
                            <p className="card-text" style={{ height: "30vh" }}>
                                President Droupadi Murmu has arrived in Nagpur on a visit to Maharashtra where she will address the convocation of the Gondwana University...
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
                </Carousel.Item>
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
        <div className="col-md-5">
            <h3 className="text-center mb-4">Events</h3>
            <ul className="list-group">
                {events.map((event, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        <span className="badge bg-primary rounded-pill me-5">NEW</span>
                        <div>{event}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Home() {
    return (
        <>
            <div className="">
                <div className="">
                    <CarouselPage className="CarouselPage" />
                </div>
                <div className="">
                    <div className="container2 m-5">
                        <Topcards /> 
                    </div>
                </div>
                <div className="d-flex justify-content-around" style={{ width: "100vw", padding: "40px" }} >
                    <NewsSection className="" />
                    <EventsSection className="" />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
