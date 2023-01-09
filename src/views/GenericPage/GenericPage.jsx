import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Datatable } from "../../components/Datatable";
import { Loading } from "../../components/Loading";
import { useGetTransactionsQuery } from "../../features/transactionsSlice";
import { ENTITY_TRANSACTIONS } from "../../utils/constants/constant";

export function GenericPage(props) {
  // Get current entity
  const { entity } = props;

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
  } = useGetTransactionsQuery(undefined, {
    skip: entity !== ENTITY_TRANSACTIONS
  });


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
    if (transactions && transactions.content && transactions.content.length > 0) {
      // Copy all array into items
      items = [...transactions.content];
    }
    return items;
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h1>{entity}</h1>
              {checkIsLoading() ? (
                <Loading />
              ) : (
                <Datatable
                  columns={getColumns()}
                  data={getItems()}
                  pagination
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GenericPage;
