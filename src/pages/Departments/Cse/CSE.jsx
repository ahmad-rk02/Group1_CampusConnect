import React from 'react'
import CSECarousel from './CSECarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CSE = () => {
  return (
    <div>
      <Container fluid className="p-0 w-100">

        <Row className='head-box-cse'>
          <Col>
            <h1 className="text-left">DEPARTMENTS</h1>
          </Col>
        </Row>

        <Row>

          <CSECarousel />

          <Row noGutters className="flex-nowrap left-index just overlay-row" >
            {/* Left Sidebar */}
            <Col md={2} className='left-sidebar' class="left-sidebar">
              <Card className="left-nav-cse" class='left-nav-cse'>
                <ListGroup variant="flush">
                  <ListGroup.Item className="left-nav-row-01">
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


            </Col>

          </Row>

        </Row>

      </Container>
    </div>
  )
}

export default CSE
