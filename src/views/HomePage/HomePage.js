import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "./LoginForm";


export const HomePage = () => {
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