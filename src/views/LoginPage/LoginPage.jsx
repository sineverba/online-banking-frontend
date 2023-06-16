import React from "react";
import { Container } from "react-bootstrap";
import { ENTITY_LOGIN } from "../../utils/constants/constant";
import { GenericForm } from "../GenericPage/GenericForm";

export function LoginPage() {
  return (
    <Container fluid>
      <Container className="container-login">
        <GenericForm entity={ENTITY_LOGIN} />
      </Container>
    </Container>
  );
}

export default LoginPage;
