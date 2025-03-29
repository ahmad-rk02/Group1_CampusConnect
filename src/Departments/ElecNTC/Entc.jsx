import React from 'react';
import EntcCarousel from '../../Departments/ElecNTC/EntcCarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Entc.css'

import { Link } from 'react-router-dom';
import Entcvm from '../../Departments/ElecNTC/Entcvm';



const Entc = () => {
  return (
    
       <div className='Entc-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

      

      <Row className='head-box-Entc'>
          <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

<EntcCarousel />

<Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} "  >
  {/* Left Sidebar */}
  <Col md={4} className='left-sidebar-Entc overlay-col ' >
    <div className="left-sidebar-wrapper">
      <Card className="left-nav-Entc">
        <ListGroup variant="flush">
          <ListGroup.Item className="left-nav-row-Entc-01">
            <Link
              to="/cse"
              className={location.pathname === "/cse" ? "active-link" : "/cse"}
            >
              Computer Science & Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Entc">
            <Link
              to="Entc"
              className={location.pathname === "Entc" ? "active-link" : ""}
            >
              <b>Entctronics & Telecommunication Engineering</b>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Entc">
            <Link
              to="/instru"
              className={location.pathname === "/intru" ? "active-link" : "/instru"}
            >
             Instrumentation Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Entc">
            <Link
              to="/Elec"
              className={location.pathname === "/Elec" ? "active-link" : "Elec"}
            >
              Electrical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Entc">
            <Link
              to="/mech"
              className={location.pathname === "/mech" ? "active-link" : "/mech"}
            >
              Mechanical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Entc">
            <Link
              to="Cvl"
              className={location.pathname === "Cvl" ? "active-link" : ""}
            >
              Civil Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-Entc">
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
<Col md={8} className='right-content-Entc' >
             
            <div >
              <Entcvm className='right-content-Entc' />
            </div>

        
            
          </Col>
</Row>
      </Container>
      
    </div>
  )
}

export default Entc