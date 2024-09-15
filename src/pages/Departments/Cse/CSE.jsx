import React from 'react'
import CSECarousel from './CSECarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './CSE.css'
import CSEvm from './CSEvm';
import CodeUnnati from './CodeUnnati';


const CSE = () => {
  return (
    <div className='cse-page-div'>
      <Container fluid className="p-0 w-100">

        <Row className='head-box-cse'>
          
            <h1 className="text-left">DEPARTMENTS</h1>
          
        </Row>

        <Row>

          <CSECarousel />

          <Row className="g-0 overlay-row w-100" >
            {/* Left Sidebar */}
            <Col md={2} className='left-sidebar overlay-col'>
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

            <Col className='right-content-cse'>
                   {/* render components here in this Col tag - vinni and vaishnavi */}
                   <div className='cse-intro-vm'>
                   <CSEvm />
                   </div>
                   <div className='code-unnati'>
                   <CodeUnnati />
                   </div>
                  

            </Col>

          </Row>

        </Row>

      </Container>
    </div>
  )
}

export default CSE
