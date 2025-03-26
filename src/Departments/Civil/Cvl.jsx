import React from 'react';
import CvlCarousel from '../../Departments/Civil/CvlCarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './cvl.css'

import { Link } from 'react-router-dom';
import Cvlvm from '../../Departments/Civil/Cvlvm';



const Cvl = () => {
  return (
    
       <div className='cvl-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

      

      <Row className='head-box-cvl'>
          <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

<CvlCarousel />

<Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} "  >
  {/* Left Sidebar */}
  <Col md={4} className='left-sidebar-cvl overlay-col ' >
    <div className="left-sidebar-wrapper">
      <Card className="left-nav-cvl">
        <ListGroup variant="flush">
          <ListGroup.Item className="left-nav-row-cvl-01">
            <Link
              to="/cse"
              className={location.pathname === "/cse" ? "active-link" : "/cse"}
            >
              Computer Science & Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-cvl">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
              cvltronics & Tcvlommunication Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-cvl">
            <Link
              to="/instru"
              className={location.pathname === "/intru" ? "active-link" : "/instru"}
            >
             Instrumentation Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-cvl">
            <Link
              to="/Elec"
              className={location.pathname === "/Elec" ? "active-link" : ""}
            >
              Electrical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-cvl">
            <Link
              to="/mech"
              className={location.pathname === "/mech" ? "active-link" : "/mech"}
            >
              Mechanical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-cvl">
            <Link
              to="/cvl"
              className={location.pathname === "/cvl" ? "active-link" : ""}
            >
              <b>Civil Engineering</b>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-cvl">
            <Link
              to="/workshop"
              className={location.pathname === "/workshop" ? "active-link" : "/workshop"}
            >
              Workshop
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  </Col>


</Row>
<Col md={8} className='right-content-cvl' >
             
            <div >
              <Cvlvm className='right-content-cvl' />
            </div>

            
            
            
          </Col>
</Row>
      </Container>
      
    </div>
  )
}

export default Cvl;
