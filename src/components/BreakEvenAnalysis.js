import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function BreakEvenAnalysis({ data }) {
  const breakEvenPoint = data.fixedCosts / (data.pricePerUnit - data.variableCosts);
  const salesVolumes = [0, breakEvenPoint / 2, breakEvenPoint, breakEvenPoint * 1.5];

  const chartData = {
    labels: salesVolumes.map(vol => vol.toFixed(0)),
    datasets: [
      {
        label: 'Total Revenue',
        data: salesVolumes.map(vol => vol * data.pricePerUnit),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Total Costs',
        data: salesVolumes.map(vol => data.fixedCosts + vol * data.variableCosts),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
        text: 'Break-Even Analysis',
      },
    },
  };

  return (
    <div>
      <Bar options={options} data={chartData} />
      <p className="mt-4">Break-Even Point: {breakEvenPoint.toFixed(2)} units</p>
    </div>
  );
}