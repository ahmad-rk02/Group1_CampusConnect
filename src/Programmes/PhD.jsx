import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './PhD.css';



const PhD = () => {

  const PhDTable = [
    { id: 1, name: 'Mechanical Engineering', year: 2020, duration: "2 to 5", capacity: 10 },
    { id: 2, name: 'Electrical Engineering', year: 2014, duration: "2 to 5", capacity: 10 },
  ];


  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row class="head-box-phd" className='head-box-phd'>
          <Col>
            <h1 className="text-left">PROGRAMMES</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index just" >
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar' class="left-sidebar">
            <Card className="left-nav-phd" class='left-nav-phd'>
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row">
                  <Link
                    to="/ug"
                    className={location.pathname === "/ug" ? "active-link" : ""}
                  >
                    UG (B.Tech)
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row">
                  <Link
                    to="/pg"
                    className={location.pathname === "/pg" ? "active-link" : ""}
                  >
                    PG (M.Tech)
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-01">
                  <Link
                    to="/phd"
                    className={location.pathname === "/phd" ? "active-link" : ""}
                  >
                    Ph.D
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>
            <div className="container mt-5 table-n-head" class='table-n-head'>

              <div class='head-table-top' className='head-table-top'>
                <h3 style={{ color: '#102C57' }} > Ph.D</h3></div>

              <p style={{ paddingBottom: "15px", paddingTop: "15px", fontSize: "medium", fontWeight: "500", width: "70%", wordWrap: "break-word" }}>
                PhD program will have qualities of life-long learning, team work with effective communication for successful implementation of Civil Engineering projects.
              </p>

              <Table class='phd-table' className='phd-table' striped bordered hover>
                <thead class="table-header-phd" className='table-header-phd'>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name of Programme</th>
                    <th>Year of Establishment</th>
                    <th>Duration (Years)</th>
                    <th>Intake Capacity</th>
                  </tr>
                </thead>
                <tbody class="table-body-phd">
                  {PhDTable.map((prog) => (
                    <tr key={prog.id}>
                      <td>{prog.id}</td>
                      <td class='name-phd-prog'>{prog.name}</td>
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
    </>
  );
};

export default PhD;
