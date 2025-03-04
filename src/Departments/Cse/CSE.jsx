import CSECarousel from '../../Departments/Cse/CSECarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CSE.css'
import Faculty from './FacultyDetails';
import CSEvm from '../../Departments/Cse/CSEvm';
import CodeUnnati from './CodeUnnati';
import CommitteesClubsCSE from './CommitteesClubsCSE';
import DropDownCse from './DropDownCse';
import { useState } from 'react';
import FacultyList from './FacultyDetails';
// import Footer from './pages/Footer.jsx'


const CSE = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className='cse-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

        <Row className='head-box-cse'>
          <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

          <CSECarousel />

          <Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} " >
            {/* Left Sidebar */}
            <Col md={4} className='left-sidebar-cse overlay-col ' >
              <div className="left-sidebar-wrapper">
                <Card className="left-nav-cse">
                  <ListGroup variant="flush">
                    <ListGroup.Item className="left-nav-row-cse-01">
                      <Link
                        to="/cse"
                        className={location.pathname === "/cse" ? "active-link" : ""}
                      >
                        <b onClick={() => setOpenDropdown(!openDropdown)}>Computer Science & Engineering</b>
                      </Link>

                      {
                        openDropdown &&

                        <div className={`cse-dropdown-cse ${openDropdown ? "dropdown-open" : ""}`}>
                          <DropDownCse />
                        </div>

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

            <div className="facultyDetails">
              <FacultyList />
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