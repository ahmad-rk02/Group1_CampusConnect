import { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Tenders.css';

const Tenders = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_STRAPI_API_BASE_URL;

  useEffect(() => {
    const fetchTenderData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/gec-tenders?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch tender data");
        }
        const result = await response.json();

        // Sort tenders by tender_date in descending order
        const sortedTenders = Array.isArray(result.data)
          ? result.data.sort((a, b) => new Date(b.tender_date) - new Date(a.tender_date))
          : [];

        setTenders(sortedTenders);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTenderData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container fluid className="p-0 w-100">
      <Row className='head-box-tender'>
        <Col>
          <h1 className="text-left">TENDERS</h1>
        </Col>
      </Row>

      <Row className="left-index-tender">
        <Col md={3} xs={12} className='left-sidebar-tender'>
          <Card className="left-nav-tender">
            <ListGroup variant="flush">
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/principalHods">Principal and HOD</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/studentSection">Student Section</Link>
              </ListGroup.Item>
              <ListGroup.Item className="left-nav-row-tender">
                <Link to="/office">Office</Link>
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

        <Col md={9} xs={12}>
          <div className='tender-portal'>
            <div className='head-right-top-tender'>
              <h3 style={{ color: '#102C57', backgroundColor: 'rgb(234,219,200)', marginTop: '20px', padding: '10px' }}>
                Tenders
              </h3>
            </div>

            <div className='right-top-text-tender'>
              <p>Given are the Circulars of the Tenders published:</p>
            </div>

            <div className='tender-table-box'>
              <Table className='tender-table' striped bordered hover>
                <thead className='table-header-tender'>
                  <tr>
                    <th>Dated</th>
                    <th>Circulars</th>
                  </tr>
                </thead>
                <tbody className="table-body-tender">
                  {tenders.map((tender) => (
                    <tr key={tender.id}>
                      <td>{tender.tender_date}</td>
                      <td className='table-row-tender'>
                        {tender.circular?.map((doc) => (
                          <a
                            key={doc.id}
                            href={`${API_BASE_URL}${doc.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {doc.name}
                          </a>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tenders;
