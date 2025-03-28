import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import "./TPOempAdmin.css";
import { useNavigate } from "react-router-dom";

const TPOAdmin = () => {
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
      navigate("/TPOempFeedback"); // Redirect to TPOstuFeedback page
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center cont-adm" style={{ height: "100vh" }}>
      <Card style={{ width: "350px", padding: "20px" }} className="crd-cont-admin">
        <h3 className="text-center adm-stu-head">Admin Login</h3>
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

          <Form.Group controlId="password" className="mb-3">
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
    </Container>
  );
};

export default TPOAdmin;
