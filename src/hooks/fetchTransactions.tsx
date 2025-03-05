import { useState, useEffect } from 'react';
import { Transactions } from '../types/transactions';

const useTransactions = (apiUrl: string) => {
  const [transactions, setTransactions] = useState<Transactions>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        setTransactions(result.transactions);
      } catch (err) {
        // TODO no a great error handler and would be better to pass the actual err instead of logging
        setError('Error fetching transactions data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { transactions, loading, error };
};

export default useTransactions;
