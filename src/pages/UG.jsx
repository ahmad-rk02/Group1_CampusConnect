import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './UG.css';
import Footer from './Footer';


const UG = () => {

  const UgTable = [
    { id: 1, name: 'Mechanical Engg. [NBA]', year: 1996, duration: 4, capacity: 60 },
    { id: 2, name: 'Electrical Engg. [NBA]', year: 1996, duration: 4, capacity: 60 },
    { id: 3, name: 'Instrumentation Engg. [NBA]', year: 1996, duration: 4, capacity: 30 },
    { id: 4, name: 'Computer Sci. & Engg.', year: 2007, duration: 4, capacity: 60 },
    { id: 5, name: 'Electronics & Tele. Engg.', year: 2010, duration: 4, capacity: 60 },
    { id: 6, name: 'Civil Engg.', year: 2010, duration: 4, capacity: 60 }
  ];


  return (
    <>
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row class="head-box-ug" className='head-box-ug'>
        <Col>
          <h1 className="text-left">PROGRAMMES</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar' class="left-sidebar">
          <Card className="left-nav-ug" class='left-nav-ug'>
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-01">UG (B.Tech)</ListGroup.Item>
              <ListGroup.Item className="left-nav-row">PG (M.Tech)</ListGroup.Item>
              <ListGroup.Item className="left-nav-row">Ph.D</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <div className="container mt-5 table-n-head" class='table-n-head'>

            <div class='head-table-top' className='head-table-top'>
            <h3 style={{ color: '#102C57' }} >UG (B.Tech) Programmes</h3></div>

            <p style={{paddingTop: "50px", paddingBottom: "0px", fontSize: "large", fontWeight: "700", width: "70%", wordWrap: "break-word" }}>
             (B.Tech degree will be awarded instead of B.E. from A.Y. 2022-23 by Gondwana University)
            </p >

            <p style={{paddingBottom: "15px", fontSize: "medium", fontWeight: "500", width: "70%", wordWrap: "break-word" }}>
            Graduates of the program will have technical expertise, leadership, and ethical qualities to design and execute Civil Engineering projects.
            </p>

            <Table class='ug-table' className='ug-table' striped bordered hover>
              <thead class="table-header-ug" className='table-header-ug'>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Programme</th>
                  <th>Year of Establishment</th>
                  <th>Duration (Years)</th>
                  <th>Intake Capacity</th>
                </tr>
              </thead>
              <tbody class="table-body-ug">
                {UgTable.map((prog) => (
                  <tr key={prog.id}>
                    <td>{prog.id}</td>
                    <td class='name-ug-prog'>{prog.name}</td>
                    <td>{prog.year}</td>
                    <td>{prog.duration}</td>
                    <td>{prog.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

        </Col>

      </Row>
    </Container>
    
    <div className='footer-spacing'>
        <Footer />
      </div>
      
</>
  );
};

export default UG;
