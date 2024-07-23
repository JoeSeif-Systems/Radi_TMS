"use client"


import React from 'react'
import { Form, Col, Row, Container, Button } from 'react-bootstrap'

const WorkshopForm = () => {
  return (
    <>
      <Container>
        <h3>Add New Job</h3>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formTruckReg">
                <Form.Label>Truck Registration</Form.Label>
                <Form.Control type="text" placeholder="Enter truck registration" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formJobName">
                <Form.Label>Job Name</Form.Label>
                <Form.Control type="text" placeholder="Enter job name" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formJobDescription">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter job description" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formMechanicAssigned">
                <Form.Label>Mechanic Assigned</Form.Label>
                <Form.Control as="select">
                  <option>Mechanic 1</option>
                  <option>Mechanic 2</option>
                  <option>Mechanic 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEstimatedJobTime">
                <Form.Label>Estimated Job Time</Form.Label>
                <Form.Control type="text" placeholder="Enter estimated job time" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Control as="select">
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Finished</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formSparesUsed">
                <Form.Label>Spares Used</Form.Label>
                <Form.Control type="text" placeholder="Enter spares used" />
              </Form.Group>
              <Button variant="secondary" type="button" className="mt-2">
                Add Spare
              </Button>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default WorkshopForm
