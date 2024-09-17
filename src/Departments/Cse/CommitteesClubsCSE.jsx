import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CommitteesClubsCSE.css';  // Import the CSS file for styling
import AcsesLogo from '../../assets/AcsesLogo.jpg';
import BitsnBytes from '../../assets/BitsnBytes.jpg';
import CLangBootCamp from '../../assets/CLangBootCamp.jpg';

const CommitteesClubsCSE = ({ className }) => {
    return (
        <div className="CCCSE">
            <Card.Header className="bg-golden">
                <h4>Committees & Clubs</h4>
            </Card.Header>
            <Row className="align-items-center bada-row" >
                {/* Left Column: Logo */}

                <Col className="text-center  logo-ka-box" style={{ backgroundColor: "#102C57" }}>
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
            <Row className="bitsnbytes">
                <Col className="bitsnbytes-text">
                    <h4 className="mb-4 bitsnbytes-title">Bits & Bytes Club</h4>
                    <p>
                        Welcome to the Bits and Bytes Club of our CSE department! Our vibrant community is dedicated to enhancing your technical skills through a variety of engaging activities, including C programming bootcamps, placement talks, and much more. Whether you're looking to sharpen your coding abilities or prepare for your future career, our club offers the perfect platform to learn, compete, and grow together.  </p>
                </Col>
                <Col className="text-center  bitsnbytes-logo-ka-box1" style={{ backgroundColor: "#eadbc8" }}></Col>
                <Col className="text-center  bitsnbytes-logo-ka-box2" style={{ backgroundColor: "#102c57" }}>
                    <div>
                        <img
                            src={BitsnBytes}
                            alt="Bits & Bytes Logo"
                            className="bitsnbytes-logo"
                        />
                    </div>
                </Col>
            </Row>

            <Card.Header className="bg-golden2">
                <h4>Committee & Club Events</h4>
            </Card.Header>

            <Row className="cncevents">
                <Col className=" cncevents-box1" style={{ backgroundColor: "#eadbc8" }}></Col>
                <Col className="cncevents-box2" style={{ backgroundColor: "#102c57" }}>
                    <div>
                        <img
                            src={CLangBootCamp}
                            alt="C Language Bootcamp"
                            className="clangbootcamp-image"
                        />
                    </div></Col>
                <Col className="cncevents-text">
                    <h5 className="cncevents-title">C Language Bootcamp </h5>
                    <ol>
                        <li>   Evaluate the knowledge and skills acquired by participants during the boot camp.</li>
                        <li> Provide a formal assessment required for the certification process.</li>
                        <li> Encourage students to apply their learning to practical problems.</li>
                    </ol>
                    <p>
                        The final assessment test successfully fulfilled its objective of evaluating the participants' proficiency in C programming. The Bits n Bytes Club is proud of the participants' performance and looks forward to organizing more such educational events in the future.
                    </p>
                </Col>

                <Col className=" cncevents-box3" style={{ backgroundColor: "#eadbc8" }}></Col>
                <Col className="cncevents-box4" style={{ backgroundColor: "#102c57" }}>
                    <div>
                        <img
                            src={CLangBootCamp}
                            alt="C Language Bootcamp"
                            className="clangbootcamp-image"
                        />
                    </div>
                </Col>
                <Col className="cncevents-text">
                    <h5 className="cncevents-title">C Language Bootcamp </h5>
                    <ol>
                        <li>   Evaluate the knowledge and skills acquired by participants during the boot camp.</li>
                        <li> Provide a formal assessment required for the certification process.</li>
                        <li> Encourage students to apply their learning to practical problems.</li>
                    </ol>
                    <p>
                        The final assessment test successfully fulfilled its objective of evaluating the participants' proficiency in C programming. The Bits n Bytes Club is proud of the participants' performance and looks forward to organizing more such educational events in the future.
                    </p>
                </Col>
            </Row>
        </div>

    );
};

export default CommitteesClubsCSE;
