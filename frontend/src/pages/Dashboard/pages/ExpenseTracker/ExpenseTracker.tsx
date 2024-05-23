import React, { useState, useEffect } from 'react';
import styles from '../../../../components';
import Header from '../../components/Header';
import { AddIcon, AmountIcon, CategoryIcon, DateIcon, DescriptionIcon } from '../../../../utils/icons';
import AddTransactionPopup from './components/AddTransactionPopup';
import { Tooltip } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { MdOutlineDeleteSweep as DeleteIcon } from 'react-icons/md';
import { BiSolidEditAlt as EditIcon } from 'react-icons/bi';
import ConfirmDeletePopup from '../../../../components/ConfirmDeletePopup';
import { API_BASE_URI } from '../../../../utils';

interface Transaction {
  _id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
}

const ExpenseTracker: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [transactionToDelete, setTransactionToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async (): Promise<void> => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser') || '')?.token;
      if (!token) {
        console.error('Token not found.');
        return;
      }

      const response: AxiosResponse<{ data: { transactions: Transaction[] } }> = await axios.get(`${API_BASE_URI}/transactions`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setTransactions(response.data.data.transactions);
      } else {
        console.error('Failed to fetch transactions');
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const handleAddTransaction = async (newTransaction: Transaction): Promise<void> => {
    try {
      const userId = JSON.parse(localStorage.getItem('authUser') || '')._id;
      if (!userId) {
        console.error('User ID not found.');
        return;
      }

      newTransaction.createdBy = userId;

      const token = JSON.parse(localStorage.getItem('authUser') || '').token;
      if (!token) {
        console.error('Token not found.');
        return;
      }

      const response: AxiosResponse = await axios.post(`${API_BASE_URI}/transactions`, newTransaction, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        fetchTransactions();
        setShowPopup(false);
      } else {
        console.error('Failed to add transaction');
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  const handleDeleteTransaction = async (): Promise<void> => {
    try {
      if (!transactionToDelete) {
        console.error('No transaction selected for deletion.');
        return;
      }

      const token = JSON.parse(localStorage.getItem('authUser') || '').token;
      const response: AxiosResponse = await axios.delete(`${API_BASE_URI}/transactions/${transactionToDelete}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) {
        fetchTransactions();
        setShowDeletePopup(false);
        setTransactionToDelete(null);
      } else {
        console.error('Failed to delete transaction');
      }
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const handleUpdateTransaction = async (id: string, updatedTransaction: Transaction): Promise<void> => {
    try {
      const token = JSON.parse(localStorage.getItem('authUser') || '').token;
      const originalTransaction = transactions.find((transaction) => transaction._id === id);
      if (!originalTransaction) {
        console.error('Transaction not found.');
        return;
      }

      const transactionToUpdate = {
        ...originalTransaction,
        ...updatedTransaction,
      };

      const response: AxiosResponse = await axios.patch(`${API_BASE_URI}/transactions/${id}`, transactionToUpdate, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        fetchTransactions();
      } else {
        console.error('Failed to update transaction');
      }
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <div className="flex flex-col xs:flex-row items-center justify-between">
        <Header category="app" title="Transaction Tracker" />
        <button
          className="flex items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400"
          onClick={() => {
            setShowPopup(true);
            setSelectedTransaction(null);
          }}
        >
          <AddIcon className="text-xl" />
          Add Transaction
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

                <th scope="col" className="px-6 py-3 text-left text-gray-800 uppercase tracking-wider">
                  <span>Action</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:bg-secondary-dark-bg text-slate-500 dark:text-gray-200 bg-white">
              {transactions?.map((item) => (
                <tr key={item._id} className="hover:bg-secondary hover:text-white transition-all duration-400 ">
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-2">
                    <Tooltip title="Delete" placement="top">
                      <DeleteIcon
                        className="cursor-pointer text-red-500 text-2xl"
                        onClick={() => {
                          setShowDeletePopup(true);
                          setTransactionToDelete(item._id);
                        }}
                      />
                    </Tooltip>

                    <Tooltip title="Update" placement="top">
                      <EditIcon
                        className="cursor-pointer text-2xl text-blue-500 ml-2"
                        onClick={() => {
                          setShowPopup(true);
                          setSelectedTransaction(item);
                        }}
                      />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPopup && (
        <AddTransactionPopup
          transaction={selectedTransaction}
          onAddTransaction={handleAddTransaction}
          onUpdateTransaction={handleUpdateTransaction}
          onClose={() => {
            setShowPopup(false);
            setSelectedTransaction(null);
          }}
        />
      )}

      {showDeletePopup && <ConfirmDeletePopup onDeleteConfirm={handleDeleteTransaction} onCancel={() => setShowDeletePopup(false)} />}
    </section>
  );
};

export default ExpenseTracker;
