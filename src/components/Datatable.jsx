import React from "react";
import DataTable from "react-data-table-component";

export function Datatable(props) {
  const {
    columns,
    data,
    defaultSortAsc,
    pagination,
    paginationServer,
    paginationRowsPerPageOptions,
    paginationPerPage,
    paginationTotalRows,
    sortServer,
    onSort,
    onChangeRowsPerPage,
    onChangePage,
    progressPending,
    selectableRows,
    onSelectedRowsChange,
    clearSelectedRows,
    onRowClicked,
    subHeader,
    subHeaderComponent,
    subHeaderAlign
  } = props;
  return (
    <DataTable
      columns={columns}
      data={data}
      /** PAGINATION SECTION */
      pagination={pagination ?? false}
      paginationServer={paginationServer ?? false}
      paginationRowsPerPageOptions={paginationRowsPerPageOptions ?? [10, 20, 30]}
      /** NECESSARI SOLO IN CASO DI PAGINATIONSERVER === TRUE */
      paginationPerPage={paginationPerPage}
      paginationTotalRows={paginationTotalRows}
      /** SORT SECTION */
      sortServer={sortServer ?? false}
      onSort={onSort}
      onChangeRowsPerPage={onChangeRowsPerPage}
      onChangePage={onChangePage}
      progressPending={progressPending ?? false}
      progressComponent={null}
      selectableRows={selectableRows ?? false}
      onSelectedRowsChange={onSelectedRowsChange}
      clearSelectedRows={clearSelectedRows}
      onRowClicked={onRowClicked}
      defaultSortAsc={defaultSortAsc}
      /** SUBHEADERS */
      subHeader={subHeader}
      subHeaderComponent={subHeaderComponent}
      subHeaderAlign={subHeaderAlign}
    />
  );
}

export default Datatable;
