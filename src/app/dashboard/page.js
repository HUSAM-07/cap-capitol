'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueInputForm } from '@/components/RevenueInputForm';
import { ExpenseInputForm } from '@/components/ExpenseInputForm';
import { FinancialOverview } from '@/components/FinancialOverview';
import { CashFlowForecast } from '@/components/CashFlowForecast';
import { BreakEvenAnalysis } from '@/components/BreakEvenAnalysis';
import { FinancialRatios } from '@/components/FinancialRatios';

export default function Dashboard() {
  const [financialData, setFinancialData] = useState({
    revenue: 0,
    expenses: 0,
    cashFlow: 0,
    fixedCosts: 0,
    variableCosts: 0,
    salesVolume: 0,
    pricePerUnit: 0,
    growthRate: 0,
  });

  const updateFinancialData = (newData) => {
    setFinancialData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="breakeven">Break-Even</TabsTrigger>
          <TabsTrigger value="ratios">Ratios</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Your key financial metrics at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialOverview data={financialData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Forecasting</CardTitle>
              <CardDescription>Input your revenue data and view projections</CardDescription>
            </CardHeader>
            <CardContent>
              <RevenueInputForm updateFinancialData={updateFinancialData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expenses">
          <Card>
            <CardHeader>
              <CardTitle>Expense Tracking</CardTitle>
              <CardDescription>Manage and forecast your expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <ExpenseInputForm updateFinancialData={updateFinancialData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cashflow">
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Forecast</CardTitle>
              <CardDescription>Predict your future cash flows</CardDescription>
            </CardHeader>
            <CardContent>
              <CashFlowForecast data={financialData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="breakeven">
          <Card>
            <CardHeader>
              <CardTitle>Break-Even Analysis</CardTitle>
              <CardDescription>Calculate your break-even point</CardDescription>
            </CardHeader>
            <CardContent>
              <BreakEvenAnalysis data={financialData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ratios">
          <Card>
            <CardHeader>
              <CardTitle>Financial Ratios</CardTitle>
              <CardDescription>Key financial ratios and KPIs</CardDescription>
            </CardHeader>
            <CardContent>
              <FinancialRatios data={financialData} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}