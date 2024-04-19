"use client";

import React from "react";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";

const DatatableComponent = ({
  columns,
  data,
  pagination = false,
  paginationServer = false,
  paginationTotalRows = null,
  onChangePage = null,
  progressPending = false,
  sortServer = false,
  onSort = null,
  onChangeRowsPerPage = null
}) => (
  <DataTable
    columns={columns}
    data={data}
    pagination={pagination}
    paginationServer={paginationServer}
    paginationTotalRows={paginationTotalRows}
    onChangePage={onChangePage}
    progressPending={progressPending}
    sortServer={sortServer}
    onSort={onSort}
    onChangeRowsPerPage={onChangeRowsPerPage}
  />
);

DatatableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  pagination: PropTypes.bool,
  paginationServer: PropTypes.bool,
  paginationTotalRows: PropTypes.number,
  onChangePage: PropTypes.func,
  progressPending: PropTypes.bool,
  sortServer: PropTypes.bool,
  onSort: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func
};

export default DatatableComponent;
