import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './UG.css';

const UG = () => {
  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className="bg-primary text-white py-3">
        <Col>
          <h1 className="text-center">ADMINISTRATION</h1>
        </Col>
      </Row>
      
      <Row noGutters className="flex-nowrap left-index">
        {/* Left Sidebar */}
        <Col md={3} className="">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>About Institute</ListGroup.Item>
              <ListGroup.Item>Principal's Desk</ListGroup.Item>
              <ListGroup.Item className="font-weight-bold">Vision and Mission</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UG;
