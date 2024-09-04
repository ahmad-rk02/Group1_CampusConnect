import React from "react";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";

// Events and News from here ----------
import universityBuilding from '../assets/university-building.jpg';
import collegeBuilding from '../assets/main-building-photo.jpg';
import universityNews from '../assets/clg-news.jpg';
import WeatherData from "../components/WeatherData";


function NewsSection() {
    return (
        <div className="col-md-6">
            <h3 className="text-center mb-4">News</h3>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="card shadow">
                        <img src={collegeBuilding} className="card-img-top" alt="College Building" />
                        <div className="card-body">
                            <h5 className="card-title">CHANDRAPUR GOVERNMENT ENGINEERING COLLEGE GETS NBA STATUS</h5>
                            <p className="card-text">
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
                            <h5 className="card-title">UGC APPROVES GONDWANA UNIVERSITY TO RECEIVE CENTRAL FUNDS</h5>
                            <p className="card-text">
                                Gondwana University in Gadchiroli District was declared fit to receive central funds by the University Grants Commission (UGC)...
                            </p>
                            <a href="#" className="btn btn-primary">More</a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <div className="card shadow">
                        <img src={universityNews} className="card-img-top" alt="University News" />
                        <div className="card-body">
                            <h5 className="card-title">PRESIDENT MURMU TO ATTEND GONDWANA UNIVERSITY CONVOCATION DURING MAHA VISIT</h5>
                            <p className="card-text">
                                President Droupadi Murmu has arrived in Nagpur on a visit to Maharashtra where she will address the convocation of the Gondwana University in Gadchiroli...
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
        <div className="col-md-6">
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

// Events and News till here ----------

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row news-container">
          <NewsSection />
          <EventsSection />
        </div>
      </div>
      <Footer />

      
    </>
  );
}

export default Home;
