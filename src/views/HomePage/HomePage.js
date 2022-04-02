import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";


export const HomePage = () => {

    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME}`;
    });

    return (
        <Container fluid>
            <Row>
                <Col>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;