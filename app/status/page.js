"use client"

import { Container, Nav, Navbar, Tab, Tabs, Table, Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import styles from '../status.module.css';
import WorkshopForm from '../components/WorkshopForm';

export default function Home() {
  const [key, setKey] = useState('workshop');

  return (
    <Container fluid className={styles.main}>
      <Navbar bg="light" expand="lg" sticky="top" className="mb-3">
        <Navbar.Brand href="#home">RadiTMS Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#workshop">Workshop</Nav.Link>
            <Nav.Link href="#fuel">Fuel</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#master-data">Master Data</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="workshop" title="Workshop">
          <Container>
            <h3>Trucks Under Repair</h3>
            <p>Breakdown: 5 | Finished: 10 | Total Done: 15</p>
            <WorkshopForm />
          </Container>
        </Tab>
        <Tab eventKey="fuel" title="Fuel">
          <Container>
            <h3>Fuel Consumption</h3>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formTruckReg">
                    <Form.Label>Truck Registration</Form.Label>
                    <Form.Control type="text" placeholder="Enter truck registration" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formTankCapacity">
                    <Form.Label>Tank Capacity</Form.Label>
                    <Form.Control type="text" placeholder="Enter tank capacity" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formAmountFueled">
                    <Form.Label>Amount Fueled</Form.Label>
                    <Form.Control type="text" placeholder="Enter amount fueled" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formComments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="text" placeholder="e.g., From Nairobi to Kampala" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formTopUpFuel">
                <Form.Check type="checkbox" label="Top up fuel?" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Tab>
        <Tab eventKey="store" title="Store">
          <Container>
            <h3>Spares In Stock</h3>
            <p>Purchase Order: 20 | Issued: 15 | Trucks Issued: 10 | Reorder Alerts: 5</p>
          </Container>
        </Tab>
        <Tab eventKey="master-data" title="Master Data">
          <Container>
            <h3>Master Data</h3>
            <p>Details about the master data.</p>
          </Container>
        </Tab>
      </Tabs>

      <Container>
        <h3>All Trucks</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Reg No</th>
              <th>Tank Capacity</th>
              <th>Last Service Day</th>
              <th>Total Spares/Month</th>
              <th>Top Up Fuel/Month L</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KAA 123A</td>
              <td>200L</td>
              <td>2023-06-15</td>
              <td>2855</td>
              <td>850</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
