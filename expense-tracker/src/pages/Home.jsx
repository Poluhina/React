import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import SummaryChart from '../components/SummaryChart';

const Home = () => {
  return (
    <div>
      <h1>Менеджер расходов</h1>
      <ExpenseForm />
      <ExpenseList />
      <SummaryChart />
    </div>
  );
};

export default Home;
