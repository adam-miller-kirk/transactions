import { useState, useEffect } from 'react';
import { Transactions } from '../types/transactions';

const useTransactions = (apiUrl: string) => {
  const [transactions, setTransactions] = useState<Transactions>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl); // Use GET request for REST API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        
        // Assuming the API returns an array of transactions directly
        setTransactions(result.transactions); // Adjust the key based on the API response structure
      } catch (err) {
        setError('Error fetching data');
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
