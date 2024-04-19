"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../lib/utility";
import DatatableComponent from "../components/common/DatatableComponent";
import { useGetTransactionsQuery } from "../features/apiSlice";
import DateComponent from "../components/common/DateComponent";

export default function Page() {
  const isUserAuthenticated = isAuthenticated();
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("id");
  const [orderWay, setOrderWay] = useState("asc");
  const [perPage, setPerPage] = useState(10);

  const getQueryString = () => {
    const params = {
      page: page - 1,
      perPage,
      orderBy,
      orderWay
    };
    return new URLSearchParams(params).toString();
  };

  const { data, isLoading } = useGetTransactionsQuery(getQueryString());

  const columns = [
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
      name: "transactionDate",
      sortable: true,
      sortField: "transactionDate",
      cell: (row) => (
        <DateComponent date={row.transactionDate} format="DD/MM/YYYY" />
      )
    }
  ];

  useEffect(() => {
    if (!isUserAuthenticated) {
      router.push("/");
    }
  }, [router, isUserAuthenticated]);

  const getPaginationTotalRows = () => {
    if (data?.totalElements) {
      return data.totalElements;
    }
    return 0;
  };

  const handleSort = ({ sortField }, sortDirection) => {
    if (sortField) {
      setOrderBy(sortField);
    }
    setOrderWay(sortDirection);
  };

  const handlePerRowsChange = (newPerPage) => setPerPage(newPerPage);

  return (
    <DatatableComponent
      columns={columns}
      data={data?.content ?? []}
      pagination
      paginationServer
      paginationTotalRows={getPaginationTotalRows()}
      sortServer
      onSort={handleSort}
      onChangePage={(e) => setPage(e)}
      onChangeRowsPerPage={(e) => handlePerRowsChange(e)}
      progressPending={isLoading}
    />
  );
}
