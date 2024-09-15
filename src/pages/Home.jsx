import React from 'react';
import './Home.css';
import Topcards from './Topcards'; // Now we will use this component
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




// Events and News from here ----------


function NewsSection() {
    return (
        <div className="col-md-5">
            <div className="text-center mb-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>News</div>

            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="card1 shadow">
                        <img src={collegeBuilding} className="card-img-top" alt="College Building" />
                        <div className="card-body">
                            <h5 className="card-title">
                                CHANDRAPUR GOVERNMENT ENGINEERING COLLEGE GETS NBA STATUS
                            </h5>
                            <p className="card-text" style={{ height: "30vh" }}>
                                Chandrapur: As per the central government's policy, two departments of machine and electrical engineering at Chandrapur Government Engineering College have been accorded special status by the NBA...
                            </p>
                            <button href="#" className="news-btn btn-primary">More</button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <div className="card1 shadow">
                        <img src={universityBuilding} className="card-img-top" alt="University Building" />
                        <div className="card-body">
                            <h5 className="card-title">
                                UGG APPROVES GONDWANA UNIVERSITY TO RECEIVE CENTRAL FUNDS
                            </h5>
                            <p className="card-text " style={{ height: "30vh" }}>
                                Gondwana University in Gadchiroli District was declared fit to receive central funds by the University Grants Commission (UGC)...
                            </p>
                            <button href="#" className="news-btn btn-primary">More</button>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <div className="card1 shadow">
                        <img src={universityNews} className="card-img-top" alt="University Building" />
                        <div className="card-body">
                            <h5 className="card-title">
                                PRESIDENT MURMU TO ATTEND GONDWANA UNIVERSITY CONVOCATION DURING MAHA VISIT
                            </h5>
                            <p className="card-text" style={{ height: "30vh" }}>
                                President Droupadi Murmu has arrived in Nagpur on a visit to Maharashtra where she will address the convocation of the Gondwana University...
                            </p>
                            <button href="#" className="news-btn btn-primary">More</button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

function EventsSection() {
    const events = [
        <div className="event-box"><a className="event-links" href='#'>Girls Hostel Direct Second Year Allotment Round I 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>Boys Hostel Direct Second Year Allotment Round I 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>Direct Second Year Girls Hostel Provisional Allotment Merit List 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>Direct Second Year Boys Hostel Provisional Allotment Merit List 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>First Year Girls Quarter Allotment Round I 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>Girls Hostel First year Allotment Round II, III 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>Boys Hostel Allotment Round III 2023-24</a></div>,

        <div className="event-box"><a className="event-links" href='#'>Fee Structure Institute Round 2023-24</a></div>,
    ];

    return (
        <div className=" event-cont col-md-5">
            <div className="text-center mb-4" style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Events</div>

            <ul className="list-group">
                {events.map((event, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        <div className="new-blink-01 badge rounded-pill me-1">NEW</div>
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

            <div style={{ overflowX: 'hidden' }}>
                <div className="">
                    <CarouselPage className="CarouselPage" />
                </div>
                <div className="">
                    <Topcards className="" />
                </div>
                <div className="CIIT">
                    <CIIT />
                </div>
                <div className="d-flex justify-content-around" style={{ width: "100vw"}} >
                    <NewsSection className="" />
                    <EventsSection className="" />
                </div>
                <div>
                    <Counter />
                </div>
                <div>
                    <Research />
                </div>
            </div>


        </>
    );
}

export default Home;
