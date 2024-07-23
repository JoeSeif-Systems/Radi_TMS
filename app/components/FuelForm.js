import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const FuelForm = () => {
  return (
    <div>
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
    </div>
  )
}

export default FuelForm