import styles from '../../../../components';
import Header from '../../components/Header';
import { AddIcon, AmountIcon, CategoryIcon, DateIcon, DescriptionIcon } from '../../../../utils/icons';
import { expenseHistory } from '../../../../constants';
import { tableExpenseData } from '../../../../constants';
import { useState } from 'react';

const ExpenseTracker = () => {
  const [active, setActive] = useState(true);
  return (
    <section className={styles.dashboardSection}>
      <div className="flex flex-col  xs:flex-row items-center justify-between">
        <Header category="app" title="Expense Tracker" />
        <button className="flex items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400">
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
    </section>
  );
};

export default ExpenseTracker;
