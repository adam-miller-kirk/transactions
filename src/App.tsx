import useTransactions from './hooks/fetchTransactions'
import TransactionsTable from './components/transactions';
import './App.css'
import ErrorMessage from './components/error';

function App() {
  const apiUrl = 'https://tip-transactions.vercel.app/api/transactions?page=1';
  const { transactions, loading, error } = useTransactions(apiUrl);

  console.log(transactions)

return (
    <div className='container'>
      <h1>Expenses</h1>
      <div className="card">
        { !error ? 
          <TransactionsTable transactions={transactions} loading={loading} /> :
          <ErrorMessage error={error} />
        }
      </div>
    </div>
  )
}

export default App
