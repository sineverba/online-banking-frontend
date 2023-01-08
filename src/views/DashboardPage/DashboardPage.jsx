import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export function DashboardPage() {

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Dashboard</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
