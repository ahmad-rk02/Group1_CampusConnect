import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './PG.css';


const PG = () => {

  const PGTable = [
    { id: 1, name: 'Electrical Power System', year: 2019, duration: 2, capacity: 18 },
    { id: 2, name: 'Mechanical Engineering Design', year: 2019, duration: 2, capacity: 18},
  ];


  return (
    <>
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row  className='head-box-PG' >
        <Col>
          <h1 className="text-left">PROGRAMMES</h1>
        </Col>
      </Row>

      <Row  className="flex-nowrap left-index-PG just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar-PG' >
          <Card className="left-nav-PG" >
          <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-PG">
              <Link
                    to="/ug"
                    className={location.pathname === "/ug" ? "active-link" : ""}
                  >
                    UG (B.Tech)
                    </Link>
                    </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-PG-01">
              <Link
                    to="/pg"
                    className={location.pathname === "/pg" ? "active-link" : ""}
                  >
                PG (M.Tech)
                </Link>
                </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-PG">
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
          <div className=" mt-5 table-n-head" style={{ paddingTop:"0px" }} >

            <div className='head-table-top'>
            <h3 style={{ color: '#102C57' }} >PG (M.Tech) Programmes</h3>
            </div>

            <p style={{paddingTop: "15px", paddingBottom: "15px", fontSize: "medium", fontWeight: "500", width: "70%", wordWrap: "break-word" }}>
            Graduates of the program will develop the sensitivity towards environment and society for sustainable development and effective disaster management.
            </p>

            <Table className='PG-table' striped bordered hover>
              <thead  className='table-header-PG'>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Programme</th>
                  <th>Year of Establishment</th>
                  <th>Duration (Years)</th>
                  <th>Intake Capacity</th>
                </tr>
              </thead>
              <tbody className="table-body-PG">
                {PGTable.map((prog) => (
                  <tr key={prog.id}>
                    <td>{prog.id}</td>
                    <td className='name-PG-prog'>{prog.name}</td>
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

export default PG;