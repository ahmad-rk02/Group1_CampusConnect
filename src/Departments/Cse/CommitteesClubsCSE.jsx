import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CommitteesClubsCSE.css';  // Import the CSS file for styling
import AcsesLogo from '../../assets/AcsesLogo.jpg';
import BitsnBytes from '../../assets/BitsnBytes.jpg';
import CLangBootCamp from '../../assets/CLangBootCamp.jpg';
import NSDCeleb from '../../assets/NSDCeleb.jpg';
import IHAGCOEC from '../../assets/IHAGCOEC.jpg';
import BlindCoding from '../../assets/BlindCoding.jpg';
import TreePlantation from '../../assets/TreePlantation.jpg';

const CommitteesClubsCSE = ({ className }) => {
    return (
        <div className="CCCSE">
            <Card.Header className="bg-golden1">
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

            <Card.Header className="bg-golden1">
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
                <Col className="cncevents-text1">
                    <h5 className="cncevents-title1">C Language Bootcamp </h5>
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
                            src={NSDCeleb}
                            alt="National Science Day Celebs"
                            className="nsdceleb-image"
                        />
                    </div>
                </Col>

                <Col className="cncevents-text2">
                    <h5 className="cncevents-title2">National Science Day Celebration </h5>
                    <ol>
                        <li>Celebrate the importance of science in our daily lives.</li>
                        <li>Encourage students from all departments to engage with scientific concepts.</li>
                        <li>Promote skills such as critical thinking and problem-solving.</li>
                    </ol>
                    <p>
                        The Bits n Bytes Club of the CSE Department organized an event to celebrate National Science Day, focusing on the remarkable contributions of science to society. The event featured a lineup of activities aimed at fostering scientific curiosity, critical thinking, and problem-solving skills. </p>
                </Col>

                <Col className=" cncevents-box5" style={{ backgroundColor: "#eadbc8" }}></Col>
                <Col className="cncevents-box6" style={{ backgroundColor: "#102c57" }}>
                    <div>
                        <img
                            src={IHAGCOEC}
                            alt="Internal Hackathon at GCOEC"
                            className="internalhackathon-image"
                        />
                    </div></Col>
                <Col className="cncevents-text3">
                    <h5 className="cncevents-title3">Internal Hackathon at GCOEC</h5>
                    <ol>
                        <li>Identify and nurture innovative ideas and solutions developed by students.</li>
                        <li>Prepare and select teams for participation in the Smart India Hackathon 2023.</li>
                        <li>Encourage a culture of creativity, teamwork, and practical application of knowledge among students</li>
                    </ol>
                    <p>The Bits n Bytes Club of the CSE Department at GCOEC organized an Internal Hackathon as a preparatory event for the prestigious Smart India Hackathon (SIH) 2023. The hackathon aimed to provide students with an opportunity to showcase their innovation and problem-solving skills, with the best projects being selected for representation at the national level.
                    </p>
                </Col>

                <Col className=" cncevents-box7" style={{ backgroundColor: "#eadbc8" }}></Col>
                <Col className="cncevents-box8" style={{ backgroundColor: "#102c57" }}>
                    <div>
                        <img
                            src={BlindCoding}
                            alt="Blind Coding Competition"
                            className="blindcoding-image"
                        />
                    </div>
                </Col>

                <Col className="cncevents-text4">
                    <h5 className="cncevents-title4">Blind Coding Competition</h5>
                    <ul>
                        <li>Round 1: Medium Difficulty Participants were tasked with writing a C program statement of medium complexity with monitors off.  Evaluation criteria included code execution, number of errors, and time taken to complete the task.</li>
                        <li>Round 2: High Difficulty Participants were required to write a C program statement of high complexity with monitors off!</li>
                    </ul>
                    <p>The Blind Coding Competition, organized by the CSE Department at GCOEC in collaboration with ACSES, was a great success. It enhanced participants' technical skills and promoted teamwork, playing a vital role in grooming future technologists for real-world challenges in computer science and engineering. </p>
                </Col>

                <Col className=" cncevents-box9" style={{ backgroundColor: "#eadbc8" }}></Col>
                <Col className="cncevents-box10" style={{ backgroundColor: "#102c57" }}>
                    <div>
                        <img
                            src={TreePlantation}
                            alt="TreePlantation"
                            className="treeplantation-image"
                        />
                    </div></Col>
                <Col className="cncevents-text5">
                    <h5 className="cncevents-title5">Tree Plantation</h5>
                    <p>
                        Participants eagerly planted indigenous tree saplings and documented their efforts through photographs, which were uploaded to a Google Form for transparency and accountability. The event gained strong community support, strengthening bonds and emphasizing the importance of collective action in addressing environmental challenges.
                    </p>
                    <p>The Tree Plantation Event organized by the Association of Computer Science Engineering Students of Government College of Engineering Chandrapur exemplified the potential of technology-enabled environmental initiatives. By leveraging digital platforms such as Google Forms, students not only planted saplings but also created a virtual network of environmental advocates united by a common goal.
                    </p>
                </Col>
            </Row>
            <Row>
            <Col className="cncevents-box11" style={{ backgroundColor: "#102c57" }}></Col>
            <h5 className="cncevents-title6">Learn More</h5>
            </Row>


        </div>

    );
};

export default CommitteesClubsCSE;
