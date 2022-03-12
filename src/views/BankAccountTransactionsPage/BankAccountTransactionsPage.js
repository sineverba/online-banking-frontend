import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import { actions as bankAccountTranscationsActions } from "../../actions/app/BankAccountTransactionsActions";
import DataTable from "react-data-table-component";

export const BankAccountTransactionsPage = (props) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [perPageNumber, setPerPageNumber] = useState(10);

    const {items, index, total} = props;

    useEffect(() => {
        index(pageNumber, perPageNumber);
    }, [index, pageNumber, perPageNumber]);

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

    const handlePerRowsChange = (e) => {
        setPerPageNumber(e);
    }
    const handlePageChange = (e) => {
        setPageNumber(e);
    }

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
                        pagination
                        paginationServer
                        paginationTotalRows={total}
                        onChangeRowsPerPage={handlePerRowsChange}
			            onChangePage={handlePageChange}
                    />
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        index: (pageNumber, perPageNumber) => dispatch(bankAccountTranscationsActions.index(pageNumber, perPageNumber)),
    }
}

const mapStateToProps = state => {
    return {
        items: state.bankAccountTransactions.items,
        total: state.bankAccountTransactions.total,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountTransactionsPage);