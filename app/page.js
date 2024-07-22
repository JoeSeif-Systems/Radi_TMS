"use client"

import { useState } from 'react';
import { Form, InputGroup, Button, Alert, Container, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required.');
      return;
    }
    setValidated(true);
    setError('');
    // Handle login logic here
    window.location = "/status"
  };

  return (
    <main className={styles.main}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className={styles.header}>
              Radi TMS Login
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form noValidate validated={validated.toString()} onSubmit={handleSubmit}>
              <InputGroup className="p-2 mb-3">
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="System username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your username.
                </Form.Control.Feedback>
              </InputGroup>
              <InputGroup className="p-2 mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback>
              </InputGroup>
              <div className="d-flex justify-content-center">
                <Button type="submit">Login</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
