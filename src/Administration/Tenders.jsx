import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Tenders.css';

const Tenders = () => {
  const TenderTable = [
    { text: 'Quatation Calling Letter', dated: '28/08/2023', circular: 'http://localhost:5173/wsnIot-lab-09-Jul-2021-13-48-09.pdf' },
    { text: '4 TB surveillance Letter', dated: '28/08/2023', circular: 'http://localhost:5173/4TB%20surveillance%20Hard%20Disk.pdf' },
    { text: '66U Cable 19 Rack', dated: '28/08/2023', circular: 'http://localhost:5173/66U%20Cabal%2019%20Rack.pdf' },
    { text: 'CCTV 20 CH NVR', dated: '28/08/2023', circular: 'http://localhost:5173/CCTV%2020%20CH%20NVR.pdf' },
    { text: 'CCTV PoE Switch', dated: '28/08/2023', circular: 'http://localhost:5173/CCTV%20PoE%20Switch.pdf' },
    { text: 'Display Unit', dated: '28/08/2023', circular: 'http://localhost:5173/Display%20Unit.pdf' },
  ];

  return (
    <Container fluid className="p-0 w-100">
      {/* Header Section */}
      <Row className='head-box-tender'>
        <Col>
          <h1 className="text-left">ADMINISTRATION</h1>
        </Col>
      </Row>

      <Row className="left-index-tender">
        {/* Left Sidebar */}
        <Col md={3} xs={12} className='left-sidebar-tender'>
          <Card className="left-nav-tender">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="">Principal and HOD</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="">Student Section</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="">Office</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/committees">Committees</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender-01">
                <Link to="/tenders">Tenders</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/login">Grievance Form</Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>

        {/* Right Content */}
        <Col md={9} xs={12}>
          <div className='head-right-top-tender'>
            <h3 style={{ color: '#102C57', backgroundColor:'rgb(234,219,200)', marginTop:'20px',padding:'10px' }}>Tenders</h3>
          </div>

          <div className='right-top-text-tender'>
            <p>Given are the Circulars of the Tenders published:</p>
          </div>

          <Table className='tender-table' striped bordered hover>
            <thead className='table-header-tender'>
              <tr>
                <th>Dated</th>
                <th>Circulars</th>
              </tr>
            </thead>
            <tbody className="table-body-tender">
              {TenderTable.map((prog) => (
                <tr key={prog.text}>
                  <td>{prog.dated}</td>
                  <td className='table-row-tender'>
                    <a href={prog.circular} target="_blank" rel="noopener noreferrer">
                      {prog.text}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Tenders;