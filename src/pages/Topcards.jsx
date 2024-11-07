import React from 'react';
import './Topcards.css';

const Card = ({ icon, title, description }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cards custom-topcards">
                <div className="cards-body text-center">
                    <div className="icon mb-3">{icon}</div>
                    <h5 className="topcards-title">{title}</h5>
                    <p className="topcards-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

function Topcards() {
    return (
        <div className="container card-container2">
            <div className="row justify-content-center">
                <Card
                    icon={<i className="fa fa-search"></i>}
                    title="RESEARCH"
                    description="Mapping The Innovations And Collaborations"
                />
                <Card
                    icon={<i className="fa fa-rocket"></i>}
                    title="STARTUPS"
                    description="Success Stories Of Researchers & Entrepreneurs"
                />
                <Card
                    icon={<i className="fa fa-newspaper"></i>}
                    title="NEWS"
                    description="Panorama Of Events"
                />
                <Card
                    icon={<i className="fa fa-university"></i>}
                    title="CAMPUS LIFE"
                    description="Explore Beyond The Classroom"
                />
            </div>
        </div>
    );
}

export default Topcards;
