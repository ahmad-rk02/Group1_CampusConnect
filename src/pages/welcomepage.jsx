import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './welcomepage.css'

function WelcomeSection() {
  const [keyPeople, setKeyPeople] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_API_BASE_URL}/api/key-pupils?populate=*`)
      .then(response => response.json())
      .then(data => {
        if (data && data.data) {
          setKeyPeople(data.data.map(person => ({
            id: person.id,
            name: person.name,
            designation: person.designation,
            imageUrl: person.image?.url || '' // Remove the URL prefixing
          })));
        }
      })
      .catch(error => console.error('Error fetching key people:', error));
  }, []);

  return (
    <Container fluid className="my-5 px-3 px-md-5 welcome-section">
      <Row className="align-items-start">
        <Col xs={12} md={8} className="mb-4 wel">
          <h3 className="fw-bold text-center text-md-start">
            Welcome to{' '}
            <span style={{ color: '#0066cc', textDecoration: 'underline' }}>
              Government College of Engineering, Chandrapur
            </span>
          </h3>
          <p className="welcome-para">
            Government College of Engineering Chandrapur is established in 1996. This is the only Government Institute under Gondwana University, Gadchiroli. This Government institute is completely funded by Government of Maharashtra. The Institute is under Director of Technical Education, M.S., Mumbai and is administered through its Regional office at Nagpur. Nowadays, due to globalization, there is stiff competition at the national & international level as well as phenomenal growth in technology. For this, competent technocrats & engineers are in great demand, and to serve this requirement, Government College of Engineering, Chandrapur is taking efforts to produce high-quality technocrats.
          </p>
        </Col>

        <Col xs={12} md={4} className="key-people-section">
          <h5 className="fw-bold text-center text-md-start">Key People</h5>
          {keyPeople.map((person) => (
            <Card key={person.id} className="mb-3 border-0">
              <Row className="g-0 align-items-center">
                <Col xs={4} md={4} className="text-center">
                  <Card.Img
                    src={person.imageUrl}
                    alt={person.name}
                    className="img-fluid rounded-circle"
                  />
                </Col>
                <Col xs={8} md={8}>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-1" style={{ fontSize: '1rem' }}>
                      {person.name}
                    </Card.Title>
                    <Card.Text className="mb-0">{person.designation}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomeSection;