import React from 'react';
import './Topcards.css';

const Card = ({ icon, title, description }) => {
    return (
        <div className="cards custom-topcards">
            <div className="cards-body text-center">
                <div className="icon mb-3">{icon}</div>
                <h5 className="topcards-title">{title}</h5>
                <p className="topcards-text">{description}</p>
            </div>
        </div>
    );
};

function Topcards() {
    return (
        <div className="card-container2"> 
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
    );
}

export default Topcards;
