import React, { useState } from "react";
import { Container, Card, Form, Button, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./TPOstuAdmin.css";
import { useNavigate } from "react-router-dom";

const TPOstuAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Dummy validation (Replace with actual API call later)
    if (email === "admin@example.com" && password === "password123") {
      alert("Login successful! Redirecting...");
      navigate("/TPOstuFeedback");
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <Container fluid className="cont-adm d-flex justify-content-center align-items-center">
      <Row className="w-100 justify-content-center">
        <Col xs={11} sm={8} md={6} lg={4}>
          <Card className="crd-cont-admin p-4">
            <h3 className="text-center adm-stu-head mb-4">Admin Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading} className="w-100 btn-adm">
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TPOstuAdmin;
