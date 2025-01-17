import CSECarousel from '../../Departments/Cse/CSECarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSE.css'
import CSEvm from '../../Departments/Cse/CSEvm';
import CodeUnnati from './CodeUnnati';
import CommitteesClubsCSE from './CommitteesClubsCSE';
import FacultyDetails from './FacultyDetails';
import DropDownCse from './DropDownCse';
import { useState } from 'react';
// import Footer from './pages/Footer.jsx'


const CSE = () => {
const[openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='cse-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

        <Row className='head-box-cse'>
          <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

          <CSECarousel />


          <Row className="g-0 overlay-row w-100" >
            {/* Left Sidebar */}
              <div className="left-sidebar-wrapper">
                <Card className="left-nav-cse">
                        to="/cse"
                        className={location.pathname === "/cse" ? "active-link" : ""}
                      >
                        <b onClick={() => setOpenDropdown((openDropdown) => !openDropdown)}>Computer Science & Engineering</b>
                      </Link>

                      {
                        openDropdown &&  <DropDownCse/>
                      }

                     

                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-cse">
                      <Link
                        to=""
                        className={location.pathname === "" ? "active-link" : ""}
                      >
                        Electronics & Telecommunication Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-cse">
                      <Link
                        to=""
                        className={location.pathname === "" ? "active-link" : ""}
                      >
                        Instrumentation Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-cse">
                      <Link
                        to=""
                        className={location.pathname === "" ? "active-link" : ""}
                      >
                        Electrical Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-cse">
                      <Link
                        to=""
                        className={location.pathname === "" ? "active-link" : ""}
                      >
                        Mechanical Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-cse">
                      <Link
                        to=""
                        className={location.pathname === "" ? "active-link" : ""}
                      >
                        Civil Engineering
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className="left-nav-row-cse">
                      <Link
                        to="/workshop"
                        className={location.pathname === "" ? "active-link" : "/workshop"}
                      >
                        Workshop
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </Col>


          </Row>
          <Col md={8} className='right-content-cse' >
            {/* render components here in this Col tag - vinni and vaishnavi */}
            <div >
              <CSEvm className='  right-content-cse' />
            </div>

            <div>
              <FacultyDetails />
            </div>

            <div >
              <CodeUnnati className='  right-codeunnati-content-cse' />
            </div>

            <div >
              <CommitteesClubsCSE className='  right-content-cse' />
            </div>

          </Col>

        </Row>

      </Container>

    </div>


  )
}

export default CSE