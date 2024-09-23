import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './Girlshostel.css';
import { Link, useLocation } from 'react-router-dom';

const Girlshostel = () => {
  return (
    <div> <Container fluid className="p-0 w-100">
    {/* Header Section */}
    <Row className='head-box-gh'>
      <Col>
        <h1 className="text-left-gh">HOSTEL</h1>
      </Col>
    </Row>

    <Row noGutters className="flex-nowrap left-index-gh just" >
      {/* Left Sidebar */}
      <Col md={2} className='left-sidebar-gh' class="left-sidebar-gh">
        <Card className="left-nav-gh" class='left-nav-gh'>
          <ListGroup variant="flush">
            <ListGroup.Item className="left-nav-row-gh">
            <Link
                  to="/Girl's Hostel"
                  className={location.pathname === "/Girl's Hostel" ? "active-link" : ""}
                >
                  Girl's Hostel
                  </Link>
                  </ListGroup.Item>
                  
            <ListGroup.Item className="left-nav-row-gh">
            <Link
                  to="/Boy's Hostel"
                  className={location.pathname === "/Boy's Hostel" ? "active-link" : ""}
                >
              Boy's Hostel
              </Link>
              </ListGroup.Item>
            
              
          </ListGroup>
        </Card>
      </Col>

      <Col>

      </Col>

    </Row>
  </Container>
      
    </div>
  );
};

export default Girlshostel
