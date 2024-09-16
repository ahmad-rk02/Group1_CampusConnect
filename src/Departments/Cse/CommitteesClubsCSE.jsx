import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CommitteesClubsCSE.css';  // Import the CSS file for styling
import AcsesLogo from '../../assets/AcsesLogo.jpg';

const CommitteesClubsCSE = ({ className }) => {
    return (
        <div className="CCCSE">
            <Card.Header className="bg-golden">
                    <h4>Committees & Clubs</h4>
                </Card.Header>
            <Row className="align-items-center bada-row" >
                {/* Left Column: Logo */}
                
                <Col  className="text-center  logo-ka-box"  style={{backgroundColor: "#102C57"}}>
                      <div>
                            <img
                                src={AcsesLogo}
                                alt="ACSES Logo"
                                className="acses-logo"
                            />
                        </div>
                    
                </Col>

                {/* Right Column: Text */}
                <Col className="acses-text" style={{ backgroundColor: "#eadbc8" }}>
                    <h4 className="mb-4 acses-title">ACSES Committee</h4>
                    <p>
                        The Association of Computer Science and Engineering Students (ACSES) is a key group in the computer science and engineering department. It consists of dedicated students who organize the department's annual seminars and workshops, promoting both academic and extracurricular activities.
                    </p>
                    <p>
                        One important task of ACSES is setting criteria for choosing leaders within the committee. The head of ACSES, a crucial role, defines these criteria by evaluating candidates' skills, passion, and dedication to the committee's goals.
                    </p>
                    <p>
                        The election process, guided by these criteria, looks for students who excel academically and show leadership, organizational skills, and enthusiasm for the department's mission. This ensures that ACSES's leadership team is both capable and motivated to create valuable educational events, enhancing the learning environment for everyone.
                    </p>
                </Col>
            </Row>
        </div>

    );
};

export default CommitteesClubsCSE;
