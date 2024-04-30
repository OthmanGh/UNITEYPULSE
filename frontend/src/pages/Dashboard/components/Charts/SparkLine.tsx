import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type SparkLineProps = {
  currentColor: string;
  color: string;
  id: string;
  type: string;
  width: string;
  height: string;
  data: any;
};

const options = {
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

const SparkLine = ({ currentColor, color, id, type, height, width, data }: SparkLineProps) => {
  return <Line options={options} data={data} color={color}></Line>;
};

export default SparkLine;
