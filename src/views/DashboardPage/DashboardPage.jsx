import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Kpi } from "../../components/Kpi";
import { useGetBalanceQuery } from "../../features/balanceSlice";

export function DashboardPage() {

  // Fetch the data
  const { data: balance } = useGetBalanceQuery();

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>Dashboard</h1>
              <Row>
                <Col>
                  <Kpi title="Balance" value={balance?.balance ?? null} variant="primary" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
