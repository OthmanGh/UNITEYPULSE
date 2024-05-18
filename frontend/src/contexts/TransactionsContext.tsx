import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { API_BASE_URI } from '../utils';

const TransactionContext = createContext();

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const authUser = localStorage.getItem('authUser');
      if (!authUser) {
        setError('User is not authenticated');
        setLoading(false);
        return;
      }

      const token = JSON.parse(authUser).token;
      if (!token) {
        setError('Token is missing');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URI}/transactions`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const { transactions } = response.data.data;
        setTransactions(transactions);

        const incomeTransactions = transactions.filter((transaction) => transaction.type === 'income');
        const expenseTransactions = transactions.filter((transaction) => transaction.type === 'expense');

        setIncomes(incomeTransactions);
        setExpenses(expenseTransactions);
        setLoading(false);
      } catch (error) {
        setError('Error fetching transaction data');
        console.error('Error fetching transaction data:', error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return <TransactionContext.Provider value={{ transactions, incomes, expenses, loading, error }}>{children}</TransactionContext.Provider>;
};
