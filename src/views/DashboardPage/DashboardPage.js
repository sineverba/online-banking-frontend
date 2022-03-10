import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import Kpi from "../../components/Kpi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

export const DashboardPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Title label="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <Kpi
                        title="balance"
                        value="1234.56"
                        icon={<FontAwesomeIcon icon={faEuroSign} className="fa-4x" />}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default DashboardPage;