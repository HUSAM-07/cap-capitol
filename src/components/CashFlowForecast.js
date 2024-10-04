import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function CashFlowForecast({ data }) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const cashFlowData = months.map((_, index) => {
    return data.revenue * (1 + data.growthRate / 100) ** index - data.expenses;
  });

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Projected Cash Flow',
        data: cashFlowData,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Cash Flow Forecast',
      },
    },
  };

  return <Line options={options} data={chartData} />;
}