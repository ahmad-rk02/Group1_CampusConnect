import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Girlshostel.css';

const Girlshostel = () => {
  return (
    
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row  className='head-box-gh' >
        <Col>
          <h1 className="text-left-gh">HOSTEL</h1>
        </Col>
      </Row>

      <Row  className="flex-nowrap left-index-gh just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar-gh' >
          <Card className="left-nav-gh" >
          <ListGroup variant="flush">
             
              <ListGroup.Item className="left-nav-row-gh">
              <Link
                    to="/boyshostel"
                    className={location.pathname === "/boyshostel" ? "active-link-gh" : ""}
                  >
                Boy's Hostel
                </Link>
                </ListGroup.Item>
                 <ListGroup.Item className="left-nav-row-gh-01">
              <Link
                    to="/Girlshostel"
                    className={location.pathname === "/Girlshostel" ? "active-link-gh" : ""}
                  >
                    Girl's Hostel
                    </Link>
                    </ListGroup.Item>
              
            </ListGroup>
          </Card>
        </Col>
      
        </Row>
        </Container>
  );
};

export default Girlshostel;
