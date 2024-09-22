import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './UG.css';



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
      <Row className='head-box-ug'>
        <Col>
          <h1 className="text-left">PROGRAMMES</h1>
        </Col>
      </Row>

      <Row noGutters className="flex-nowrap left-index-ug just" >
        {/* Left Sidebar */}
        <Col md={2} className='left-sidebar-ug' class="left-sidebar-ug">
          <Card className="left-nav-ug" class='left-nav-ug'>
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-ug">
              <Link
                    to="/ug"
                    className={location.pathname === "/ug" ? "active-link" : ""}
                  >
                    UG (B.Tech)
                    </Link>
                    </ListGroup.Item>
                    
              <ListGroup.Item className="left-nav-row-ug">
              <Link
                    to="/pg"
                    className={location.pathname === "/pg" ? "active-link" : ""}
                  >
                PG (M.Tech)
                </Link>
                </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-ug">
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

            <div  className='head-table-top' style={{width: "80%", backgroundColor: "#eadbc8"}}>
            <h3 style={{ color: '#102C57' }} >UG (B.Tech) Programmes</h3></div>

            <p style={{paddingTop: "50px", paddingBottom: "0px", fontSize: "large", fontWeight: "700", width: "80%", wordWrap: "break-word" }}>
             (B.Tech degree will be awarded instead of B.E. from A.Y. 2022-23 by Gondwana University)
            </p >

            <p style={{paddingBottom: "15px", fontSize: "medium", fontWeight: "500", width: "80%", wordWrap: "break-word" }}>
            Graduates of the program will have technical expertise, leadership, and ethical qualities to design and execute Civil Engineering projects.
            </p>

            <Table  className='ug-table' style={{width: "80%"}} striped bordered hover>
              <thead className='table-header-ug'>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name of Programme</th>
                  <th>Year of Establishment</th>
                  <th>Duration (Years)</th>
                  <th>Intake Capacity</th>
                </tr>
              </thead>
              <tbody className="table-body-ug">
                {UgTable.map((prog) => (
                  <tr key={prog.id}>
                    <td>{prog.id}</td>
                    <td className='name-ug-prog'>{prog.name}</td>
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

export default UG;
