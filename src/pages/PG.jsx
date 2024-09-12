import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './PG.css';
import Footer from './Footer';


const PG = () => {

  const PGTable = [
    { id: 1, name: 'Electrical Power System', year: 2019, duration: 2, capacity: 18 },
    { id: 2, name: 'Mechanical Engineering Design', year: 2019, duration: 2, capacity: 18},
  ];


  return (
    <>
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row class="head-box-PG" className='head-box-PG'>
        <Col>
          <h1 className="text-left">PROGRAMMES</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar' class="left-sidebar">
          <Card className="left-nav-PG" class='left-nav-PG'>
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row">UG (B.Tech)</ListGroup.Item>
              <ListGroup.Item className="left-nav-row-01">PG (M.Tech)</ListGroup.Item>
              <ListGroup.Item className="left-nav-row">Ph.D</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        <Col>
          <div className="container mt-5 table-n-head" class='table-n-head'>

            <div class='head-table-top' className='head-table-top'>
            <h3 style={{ color: '#102C57' }} >PG (M.Tech) Programmes</h3></div>

            <p style={{paddingTop: "15px", paddingBottom: "15px", fontSize: "medium", fontWeight: "500", width: "70%", wordWrap: "break-word" }}>
            Graduates of the program will develop the sensitivity towards environment and society for sustainable development and effective disaster management.
            </p>

            <Table class='PG-table' className='PG-table' striped bordered hover>
              <thead class="table-header-PG" className='table-header-PG'>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Programme</th>
                  <th>Year of Establishment</th>
                  <th>Duration (Years)</th>
                  <th>Intake Capacity</th>
                </tr>
              </thead>
              <tbody class="table-body-PG">
                {PGTable.map((prog) => (
                  <tr key={prog.id}>
                    <td>{prog.id}</td>
                    <td class='name-PG-prog'>{prog.name}</td>
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

export default PG;
