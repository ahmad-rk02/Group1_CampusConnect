import React from 'react'
import CSECarousel from '../../Departments/Cse/CSECarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './CSE.css'
import CSEvm from '../../Departments/Cse/CSEvm';
import CodeUnnati from './CodeUnnati';
import CommitteesClubsCSE from './CommitteesClubsCSE';
// import Footer from './pages/Footer.jsx'

const CSE = () => {
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
            <Col md={4} className='left-sidebar overlay-col position-fixed'>
              <Card className="left-nav-cse">
                <ListGroup variant="flush">
                  <ListGroup.Item className="left-nav-row-cse-01">
                    <Link
                      to="/ug"
                      className={location.pathname === "/cse" ? "active-link" : ""}
                    >
                      Computer Science & Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to="/pg"
                      className={location.pathname === "/pg" ? "active-link" : ""}
                    >
                      Electronics & Telecommunication Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to="/phd"
                      className={location.pathname === "/phd" ? "active-link" : ""}
                    >
                      Instrumentation Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to="/phd"
                      className={location.pathname === "/phd" ? "active-link" : ""}
                    >
                      Electrical Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to="/phd"
                      className={location.pathname === "/phd" ? "active-link" : ""}
                    >
                      Mechanical Engineering
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item className="left-nav-row-cse">
                    <Link
                      to="/phd"
                      className={location.pathname === "/phd" ? "active-link" : ""}
                    >
                      Civil Engineering
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>


          </Row>
          <Col md={8} className='right-content-cse' >
                   {/* render components here in this Col tag - vinni and vaishnavi */}
                   <div className='cse-intro-vm'>
                   <CSEvm />
                   </div>
                   <div className='code-unnati'>
                   <CodeUnnati />
                   </div>
                   <div className='committeesclubs'>
                   <CommitteesClubsCSE />
                   </div>
                  
            </Col>

        </Row>

      </Container>
      
    </div>


  )
}

export default CSE
