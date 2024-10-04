import { useState } from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function RevenueInputForm({ updateFinancialData }) {
  const form = useForm({
    defaultValues: {
      monthlyRevenue: '',
      unitSales: '',
      pricePerUnit: '',
      growthRate: '',
    },
  });

  const onSubmit = (data) => {
    // Calculate projected revenue
    const projectedRevenue = parseFloat(data.monthlyRevenue) * (1 + parseFloat(data.growthRate) / 100);
    updateFinancialData({ revenue: projectedRevenue });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="monthlyRevenue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Revenue</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Enter your current monthly revenue</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unitSales"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Sales</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormDescription>Number of units sold per month</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricePerUnit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price per Unit</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Price of each product/service</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="growthRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Growth Rate (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormDescription>Expected monthly growth rate</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Calculate Revenue Forecast</Button>
      </form>
    </Form>
  );
}