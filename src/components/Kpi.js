import { Container, Card, Row, Col } from "react-bootstrap";

export const Kpi = (props) => {
    return (
        <Card className="kpi">
            <Card.Body>
                <Container fluid>
                <Row className="align-items-center">
                    <Col xs={3} lg={2}>
                        {props.icon}
                    </Col>
                    <Col>
                        <Card.Title><h1>{props.title}</h1></Card.Title>
                        <Card.Text>{props.value}</Card.Text>
                    </Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Kpi;