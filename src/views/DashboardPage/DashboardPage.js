import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import Kpi from "../../components/Kpi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { actions as balanceActions } from "../../actions/app/BalanceActions";

export const DashboardPage = (props) => {

    const [isMounted, setMounted] = useState(false);

    const {items, index} = props;

    useEffect(() => {
        if (!isMounted) {
            setMounted(true);
            index();
        }
    }, [isMounted, index])

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
                        value={items.balance ? items.balance : 'N.A.'}
                        icon={<FontAwesomeIcon icon={faEuroSign} className="fa-4x" />}
                    />
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        index: () => dispatch(balanceActions.index()),
    }
}

const mapStateToProps = state => {
    return {
        items: state.balance.items,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);