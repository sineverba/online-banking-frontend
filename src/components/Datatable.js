import DataTable from "react-data-table-component";
import Loading from "./Loading";

export const Datatable = (props) => {
    return (
        <DataTable
            columns={props.columns}
            data={props.data}
            /** PAGINATION SECTION */
            pagination={props.pagination ?? false}
            paginationServer={props.paginationServer ?? false}
            paginationRowsPerPageOptions={props.paginationRowsPerPageOptions ?? [10,20,30]}
            /** NECESSARI SOLO IN CASO DI PAGINATIONSERVER === TRUE */
            paginationPerPage={props.paginationPerPage}
            paginationTotalRows={props.paginationTotalRows}
            /** SORT SECTION */
            sortServer={props.sortServer ?? false}
            onSort={props.onSort}
            onChangeRowsPerPage={props.onChangeRowsPerPage}
            onChangePage={props.onChangePage}
            progressPending={props.progressPending ?? false}
            progressComponent={<Loading />}
            selectableRows={props.selectableRows ?? false}
            onSelectedRowsChange={props.onSelectedRowsChange}
            clearSelectedRows={props.clearSelectedRows}
            onRowClicked={props.onRowClicked}
        />
    );
}

export default Datatable;