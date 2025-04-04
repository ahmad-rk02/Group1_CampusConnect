import React from 'react';
import './Topcards.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ icon, title, description, link  }) => {

        const navigate = useNavigate();
    
        const handleClick = () => {
            if (link) {
                navigate(link);
            }
        };

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="cards custom-topcards" onClick={handleClick}>
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
        <div className="container-2 card-container2">
            <div className="row justify-content-center">
                <Card 
                    icon={<i className="fa fa-search"></i>}
                    title="INNOVATION"
                    description="Mapping The Innovations And Collaborations"
                    link="/aboutCIIIT"
                />
                <Card
                    icon={<i className="fa fa-rocket"></i>}
                    title="TRAINING"
                    description="Success Stories Of Our Students"
                    link="/tpopage"
                />
                <Card
                    icon={<i className="fa fa-newspaper"></i>}
                    title="NEWS"
                    description="Panorama Of Events"
                    link="/newsevents"
                />
                <Card
                    icon={<i className="fa fa-university"></i>}
                    title="CAMPUS LIFE"
                    description="Explore Beyond The Classroom"
                    link="/abhirangbanner"
                />
            </div>
        </div>
    );
}

export default Topcards;
