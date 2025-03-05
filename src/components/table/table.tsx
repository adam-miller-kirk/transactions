import { Table as TanstackTable } from "@tanstack/react-table";

import TableHeader from "./tableHeader";
import TableCell from "./tableCell";

interface TableProps<TData> {
  table: TanstackTable<TData>;
}

export function Table<TData>({ table }: TableProps<TData>) {
  return (
    <table className="table-container" style={{ width: "100%" }}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHeader key={header.id} header={header}/>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} cell={cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table
