import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Title from "../../components/Title";
import { actions as bankAccountTranscationsActions } from "../../actions/app/BankAccountTransactionsActions";
import DataTable from "react-data-table-component";
import Amount from "../../components/Amount";
import Date from "../../components/Date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import Toolbar from "../../components/Toolbar";
import ModalPopup from "../../components/ModalPopup";
import PaymentsForm from "../PaymentsPage/PaymentsForm";

export const BankAccountTransactionsPage = (props) => {

    const [pageNumber, setPageNumber] = useState(1);
    const [perPageNumber, setPerPageNumber] = useState(10);
    const [orderBy, setOrderBy] = useState("transactionDate");
    const [orderWay, setOrderWay] = useState("desc");
    const [show, setShow] = useState(false);

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

    const getToolbar = () => {
        return [
            {
                handleProp: openModalPopup,
                value: null,
                variant: "success",
                label: "make a payment",
                icon: <FontAwesomeIcon icon={faEuroSign} />
            }
        ];
    }

    const openModalPopup = () => {
        setShow(true);
    }

    const handleClick = () => {
        setShow(false);
    }
    const buildTabsForModal = () => {
        return [
            {
                tabEventKey: "payment",
                tabTitle: "make a payment",
                children: <PaymentsForm />,
            },
        ];
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
                    <Toolbar data={getToolbar()} />
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
            <ModalPopup
                show={show}
                onHandleClick={handleClick}
                tabs={buildTabsForModal()}
            >
            </ModalPopup>
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