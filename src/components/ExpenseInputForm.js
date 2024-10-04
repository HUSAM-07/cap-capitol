import { useState } from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export function ExpenseInputForm({ updateFinancialData }) {
  const form = useForm({
    defaultValues: {
      fixedCosts: '',
      variableCosts: '',
      salesVolume: '',
    },
  });

  const onSubmit = (data) => {
    // Calculate total expenses
    const totalExpenses = parseFloat(data.fixedCosts) + (parseFloat(data.variableCosts) * parseFloat(data.salesVolume));
    updateFinancialData({ expenses: totalExpenses });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fixedCosts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fixed Costs</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Enter your monthly fixed costs</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="variableCosts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Variable Costs (per unit)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0.00" {...field} />
              </FormControl>
              <FormDescription>Cost per unit that varies with sales</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salesVolume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sales Volume</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormDescription>Expected number of units sold</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Calculate Total Expenses</Button>
      </form>
    </Form>
  );
}