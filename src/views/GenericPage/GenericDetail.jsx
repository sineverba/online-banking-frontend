import React from "react";
import { Card } from "react-bootstrap";
import { Loading } from "../../components/Loading";
import { useGetTransactionQuery } from "../../features/apiSlice";

export function GenericDetail(props) {
  // Get current props
  const { id } = props;

  /**
   * Set here all fetches.
   * If entity is different, skip it.
   *
   * Pick from useGet[...] three datas
   */
  const {
    data: transaction,
    isLoading: isLoadingTransaction,
    isFetching: isFetchingTransaction
  } = useGetTransactionQuery(id);

  /**
   * Check if loading or not.
   * We check against current entity and ONE OF loading OR fetching
   *
   */
  const checkIsLoading = () => isLoadingTransaction || isFetchingTransaction;

  return (
    <Card>
      <Card.Body>
        {checkIsLoading() ? (
          <Loading />
        ) : (
          <>
            <h1>{transaction && transaction.purpose}</h1>
            <p>{transaction && transaction.transactionDate}</p>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default GenericDetail;
