import React, { useState, useEffect } from 'react';
import styles from '../../../../components';
import Header from '../../components/Header';
import { AddIcon, AmountIcon, CategoryIcon, DateIcon, DescriptionIcon } from '../../../../utils/icons';
import AddExpensePopup from './components/AddExpensePopup';
import { Tooltip } from '@mui/material';
import axios, { AxiosResponse } from 'axios';

interface Expense {
  _id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
}

const ExpenseTracker: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async (): Promise<void> => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser') || '').token;
      const response: AxiosResponse<{ data: { expenses: Expense[] } }> = await axios.get('http://127.0.0.1:8000/api/expenses', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setExpenses(response.data.data.expenses);
      } else {
        console.error('Failed to fetch expenses');
      }
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddExpense = async (newExpense: Expense): Promise<void> => {
    try {
      const userId = JSON.parse(localStorage.getItem('authUser') || '')._id;
      newExpense.createdBy = userId;

      const token = JSON.parse(localStorage.getItem('authUser') || '').token;

      const response: AxiosResponse = await axios.post('http://127.0.0.1:8000/api/expenses', newExpense, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 201) {
        fetchExpenses();
        setShowPopup(false);
      } else {
        console.error('Failed to add expense');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleDeleteExpense = async (id: string): Promise<void> => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser') || '').token;
      const response: AxiosResponse = await axios.delete(`http://127.0.0.1:8000/api/expenses/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        fetchExpenses();
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <div className="flex flex-col xs:flex-row items-center justify-between">
        <Header category="app" title="Expense Tracker" />
        <button
          className="flex items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400"
          onClick={() => setShowPopup(true)}
        >
          <AddIcon className="text-xl" />
          Add Expense
        </button>
      </div>

      <div>
        <div className="overflow-x-auto mt-5 h-[50vh]">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-gray-800 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <DateIcon />
                    <span>Date</span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-gray-800 uppercase tracking-wider">
                  <div className="flex gap-2 items-center">
                    <DescriptionIcon />
                    <span>Description</span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-gray-800 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <CategoryIcon />
                    <span>Category</span>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-gray-800 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <AmountIcon />
                    <span>Amount</span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:bg-secondary-dark-bg dark:text-gray-200 bg-white">
              {expenses?.map((item) => (
                <Tooltip key={item._id} title="Click to delete" placement="top">
                  <tr
                    onClick={() => handleDeleteExpense(item._id)}
                    className="hover:bg-secondary text-slate-500 hover:text-white transition-all duration-400 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  </tr>
                </Tooltip>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPopup && <AddExpensePopup onAddExpense={handleAddExpense} onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default ExpenseTracker;
