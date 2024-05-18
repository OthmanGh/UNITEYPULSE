import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import { useTransactions } from '../../../../contexts/TransactionsContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type SparkLineProps = {
  colors: string[];
  id: string;
  width: string;
  height: string;
  options?: any;
};

const defaultOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

const SparkLine = ({ colors, id, width, height, options }: SparkLineProps) => {
  const { incomes, expenses } = useTransactions();

  const incomeData = incomes.map((income) => income.amount);
  const expenseData = expenses.map((expense) => expense.amount);

  const labels = incomes.map((income) => new Date(income.date).toLocaleDateString());

  const data = {
    labels,
    datasets: [
      {
        label: 'expenses',
        data: expenseData,
        borderColor: '#042d3e',
        backgroundColor: '#042d3e',
      },
      {
        label: 'incomes',
        data: incomeData,
        borderColor: '#A6F6F1',
        backgroundColor: '#A6F6F1',
      },
    ],
  };

  const lineOptions = {
    ...defaultOptions,
    ...options,
    maintainAspectRatio: false,
    height: height,
    width: width,
  };

  return <Line options={lineOptions} id={id} data={data} />;
};

export default SparkLine;
