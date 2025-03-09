 import React from 'react';
import MechCarousel from '../../Departments/Mechanical/MechCarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Mech.css'
import { Link } from 'react-router-dom';
import Mechvm from '../../Departments/Mechanical/Mechvm';


const Mech = () => {
  return (
    <div>
      
      <Container fluid className="p-0 w-100 flex-grow-1">

      

      <Row className='head-box-Mech'>
          <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

<MechCarousel />

<Row className="g-0 overlay-row w-100" >
  {/* Left Sidebar */}
  <Col md={4} className='left-sidebar-Mech overlay-col ' >
    <div className="left-sidebar-wrapper">
      <Card className="left-nav-Mech">
        <ListGroup variant="flush">
          <ListGroup.Item className="left-nav-row-Mech-01">
            <Link
              to="/cse"
              className={location.pathname === "" ? "active-link" : "/cse"}
            >
              Computer Science & Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Mech">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
              Electronics & Telecommunication Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Mech">
            <Link
              to="/instru"
              className={location.pathname === "" ? "active-link" : "/instru"}
            >
              Instrumentation Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Mech">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
              Electrical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Mech">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
              <b>Mechanical Engineering</b>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Mech">
            <Link
              to="/mech"
              className={location.pathname === "/mech" ? "active-link" : ""}
            >
              Civil Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Mech">
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
<Col md={8} className='right-content-Mech' >
             
<div >
              <Mechvm className='Mech-vision-mission' />
            </div>       
            
          </Col>
</Row>
      </Container>
      
   
 
    </div>
  )
}

export default Mech;
