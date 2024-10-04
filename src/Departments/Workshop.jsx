// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Workshop.css';
import workshop from "../assets/workshop.png";



const Workshop = () => {
    return (
        <div className='ws-page-div d-flex flex-column'>
            <Container fluid className="p-0 w-100 flex-grow-1">

                <Row className='head-box-ws'>
                    <h1 className="text-left">DEPARTMENTS</h1>
                </Row>

                <Row>

                    <Row className="g-0 overlay-roww w-100" >
                        {/* Left Sidebar */}
                        <Col md={4} className='left-sidebar-ws overlay-col ' >
                            <Card className="left-nav-ws">
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="left-nav-row-ws-01">
                                        <Link
                                            to="/cse"
                                            className={location.pathname === "/cse" ? "active-link" : ""}
                                        >
                                            Computer Science & Engineering
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            Electronics & Telecommunication Engineering
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            Instrumentation Engineering
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            Electrical Engineering
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            Mechanical Engineering
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            Civil Engineering
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            CIIIT
                                        </Link>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="left-nav-row-ws">
                                        <Link
                                            to=""
                                            className={location.pathname === "" ? "active-link" : ""}
                                        >
                                            Workshop
                                        </Link>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>

                        {/* Right Content Section */}
                        <Col md={9} className="mt-4 content-card-pd">
                            {/* Workshop */}
                            <Card className="mb-4 w-100 card-content-pd">
                                <Card.Header className="bg-golden-pd">
                                    <h4>Workshop</h4>
                                </Card.Header>
                                <Card.Body className="bg-white-pd">
                                    <Row>
                                        <Col md={12} className=" p-0 text-center mb-3">
                                            <img
                                                src={workshop}
                                                alt="GCOEC Workshop"
                                                className="workshop-image-pd"
                                            />
                                        </Col>


                                        <Col md={12}>
                                            <p style={{ marginTop: "20px" }}>

                                                <p>The Workshop is the backbone of the Institute practical, all maintenance & project related activities are carried out here. Under the visionary leadership of Principal, Dr. S. G. Akojwar and Guidance of Workshop Superintendent, Prof. S. D. Butley, workshop Department has emerged as the powerhouse to enhance the practical and technical skills of budding technocrats. The department is now focusing on practical excellence and technical skill development of the students through integrated efforts.</p>

                                                <p>To make the students familiar with various manufacturing practices and processes the institute has well equipped workshops. As the saying goes, â€œLearning by doing is the best method of learning and leaves a lasting impression on the young minds of the students. The students of the college get the opportunity to work in Machine Shop, Carpentry Shop, Sheet Metal Shop, Welding Shop, Fitting Shop, Moulding Shop and Smithy Shop to get hands-on training. Sincere and persistent efforts by the staff of workshop wing helps students learn by actually doing the various procedures by their own hands. The exposure to design intricacies, manufacturing processes, fabrication techniques and working of machinery and equipment used in manufacturing helps students adapt to the industrial environment, when they come across similar floor situations in the industry.</p>

                                                </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>

                </Row>

            </Container>

        </div>


    )
}

export default Workshop
