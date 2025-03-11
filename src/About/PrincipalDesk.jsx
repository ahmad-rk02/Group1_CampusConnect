
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./PrincipalDesk.css";
import principaldesk from "../assets/principaldesk.jpg";

const PrincipalDesk = () => {
  const location = useLocation();
5
  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design-pd text-white">
          <Col className="header-align-pd">
            <h1 className="text-left ">ABOUT US</h1>
          </Col>
        </Row>

        <Row className="flex-nowrap left-index-pd">
          {/* Left Sidebar */}
          <Col md={3} className="left-sidebar-pd">
            <Card className="left-nav-pd">
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-pd">
                  <Link
                    to="/aboutinstitute"
                    className={
                      location.pathname === "/aboutinstitute"
                        ? "active-link"
                        : ""
                    }
                  >
                    About Institute
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-pd">
                  <Link
                    to="/principaldesk"
                    className={
                      location.pathname === "/principaldesk"
                        ? "active-link"
                        : ""
                    }
                  >
                    Principal&apos;s Desk
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-pd">
                  <Link
                    to="/aboutvm"
                    className={
                      location.pathname === "/aboutvm" ? "active-link" : ""
                    }
                  >
                    Vision and Mission
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Right Content Section */}
          <Col md={9} className="mt-4 content-card-pd">
            {/* About Institute */}
            <Card className="mb-4 w-100 card-content-pd">
            <Card.Header className="bg-golden-pd"> 
                <h4>About Principal</h4>
              </Card.Header>
              <Card.Body className="bg-white-pd">

                <Row  className="right-row">
                  <Col md={12} className=" p-0 text-center mb-3">
                    <img
                      src={principaldesk}
                      alt="PrincipalDesk"
                      className="about-image-pd"
                    />
                  </Col>


                  <Col md={12} className="right-para-principal-desk">
                  <p style={{ marginTop: "20px" }}>
                    <h4 className="principal-name-pd" style={{ marginRight: "100px" }}>Dr. Prashant V. Washimkar</h4>
                    
                      <p>Principal of Government College of Engineering Chandrapur.<pre>Email : principal.gcoechandrapur@dtemaharashtra.gov.in</pre></p>
                      <p>Warm greetings from Government College of Engineering
                      Chandrapur (GCOEC) !!! </p>
                      
                      <p >Dr. Prashant V. Washimkar is a
                      diligent human who strictly follows morals and is focused
                      on strategic vision and the long term mission of GCOEC.
                      Dr. Washimkar earned his Bachelors in Mechanical
                      Engineering and a Master’s in Industrial Engineering from
                      Visvesvaraya Regional College of Engineering (Now VNIT)
                      Nagpur.</p><p> He completed his Ph.D. from Rashtrasant Tukadoji
                      Maharaj Nagpur University Nagpur, he has served GCOEC in
                      many capacities that includes Dean of Academics, Gymkhana
                      Vice President, AICTE Co– ordinator, NIRF Nodal Officer,
                      etc. He is life member of the Indian Society for Technical
                      Education (ISTE), the Institution of Engineers India(IEI
                      ), the Indian Institution of Industrial Engineering(IIIE).
                      He has nearing 40 Publications at National, International
                      Level to his credit.</p><p> This Institute started functioning in
                      1996 with 3 UG Engineering Programs under the
                      administrative control of Higher and Technical Education
                      Department, Govt. of Maharashtra, also it is affiliated to
                      Gondwana University, Gadchiroli. GCOEC offers six UG
                      Programs and two PG Programs along with Centre For Higher
                      Leadership And Re – Search (CHLR) in Mechanical and
                      Electrical Engineering Only. It houses more than 1560 plus
                      students. The students of high caliber are the backbones
                      of the Institute. The Institute strives to impart quality
                      technical education to the students who have always proved
                      their excellence in University and competitive level.
                      Although academics is the top priority, the students are
                      motivated to participate in co – curricular and extra
                      curricular-activities. </p><p>The institute is attracting a large
                      number of coveted companies on campus and provides one of
                      the most promising placements and internships. The
                      Institute is having one of the best Placement Records. The
                      placement record is excellent. We are one of the Premier
                      Institute of Central India. Our students have got placed
                      in many reputed multinational companies across India and
                      abroad.</p> <p>The faculties are also research oriented and
                      believed in strong Academic – Industry Collaboration. They
                      are engaged in Workshops/Seminars and Consultancy
                      Projects. The Institute has established an Institute
                      Innovation Cell (IIC) to foster the culture of innovation
                      and start up eco system in the Institute.The Institute has
                      already signed a number of Memorandum of Understanding
                      with various Organizations/Institutions and Industries for
                      enhancing technical know how for the betterment of the
                      students.</p> I genuinely feel that the overall experience of
                      the students, faculties and staff at GCOEC shall be
                      fulfilling journey and the Institute shall scale newer
                      heights in the coming years.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrincipalDesk; // Export the component