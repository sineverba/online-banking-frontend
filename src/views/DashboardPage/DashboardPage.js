import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import Kpi from "../../components/Kpi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { actions as balanceActions } from "../../actions/app/BalanceActions";
import { Loading } from "../../components/Loading";

export const DashboardPage = (props) => {

    const [isMounted, setMounted] = useState(false);

    const {items, index, isLoading} = props;

    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME} - Dashboard`;
        if (!isMounted) {
            setMounted(true);
            index();
        }
    }, [isMounted, index])

    const getBalance = () => {
        if (isLoading) {
            return <Loading />;
        }
        if (items.balance) {
            return items.balance;
        }
        return 'N.A.';
    }

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
                        value={getBalance()}
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
        isLoading: state.balance.isLoading,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);