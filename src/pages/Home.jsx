import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// Events and News from here ----------


// Importing the images from the assets folder
// import universityBuilding from './assets/university-building.jpg';
// import collegeBuilding from './assets/main-building-photo.jpg';
// import universityNews from './assets/clg-news.jpg';


function NewsSection() {
    return (
            <div className="news-container col-md-6">
            <h3 className="text-center mb-4">News</h3>
            
            <Carousel className=''>
      <Carousel.Item interval={2000}>
        {/* You can add any other content or just leave this empty */}
        {/* <div style={{ height: '500px',width: '700px',  backgroundColor: '#eadbc8' }} /> */}
        
        <div className="card shadow">
                <img src={collegeBuilding} className="card-img-top" alt="College Building" />
                <div className="card-body">
                    <h5 className="card-title">
                    CHANDRAPUR GOVERNMENT ENGINEERING COLLEGE GETS NBA STATUS
                    </h5>
                    <p height={500} className="card-text">
                    Chandrapur: As per the central government's policy, two departments of machine and electrical engineering at Chandrapur Government Engineering College have been accorded special status by the NBA. It has become the first college in Gondwana University to achieve this status, which will speed up the work, said principal Dr. Which. Which. Bhutada said at a press conference at Chandrapur Press Club on Monday.As per the central government's policy, international standards have been fixed for all engineering colleges in the state. Colleges that adhere to these standards...
                    </p>
                    <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <div style={{ height: '500px',width: '700px',  backgroundColor: '#eadbc8' }} /> */}
        
        <div className="card shadow">
                <img src={universityBuilding} className="card-img-top" alt="University Building" />
                <div className="card-body">
                    <h5 className="card-title">
                    UGG APPROVES GONDWANA UNIVERSITY TO 
                    RECEIVE CENTRAL FUNDS
                    </h5>
                    <p height={500} className="card-text">
                        Gondwana University in Gadchiroli District was declared fit to receive 
                        central funds by the University Grants Commission (UGC). Minister of Higher 
                        and Technical Education Uday Samant said the 12(B) status will help the university 
                        progress speedily. UGC provides financial assistance to eligible colleges...
                    </p>
                    <a href="#" className="btn btn-primary">More</a>
                </div>
            </div>
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <div style={{ height: '500px', width: '700px', backgroundColor: '#eadbc8' }} /> */}
        
        <div className="card shadow">
                <img src={universityNews} className="card-img-top" alt="University Building" />
                <div className="card-body">
                    <h5 className="card-title">
                    PRESIDENT MURMU TO ATTEND GONDWANA UNIVERSITY CONVOCATION DURING MAHA VISIT
                    </h5>
                    <p height={500} className="card-text">
                    President Droupadi Murmu has arrived in Nagpur on a visit to Maharashtra where she will address the convocation of the Gondwana University in Gadchiroli and attend other events. This is Murmu's first visit to Maharashtra after assuming the top constitutional office in July last year.The President arrived at the city airport on Tuesday evening and was welcomed by Maharashtra Governor Ramesh Bais, Chief Minister Eknath Shinde...
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

        // Add more events here...
    ];

    return (
        <div className="col-md-6">
            <h3 className="text-center mb-4">Events</h3>
            <ul className="list-group">
                {events.map((event, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        <span className="badge bg-primary rounded-pill me-5">NEW</span>
                        <div className=''>{event}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


// Events and News till here ----------



function Home() {
  return(
  <>
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias magnam accusamus pariatur saepe cum rem nobis, placeat quaerat in reprehenderit ipsum porro, temporibus cupiditate maiores aut id, sequi delectus molestiae.</p>
    <NewsSection />
    <EventsSection />
  </>
)}

export default Home;
