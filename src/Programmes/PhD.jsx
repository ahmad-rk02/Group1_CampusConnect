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
        <Row  className='head-box-phd'>
          <Col>
            <h1 className="text-left">PROGRAMMES</h1>
          </Col>
        </Row>

        <Row noGutters className="left-index-phd just" >
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-phd'>
            <Card className="left-nav-phd" >
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-phd">
                  <Link
                    to="/ug"
                    className={location.pathname === "/ug" ? "active-link" : ""}
                  >
                    UG (B.Tech)
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-phd">
                  <Link
                    to="/pg"
                    className={location.pathname === "/pg" ? "active-link" : ""}
                  >
                    PG (M.Tech)
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-phd-01">
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
            <div className=" mt-5 table-n-head" style={{ paddingTop:"0px" }}>

              <div  className='head-table-top-phd'>
                <h3 style={{ color: '#102C57' }} > Ph.D Programmes</h3></div>

              <p className="para-phd">
                PhD program will have qualities of life-long learning, team work with effective communication for successful implementation of Civil Engineering projects.
              </p>

              <Table  className='phd-table' striped bordered hover>
                <thead  className='table-header-phd'>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name of Programme</th>
                    <th>Year of Establishment</th>
                    <th>Duration (Years)</th>
                    <th>Intake Capacity</th>
                  </tr>
                </thead>
                <tbody className="table-body-phd">
                  {PhDTable.map((prog) => (
                    <tr key={prog.id}>
                      <td>{prog.id}</td>
                      <td className='name-phd-prog'>{prog.name}</td>
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
