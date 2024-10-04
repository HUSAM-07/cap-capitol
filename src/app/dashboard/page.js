'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueInputForm } from '@/components/RevenueInputForm';
import { ExpenseInputForm } from '@/components/ExpenseInputForm';
import { FinancialOverview } from '@/components/FinancialOverview';

export default function Dashboard() {
  const [financialData, setFinancialData] = useState({
    revenue: 0,
    expenses: 0,
    cashFlow: 0,
    // Add more financial data points as needed
  });

  const updateFinancialData = (newData) => {
    setFinancialData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Financial Dashboard</h1>
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
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
      </Tabs>
    </div>
  );
}