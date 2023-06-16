import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ENTITY_LOGIN } from "../../utils/constants/constant";
import { GenericForm } from "../GenericPage/GenericForm";

export function LoginPage() {
  return (
    <Container fluid>
      <Container className="container-login">
        <GenericForm entity={ENTITY_LOGIN} />
        <Row>
          <Col>
            <Image src="download.png" alt="QRCode" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default LoginPage;
