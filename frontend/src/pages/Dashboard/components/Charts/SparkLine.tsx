import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type SparkLineProps = {
  colors: string[];
  id: string;
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

const SparkLine = ({ colors, id, width, height, data }: SparkLineProps) => {
  const lineOptions = {
    ...options,
    maintainAspectRatio: false,
    height: height,
    width: width,
  };

  return <Line options={lineOptions} id={id} data={data} />;
};

export default SparkLine;
