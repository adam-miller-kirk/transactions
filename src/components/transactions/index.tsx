import { useMemo, FC } from 'react';
import { Transactions } from '../../types/transactions';

interface TransactionsTableProps {
  transactions: Transactions;
  loading: boolean;
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions, loading }) => {
  const data = useMemo(() => transactions, [transactions]);

  return (
    <div className="card">
      {loading && <p>Loading...</p>}
      {!loading && data && (
        data.map(transaction => <p>{transaction.amount}</p>)
      )}
    </div>
  );
};

export default TransactionsTable;
