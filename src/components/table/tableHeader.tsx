import { flexRender, Header } from "@tanstack/react-table";
import "./index.css";

interface TableHeaderProps<T> {
  header: Header<T, unknown>;
}

function TableHeader<T>({ header }: TableHeaderProps<T>) {
  return (
    <th className="table-header" style={{ width: `${header.getSize()}px`}}>
      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
    </th>
  );
}

export default TableHeader