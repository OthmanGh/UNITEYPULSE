import { useState } from 'react';
import styles from '../../../../components';
import Header from '../../components/Header';
import { AddIcon, AmountIcon, CategoryIcon, DateIcon, DescriptionIcon } from '../../../../utils/icons';
import { expenseHistory, tableExpenseData } from '../../../../constants';
import AddExpensePopup from './components/AddExpensePopup';
import { Tooltip } from '@mui/material';

const ExpenseTracker = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [expenses, setExpenses] = useState(tableExpenseData);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    setShowPopup(false);
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
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
              {expenses.map((item, index) => (
                <Tooltip key={index} title="Click to delete" placement="top">
                  <tr
                    onClick={() => handleDeleteExpense(index)}
                    className="hover:bg-secondary text-slate-500 hover:text-white transition-all duration-400 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap ">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">{item.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap ">{item.amount}</td>
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
