import styles from '../../../../components';
import Header from '../../components/Header';
import { AddIcon } from '../../../../utils/icons';

const ExpenseTracker = () => {
  return (
    <section className={styles.dashboardSection}>
      <div className="flex flex-col  xs:flex-row items-center justify-between">
        <Header category="app" title="Expense Tracker" />
        <button className="flex items-center gap-2 bg-secondary text-gray-100 p-3 rounded-md cursor-pointer hover:bg-dark transition-all duration-400">
          <AddIcon className="text-xl" />
          Add Expense
        </button>
      </div>
    </section>
  );
};

export default ExpenseTracker;
