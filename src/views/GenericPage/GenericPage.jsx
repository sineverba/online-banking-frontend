import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Datatable } from "../../components/Datatable";
import { Loading } from "../../components/Loading";
import { useGetTransactionsQuery } from "../../features/apiSlice";
import { ENTITY_TRANSACTIONS } from "../../utils/constants/constant";
import { GenericForm } from "./GenericForm";

export function GenericPage(props) {
  // Get current entity
  const { forceUndefinedForSort, entity } = props;

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("id");
  const [orderWay, setOrderWay] = useState("desc");

  /**
   * Create the querystring.
   *
   *
   * @returns
   */
  const getQueryString = () => {
    const params = {
      page: page - 1,
      perPage,
      orderBy,
      orderWay
    };
    const queryString = new URLSearchParams(params).toString();

    return queryString;
  };

  /**
   * Set here all fetches.
   * If entity is different, skip it.
   *
   * Pick from useGet[...] three datas
   */
  const {
    data: transactions,
    isLoading: isLoadingTransactions,
    isFetching: isFetchingTransactions
  } = useGetTransactionsQuery(getQueryString(), {
    skip: entity !== ENTITY_TRANSACTIONS
  });

  /**
   * Get the columns for the table
   * @returns
   */
  const getColumns = () => [
    {
      name: "amount",
      sortable: true,
      sortField: "amount",
      selector: (row) => row.amount
    },
    {
      name: "purpose",
      sortable: true,
      sortField: "purpose",
      selector: (row) => row.purpose
    },
    {
      name: "date",
      sortable: true,
      sortField: "transactionDate",
      selector: (row) => row.transactionDate
    },
  ];

  /**
   * Check if loading or not.
   * We check against current entity and ONE OF loading OR fetching
   *
   */
  const checkIsLoading = () =>
    entity === ENTITY_TRANSACTIONS &&
    (isLoadingTransactions || isFetchingTransactions);

  /**
   * Return items.
   * We start with an empty array, populated from current entity
   *
   * @returns array
   */
  const getItems = () => {
    let items = [];
    if (
      transactions &&
      transactions.content &&
      transactions.content.length > 0
    ) {
      // Copy all array into items
      items = [...transactions.content];
    }
    return items;
  };

  /**
   * Get the total number of elements
   *
   * @returns the total number of elements
   */
  const getTotalRows = () => {
    if (transactions && transactions.totalElements) {
      return transactions.totalElements;
    }
    return 0;
  };

  /**
   * Set the new page.
   *
   * @param {*} e the page
   */
  const handlePageChange = (e) => {
    setPage(e);
  };

  /**
   * Set the number of elements per page
   *
   * @param {*} e the number of elements
   */
  const handlePerRowsChange = (e) => {
    setPerPage(e);
  };

  const handleSort = ({ sortField }, sortDirection) => {
    let finalSortField = sortField;
    /**
     * Yes... only for test :p
     */
    if (forceUndefinedForSort) {
      finalSortField = undefined;
    }
    setOrderBy(typeof finalSortField === "undefined" ? "id" : finalSortField);
    setOrderWay(sortDirection);
  };

  /**
   * Get the children of the page
   * @returns 
   */
  const getChildren = () => {
    if (entity === ENTITY_TRANSACTIONS) {
      return (
        <Datatable
          columns={getColumns()}
          data={getItems()}
          pagination
          paginationServer
          paginationTotalRows={getTotalRows()}
          progressPending={checkIsLoading()}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handlePerRowsChange}
          sortServer
          onSort={handleSort}
          defaultSortAsc={false}
        />
      );
    }
    return <GenericForm entity={entity} />;
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>{entity}</h1>
              {checkIsLoading() && <Loading />}
              {getChildren()}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GenericPage;
