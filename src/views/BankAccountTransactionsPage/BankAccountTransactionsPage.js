import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import { actions as bankAccountTranscationsActions } from "../../actions/app/BankAccountTransactionsActions";
import DataTable from "react-data-table-component";

export const BankAccountTransactionsPage = (props) => {

    const [isMounted, setMounted] = useState(false);

    const {items, index} = props;

    useEffect(() => {
        if (!isMounted) {
            setMounted(true);
            index();
        }
    }, [isMounted, index]);

    const columns = [
        {
            name: 'Amount',
            sortable: true,
            sortField: 'amount',
            selector: row => row.amount

        },
        {
            name: "Purpose",
            sortable: true,
            sortField: "purpose",
            selector: row => row.purpose
        }
    ];

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Title label="Bank Account Transactions" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        columns={columns}
                        data={items}
                    />
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        index: () => dispatch(bankAccountTranscationsActions.index()),
    }
}

const mapStateToProps = state => {
    return {
        items: state.bankAccountTransactions.items,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountTransactionsPage);