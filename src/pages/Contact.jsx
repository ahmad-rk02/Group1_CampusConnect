import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Container fluid className="p-0 w-100">
        {/* Header Section */}
        <Row className="header-design text-white py-3 mb-2">
          <Col className="header-align">
            <h1 className="text-left ">CONTACT US</h1>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card className="shadow-sm card2 ">
              <p>
                Ballarshah Bypass Road, Chandrapur - 442403,<br />
                State-Maharashtra
              </p>
              <p>
                <strong>Principal Cabin:</strong>
                <a href="tel:+07172227334"> (07172-227334)</a>
              </p>
              <p>
                <strong>Admission Cell:</strong>
                <a href="tel:+07172227702"> (07172-227702)</a>,
                <a href="tel:+9607227702"> 9607227702</a>
              </p>
              <p>
                <strong>Office:</strong>
                <a href="tel:+07172227664"> (07172-227664)</a>
              </p>
              <p>
                <strong>Confidential Section:</strong>
                <a href="tel:+07172227028"> (07172-227028)</a>
              </p>
              <p>
                <strong>Email Id:</strong><br />
                <a href="mailto:principal.gcoechandrapur@dtemaharashtra.gov.in">
                  principal.gcoechandrapur@dtemaharashtra.gov.in
                </a>,<br />
                <a href="mailto:office.gcoechandrapur@dtemaharashtra.gov.in">
                  office.gcoechandrapur@dtemaharashtra.gov.in
                </a>
              </p>
            </Card>
          </Col>


          <Col md={6}>
            <Card className="shadow-sm p-4 mt-3 card3">
              <iframe
                title="GCOE Chandrapur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.062032202545!2d79.31693817468579!3d19.921790624877737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d4719e5cbe07%3A0xb8c55b177f1c18f2!2sGEC!5e0!3m2!1sen!2sin!4v1726080900088!5m2!1sen!2sin" width="100%"
                height="300"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Contact;
