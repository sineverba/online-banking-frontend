import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export function Kpi(props) {
  const { title, number, icon, variant } = props;

  return (
    <Card className="kpi" bg={variant}>
      <Card.Body>
        <Row>
          <Col>
            <p>{title}</p>
            <p>{number}</p>
          </Col>
          <Col>
            <span className="icon">{icon}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Kpi;
