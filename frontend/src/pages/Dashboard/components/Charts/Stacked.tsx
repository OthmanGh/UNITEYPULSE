import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type StackedProps = {
  id: string;
  width: string;
  height: string;
  data: any;
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

const Stacked = ({ id, width, height, data }: StackedProps) => {
  const chartOptions = {
    ...options,
    maintainAspectRatio: false,
    width: width,
    height: height,
  };

  return <Bar options={chartOptions} id={id} data={data} />;
};

export default Stacked;
