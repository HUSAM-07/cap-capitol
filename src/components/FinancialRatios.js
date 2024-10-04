export function FinancialRatios({ data }) {
  const grossProfitMargin = ((data.revenue - data.expenses) / data.revenue) * 100;
  const netProfitMargin = ((data.revenue - data.expenses - data.fixedCosts) / data.revenue) * 100;
  const breakEvenPoint = data.fixedCosts / (data.pricePerUnit - data.variableCosts);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">Gross Profit Margin</h3>
        <p>{grossProfitMargin.toFixed(2)}%</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">Net Profit Margin</h3>
        <p>{netProfitMargin.toFixed(2)}%</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">Break-Even Point</h3>
        <p>{breakEvenPoint.toFixed(2)} units</p>
      </div>
      <div className="p-4 bg-white rounded shadow">
        <h3 className="font-bold">Revenue Growth Rate</h3>
        <p>{data.growthRate}%</p>
      </div>
    </div>
  );
}