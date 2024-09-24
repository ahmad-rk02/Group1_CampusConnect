import React from 'react'
import { Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './committees.css'

const Committees = () => {

  const CommitteeTable = [
    { id: 1, name:'Anti ragging Committees' , text: 'Circular', dated: '16/03/2023', circular: 'http://localhost:5173/wsnIot-lab-09-Jul-2021-13-48-09.pdf' , incharge: 'Dr P. Washimkar' },
    { id: 2, name: 'Grievance Redressal Committee' , text: 'Circular', dated: '16/03/2023', circular: 'http://localhost:5173/4TB%20surveillance%20Hard%20Disk.pdf' , incharge: 'Kranti Bokhre'},
    { id: 3, name: 'Internal Complaint committee' , text: 'Circular', dated: '16/03/2023', circular: 'http://localhost:5173/66U%20Cabal%2019%20Rack.pdf' , incharge: 'Mrs. Bokhare'},
    { id: 4, name: 'SC/ST,WOMEN/GIRLS complaint committee' , text: 'Circular', dated: '16/03/2023', circular: 'http://localhost:5173/CCTV%2020%20CH%20NVR.pdf' , incharge: 'Amit R Sakhare'},
    { id: 5, name: 'Online Grievance Form' , text: 'Form', dated: '16/03/2023', circular: '/login',  incharge: 'Student Section'},
  ];

  return (
    <div>

      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className='head-box-committee-clg'>
          <Col>
            <h1 className="text-left">ADMINISTRATION</h1>
          </Col>
        </Row>

        <Row noGutters className="flex-nowrap left-index-committee-clg just" >
          {/* Left Sidebar */}
          <Col md={2} className='left-sidebar-committee-clg' >
            <Card className="left-nav-committee-clg" >
              <ListGroup variant="flush">
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Principal and HOD
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Student Section
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to=""
                    className={location.pathname === "" ? "active-link" : ""}
                  >
                    Office
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg-01">
                  <Link
                    to="/committees"
                    className={location.pathname === "/committees" ? "active-link" : ""}
                  >
                    Commiittees
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/tenders"
                    className={location.pathname === "/tenders" ? "active-link" : ""}
                  >
                    Tenders
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className="left-nav-row-committee-clg">
                  <Link
                    to="/login"
                    className={location.pathname === "/login" ? "active-link" : ""}
                  >
                    Grievance Form
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col>

            <div className='head-right-top-committee-clg' style={{ width: "75%", backgroundColor: "#eadbc8" }}>
              <h3 style={{ color: '#102C57' }} >GCOEC Committees</h3></div>

            <Table className='committee-clg-table' style={{ width: "75%" }} striped bordered hover>
              <thead className='table-header-committee-clg'>
                <tr>
                <th>Sr. No.</th>
                <th>Name of Committees</th>
                <th>Dated</th>
                  <th>Official Circular/Form</th>
                  <th>Incharge</th>
                </tr>
              </thead>
              <tbody className="table-body-committee-clg">
                {CommitteeTable.map((prog) => (
                  <tr key={prog.id}>
                    <td>{prog.id}</td>
                    <td className='name-of-committees'>{prog.name}</td>
                    <td>{prog.dated}</td>
                    <td className='table-row-committee-clg'>
                      <a href={prog.circular} target="_blank" rel="noopener noreferrer">
                        {prog.text}
                      </a>
                    </td>
                    <td>{prog.incharge}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </Col>

        </Row>
      </Container>


    </div>
  )
}

export default Committees
