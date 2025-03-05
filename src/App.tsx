import useTransactions from './hooks/fetchTransactions'
import './App.css'

function App() {
  const apiUrl = 'https://tip-transactions.vercel.app/api/transactions?page=1';
  const { transactions, loading, error } = useTransactions(apiUrl);

  console.log(transactions, loading, error)

  return (
    <div className='container'>
      <h1>Expenses</h1>
      <div>
        Transactions component
      </div>
    </div>
  )
}

export default App
