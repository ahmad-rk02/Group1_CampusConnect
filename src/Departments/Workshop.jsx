 
import { Container, Row, Col, Card, ListGroup  } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; 
 import './Workshop.css'
import AboutInstituteImage from '../assets/AboutInstitute.jpg'; 


const Workshop = () => {
  const location = useLocation(); 


  

  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design-ws text-white">
          <Col className="header-align-ws">
            <h1 className="text-left ">ABOUT US</h1>
          </Col>
        </Row>

        <Row className="flex-nowrap left-index-ws">

               

         

          {/* Left Sidebar */}
          <Col md={3}  className="left-sidebar-ws ">
            <Card className="left-nav-ws">
              <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-ws">
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
                      Workshop
                    </Link>
                  </ListGroup.Item>
              </ListGroup>
            </Card>

            <div className='side-heading-bottom-ws'>
            <div className="fs-4 fw-bold gcoec-text " style={{ color: '#EADBC8'}}>GCOEC</div>
            <h2 className="fw-bold text" style={{ color: '#102C57', lineHeight: '1.5' }}>
                     Delivering Wisdom Engineers</h2>

            </div>

          </Col>

         

          {/* Right Content Section */}
          <Col md={9} className="mt-4 content-card-ws">
            {/* About Institute */}
            <Card className="mb-4 w-100 card-content-ws">
              <Card.Body className="bg-white-ws">
                <Row>
                  <Col md={12} className=" p-0 text-center mb-3">
                    <img
                      src={AboutInstituteImage}
                      alt="Institute"
                      className="about-image"
                    />
                  </Col>
                  <Card.Header className="bg-golden-ws w-100">
                    <h4>About Institute</h4>  
                  </Card.Header>

                  <Col md={12}>
                    <p style={{ marginTop: '20px' }}> 
                    Government College of Engineering Chandrapur is established in 1996 This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbws and is administered through its Regional office at Nagpur. Now a days, due to globalization there is stiff competition at the national & International level as well phenomenal growth in the technology. For this, competent technocrats & engineers are in great demand and to serve this requirement, Government College of Engineering,Chandrapur is taking efforts to produce high quality technocrats.
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

export default Workshop; // Export the component