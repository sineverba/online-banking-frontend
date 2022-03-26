import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import { actions as bankAccountTranscationsActions } from "../../actions/app/BankAccountTransactionsActions";
import DataTable from "react-data-table-component";
import Amount from "../../components/Amount";
import Date from "../../components/Date";

export const BankAccountTransactionsPage = (props) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [perPageNumber, setPerPageNumber] = useState(10);
    const [orderBy, setOrderBy] = useState("transactionDate");
    const [orderWay, setOrderWay] = useState("desc");

    const { items, index, total, isLoading } = props;

    useEffect(() => {
        document.title = `${process.env.REACT_APP_NAME} - Bank Account Transactions`;
        index(pageNumber, perPageNumber, orderBy, orderWay);
    }, [index, pageNumber, perPageNumber, orderBy, orderWay]);

    const columns = [
        {
            name: 'Amount',
            sortable: true,
            sortField: 'amount',
            selector: row => <Amount amount={row.amount} />
        },
        {
            name: "Purpose",
            sortable: true,
            sortField: "purpose",
            selector: row => row.purpose
        },
        {
            name: "Date",
            sortable: true,
            sortField: "transactionDate",
            selector: row => <Date date={row.transactionDate} />
        },
    ];

    const handlePerRowsChange = (e) => {
        setPerPageNumber(e);
    }

    const handlePageChange = (e) => {
        setPageNumber(e);
    }

    const handleSort = ({ sortField }, sortDirection) => {
        setOrderBy(sortField);
        setOrderWay(sortDirection);
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
                        data={items ? items : []}
                        pagination
                        paginationServer
                        paginationTotalRows={total}
                        progressPending={isLoading}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                        sortServer
                        onSort={handleSort}
                    />
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        index: (pageNumber, perPageNumber, orderBy, orderWay) => dispatch(bankAccountTranscationsActions.index(pageNumber, perPageNumber, orderBy, orderWay)),
    }
}

const mapStateToProps = state => {
    return {
        items: state.bankAccountTransactions.items,
        total: state.bankAccountTransactions.total,
        isLoading: state.bankAccountTransactions.isLoading,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BankAccountTransactionsPage);