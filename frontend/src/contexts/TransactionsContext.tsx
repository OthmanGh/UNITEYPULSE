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
  const token = JSON.parse(localStorage.getItem('authUser')).token;

  useEffect(() => {
    const fetchData = async () => {
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
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchData();
  }, []);

  return <TransactionContext.Provider value={{ transactions, incomes, expenses, loading }}>{children}</TransactionContext.Provider>;
};
