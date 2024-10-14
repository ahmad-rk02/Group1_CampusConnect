
import { Container, Row, Col, Card, ListGroup, Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Workshop.css'
import WorkshopImage from '../assets/workshop.png';


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
          <Col md={3} className="left-sidebar-ws ">
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
                    to="/workshop"
                    className={location.pathname === "/workshop" ? "active-link" : ""}
                  >
                    Workshop
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>

            {/* <div className='side-heading-bottom-ws'>
            <div className="fs-4 fw-bold gcoec-text " style={{ color: '#EADBC8'}}>GCOEC</div>
            <h2 className="fw-bold text" style={{ color: '#102C57', lineHeight: '1.5' }}>
                     Delivering Wisdom Engineers</h2>

            </div> */}

          </Col>



          {/* Right Content Section */}
          <Col md={9} className="mt-4 content-card-ws">
            {/* About Institute */}
            <Card className="mb-4 w-100 card-content-ws">
              <Card.Body className="bg-white-ws">
                <Row>
                  <Col md={12} className=" p-0 text-center mb-3">
                    <img
                      src={WorkshopImage}
                      alt="Institute"
                      className="ws-image"
                    />
                  </Col>
                  <Card.Header className="bg-golden-ws w-100">
                    <h4>About Workshop</h4>
                  </Card.Header>

                  <Col md={12}>
                    <p style={{ marginTop: '20px' }}>



                      The Workshp is the backbone of the Institute practical, all maintenance & project related activities are carried out here. Under the visionary leadership of Principal, Dr. S. G. Akojwar and Guidance of Workshop Superintendent, Prof. S. D. Butley, workshop Department has emerged as the powerhouse to enhance the practical and technical skills of budding technocrats.
                      The department is now focusing on practical excellence and technical skill development of the students through integrated efforts.
                    </p>

                    <p style={{ marginTop: '30px' }}>
                      To make the students familiar with various manufacturing practices and processes the institute has well equipped workshops. As the saying goes, â€œLearning by doing is the best method of learning and leaves a lasting impression on the young minds of the studentsâ€. The students of the college get the opportunity to work in Machine Shop, Carpentry Shop, Sheet Metal Shop, Welding Shop, Fitting Shop, Moulding Shop and Smithy Shop to get hands-on training. Sincere and persistent efforts by the staff of workshop wing helps students learn by actually doing the various procedures by their own hands. The exposure to design intricacies, manufacturing processes, fabrication techniques and working of machinery and equipment used in manufacturing helps students adapt to the industrial environment, when they come across similar floor situations in the industry.
                    </p>

                    <Card.Header className="bg-golden-ws w-100" style={{ marginTop: '40px' }}>
                      <h4>Department Vision</h4>
                    </Card.Header>

                    <p style={{ marginTop: '30px' }}>
                      To be Excellence in the Tribal Region of the Country, distinguished for its Locally and Globally Relevant Innovative Academic Programs, with Learner Centric Value based Transformative Educationâ€
                    </p>

                    <Card.Header className="bg-golden-ws w-100" style={{ marginTop: '40px' }}>
                      <h4>Department Mission</h4>
                    </Card.Header>

                    <p style={{ marginTop: '30px' }}>
                      <ul>
                        <li>
                          <strong>M1 :</strong> To provide under safe environment, knowledge and practice of hand tools, power tools, machine tools and measuring instruments to impart skills to design, measure and control size and shape of engineering products.
                        </li>
                        <li>
                          <strong>M2 :</strong> To encourage students to use their practical knowledge, creativity and skills to design and manufacture solutions of social or industrial relevance.
                        </li>
                      </ul>
                    </p>

                    <Card.Header className="bg-golden-ws w-100" style={{ marginTop: '40px' }}>
                      <h4>Infrastructure</h4>
                    </Card.Header>

                    <h5 style={{ color: '#102c57', marginTop: '30px' }}>Brief Description :</h5>

                    <Table style={{ marginTop: '40px' }} className='table-ws'>
              
                      <tbody className='table-ws'>
                        <tr>
                          <td>Number of shops</td>
                          <td>08</td>
                        </tr>
                        <tr>
                          <td>Departmental Library</td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>Faculty/Instructor Cabins</td>
                          <td>07</td>
                        </tr>
                        <tr>
                          <td>No. of Computers</td>
                          <td>07</td>
                        </tr>
                        <tr>
                          <td>No. of Laptops</td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>Boys Common Room</td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>Girls Common Room</td>
                          <td>01</td>
                        </tr>
                      </tbody>
                    </Table>

                    <Card.Header className="bg-golden-ws w-100" style={{ marginTop: '40px' }}>
                      <h4>Shop Details</h4>
                    </Card.Header>

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