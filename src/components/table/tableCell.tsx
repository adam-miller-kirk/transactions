import { flexRender, Cell } from '@tanstack/react-table';
import "./index.css";

interface TableCellProps<TData> {
  cell: Cell<TData, unknown>;
}

function TableCell<TData>({ cell }: TableCellProps<TData>) {
  return (
    <td className="table-cell" style={{ maxWidth: cell.column.columnDef.maxSize }}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}

export default TableCell;