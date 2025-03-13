import React from 'react';
import INSTRUCarousel from '../../Departments/Instrumentation/INSTRUCarousel'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './INSTRU.css'
import { Link } from 'react-router-dom';
import INSTRUvm from '../../Departments/Instrumentation/INSTRUvm';


const instru = () => {
  return (
    
       <div className='instru-page-div d-flex flex-column'>
      <Container fluid className="p-0 w-100 flex-grow-1">

      

      <Row className='head-box-instru'>
          <h1 className="text-left">DEPARTMENTS</h1>
        </Row>

        <Row>

<INSTRUCarousel />

<Row className=" some-container-for-dropdown g-0 overlay-row w-100    {'main-container-dd ${openDropdown ? 'dropdown-open' : ''}'} "  >
  {/* Left Sidebar */}
  <Col md={4} className='left-sidebar-instru overlay-col ' >
    <div className="left-sidebar-wrapper">
      <Card className="left-nav-instru">
        <ListGroup variant="flush">
          <ListGroup.Item className="left-nav-row-instru-01">
            <Link
              to="/cse"
              className={location.pathname === "" ? "active-link" : "/cse"}
            >
              Computer Science & Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
              Electronics & Telecommunication Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
             <b>Instrumentation Engineering</b> 
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/instru"
              className={location.pathname === "/instru" ? "active-link" : ""}
            >
              Electrical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to="/mech"
              className={location.pathname === "" ? "active-link" : "/mech"}
            >
              Mechanical Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
            <Link
              to=""
              className={location.pathname === "" ? "active-link" : ""}
            >
              Civil Engineering
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="left-nav-row-instru">
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
<Col md={8} className='right-content-instru' >
             
            <div >
              <INSTRUvm className='right-content-instru' />
            </div>

            
          </Col>
</Row>
      </Container>
      
    </div>
  )
}

export default instru;
