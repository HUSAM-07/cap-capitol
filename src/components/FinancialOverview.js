import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function FinancialOverview({ data }) {
  const chartData = {
    labels: ['Revenue', 'Expenses', 'Cash Flow'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [data.revenue, data.expenses, data.cashFlow],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Financial Overview',
      },
    },
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.revenue.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.expenses.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${(data.revenue - data.expenses).toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cash Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${data.cashFlow.toFixed(2)}</div>
        </CardContent>
      </Card>
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Financial Overview Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={chartData} options={chartOptions} />
        </CardContent>
      </Card>
    </div>
  );
}