import React, { useMemo } from "react";
import { useACS, LoadingState } from "@react-census/use-acs";
import { ACSProduct, Vintage, GeoHierarchy } from "@react-census/types";
import { useTable, usePagination } from "react-table";
import { TableStyles, PaginationStyles } from "./Styles";
import ReactPaginate from "react-paginate";

type DataTableProps = {
  vintage: Vintage;
  product: ACSProduct;
  variables: string[];
  geoHierarchy: GeoHierarchy;
  perPage?: number;
  showBars?: boolean;
};

export function DataTable({
  vintage,
  product,
  variables,
  geoHierarchy,
  perPage = 10,
  showBars = false,
}: DataTableProps) {
  const [data, error, state] = useACS({
    vintage,
    product,
    variables,
    geoHierarchy,
  });

  console.log("Data is ", data);

  const columns = useMemo(() => {
    if (data && data.length > 0) {
      return Object.keys(data[0]).map((c) => ({ Header: c, accessor: c }));
    } else {
      return [];
    }
  }, [data]);

  const maxmin = (data: any[]) =>
    data
      .filter((val: any) => typeof val !== "string")
      .reduce(
        (acc: { max: number; min: number }, val: number) => ({
          max: val > acc.max ? val : acc.max,
          min: val < acc.min ? val : acc.min,
        }),
        { max: Number.MIN_VALUE, min: Number.MAX_VALUE }
      );
  const columnLimits = useMemo(() => {
    if (showBars && data) {
      return Object.keys(data[0]).reduce(
        (all, col) => ({
          ...all,
          [col]: maxmin(data.map((datum: any) => datum[col])),
        }),
        {}
      );
    } else {
      return {};
    }
  }, [data, showBars]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: perPage } },
    usePagination
  );

  const {
    getTableProps,
    headerGroups,
    rows,
    getRowProps,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    getTableBodyProps,
  } = tableInstance;

  return (
    <div className="data-table">
      {state === LoadingState.loading && <h2>Loading...</h2>}
      {state === LoadingState.done && (
        <>
          <TableStyles>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableStyles>
          <PaginationStyles>
            <ReactPaginate
              pageCount={pageOptions.length}
              pageRangeDisplayed={20}
              marginPagesDisplayed={20}
              forcePage={pageIndex}
              onPageChange={(page) => gotoPage(page.selected)}
            />
          </PaginationStyles>
        </>
      )}
      {state === LoadingState.failed && <h2>Failed to load : {error} </h2>}
    </div>
  );
}
