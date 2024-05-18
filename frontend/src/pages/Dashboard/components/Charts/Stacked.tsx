import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useTransactions } from '../../../../contexts/TransactionsContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type StackedProps = {
  id: string;
  width: string;
  height: string;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const Stacked = ({ id, width, height }: StackedProps) => {
  const { incomes, expenses } = useTransactions();

  const incomeAmounts = incomes.map((income) => income.amount);
  const expenseAmounts = expenses.map((expense) => expense.amount);

  const labels = incomes.map((income) => new Date(income.date).toLocaleDateString());

  const colors = ['#A6F6F1', '#042d3e'];

  const data = {
    labels,
    datasets: [
      {
        label: 'expenses',
        data: expenseAmounts,
        backgroundColor: colors[1],
      },
      {
        label: 'incomes',
        data: incomeAmounts,
        backgroundColor: colors[0],
      },
    ],
  };

  const chartOptions = {
    ...options,
    maintainAspectRatio: false,
    width: width,
    height: height,
  };

  return <Bar options={chartOptions} id={id} data={data} />;
};

export default Stacked;
