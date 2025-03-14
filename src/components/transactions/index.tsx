import { useMemo, FC } from 'react';
import { useReactTable, getCoreRowModel, ColumnDef } from '@tanstack/react-table';
import { Transactions, Transaction } from '../../types/transactions';
import Table from '../table/table';
import { formatCurrency, formatDate } from '../../utils/transactions';

interface TransactionsTableProps {
  transactions: Transactions;
  loading: boolean;
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions, loading }) => {
  const data = useMemo(() => transactions, [transactions]);

  const columns = useMemo<ColumnDef<Transaction, any>[]>(() => [
    {
      header: 'ID',
      accessorKey: 'id',
      size: 30,
    },
    {
      header: 'Date',
      accessorKey: 'date',
      cell: ({ getValue }) => formatDate(getValue()),
    },
    {
      header: 'Amount',
      accessorKey: 'amount',
      size: 60,
      cell: ({ getValue }) => formatCurrency(getValue()),
    },
    {
      header: 'Merchant',
      accessorKey: 'merchant',
    },
    {
      header: 'Category',
      accessorKey: 'category',
    },
  ], []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true
  });

  return (
    <div className="card">
      {loading && <p>Loading...</p>}
      {!loading && transactions && (<Table table={table} />)}
    </div>
  );
};

export default TransactionsTable;
