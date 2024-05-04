import styles from '../../../../components';
import Header from '../../components/Header';
import { AddIcon, AmountIcon, CategoryIcon, DateIcon, DescriptionIcon } from '../../../../utils/icons';
import { expenseHistory } from '../../../../constants';
import { tableExpenseData } from '../../../../constants';
import { useState } from 'react';

const ExpenseTracker = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddExpense = () => {
    console.log('added');
  };

  return (
    <section className={styles.dashboardSection}>
      <div className="flex flex-col  xs:flex-row items-center justify-between">
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
        <div className="flex gap-10 text-dark mt-4 text-lg border-b-2">
          {expenseHistory.map((t) => (
            <p className="flex items-center gap-2 p-2">
              {t.Icon}
              <span>{t.time}</span>
            </p>
          ))}
        </div>

        <div className="overflow-x-auto mt-5 ">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
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

                <th scope="col" className="px-6 py-3 text-left  text-gray-800 uppercase tracking-wider ">
                  <div className="flex items-center gap-2">
                    <CategoryIcon />
                    <span>Category</span>
                  </div>
                </th>

                <th scope="col" className="px-6 py-3 text-left  text-gray-800 uppercase tracking-wider ">
                  <div className="flex items-center gap-2">
                    <AmountIcon />
                    <span>Amount</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-secondary-dark-bg dark:text-gray-200">
              {tableExpenseData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showPopup && <AddExpensePopup onAddExpense={handleAddExpense} setShowPopup={() => setShowPopup} />}
    </section>
  );
};

const AddExpensePopup = ({ setShowPopup, onAddExpense }: { setShowPopup: () => void; onAddExpense: () => void }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-secondary-dark-bg p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add Expense</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm  text-gray-700 dark:text-gray-200 font-semibold">
              Date
            </label>
            <input type="text" id="date" name="date" className="mt-1 p-2 border rounded-md w-full bg-secondary text-white  focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm  text-gray-700 dark:text-gray-200 font-semibold">
              Description
            </label>
            <input type="text" id="description" name="description" className="mt-1 p-2 border rounded-md w-full bg-secondary text-white focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm text-gray-700 dark:text-gray-200 font-semibold">
              Category
            </label>
            <input type="text" id="category" name="category" className="mt-1 p-2 border rounded-md w-full bg-secondary text-white focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm  text-gray-700 dark:text-gray-200 font-semibold">
              Amount
            </label>
            <input type="text" id="amount" name="amount" className="mt-1 p-2 border rounded-md w-full bg-secondary text-white focus:outline-none" />
          </div>
          <div className="flex justify-end">
            <button type="button" className="bg-gray-700 text-white p-2 rounded-md mr-2 hover:bg-gray-600" onClick={() => setShowPopup(false)}>
              Cancel
            </button>
            <button
              type="submit"
              onClick={onAddExpense}
              className="bg-secondary text-white p-2 rounded-md hover:bg-secondary hover:bg-opacity-80 transition-all duration-400"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseTracker;
