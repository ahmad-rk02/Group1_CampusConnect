import React from 'react'
import { Container, Row, Col, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './committees.css'

const Committees = () => {

  const CommitteeTable = [
    { id: 1, name:'Anti ragging Committees' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Anti-Ragging-Committee.pdf' , incharge: 'Dr P. Washimkar' },
    { id: 2, name: 'Grievance Redressal Committee' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Grievance-Redressal-Committee.pdf' , incharge: 'Kranti Bokhre'},
    { id: 3, name: 'Internal Complaint committee' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Internal-Complaint-Committee.pdf' , incharge: 'Mrs. Bokhare'},
    { id: 4, name: 'SC/ST,WOMEN/GIRLS complaint committee' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/SC-ST-Committee.pdf' , incharge: 'Amit R Sakhare'},
    { id: 5, name: 'Online Grievance Form' , text: 'Form', dated: '03/12/2024', circular: '/login',  incharge: 'Student Section'},
    { id: 6, name: 'IIC Council' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/IIC-Council-Office-Order-2024.pdf',  incharge: '--'},
    { id: 7, name: 'Internal Quality Assurance Cell' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/IQAC-Office-Order-2024.pdf',  incharge: '--'},
    { id: 8, name: 'Student Counsellor Cell' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Student-Counsellor-Cell.pdf',  incharge: '--'},
    { id: 9, name: 'Industry Institute Cell & Entrepreneurship Cell' , text: 'Circular', dated: '03/12/2024', circular: 'https://www.gcoec.ac.in/gcoec/PDF/Institution-Industry-cell.pdf',  incharge: '--'},
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

        <Row className="left-index-committee-clg" >
          {/* Left Sidebar */}
          <Col md={2} xs={12} className='left-sidebar-committee-clg' >
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

          <Col md={9} xs={12} className='committee-div'>

            <div className='head-right-top-committee-clg'  >
              <h3 style={{ color: '#102C57', backgroundColor:'rgb(234,219,200)',padding:'10px' }} >GCOEC Committees</h3></div>

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
