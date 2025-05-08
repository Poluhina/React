import React, { useState, useEffect } from 'react';
import { getExpenses } from '../api';  // Импортирую функцию из api.js
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const SummaryChart = () => {
  const [expenses, setExpenses] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };
    fetchData();
  }, []);

  const categoryData = expenses.reduce((acc, expense) => {
    const category = expense.category;
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += expense.amount;
    return acc;
  }, {});

  const chartData = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        outerRadius={150}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
};

export default SummaryChart;
