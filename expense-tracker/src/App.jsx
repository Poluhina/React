import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';

const API_URL = 'https://681ce3c0f74de1d219ae235a.mockapi.io/expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Загрузка данных с сервера
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  // Функция для добавления расхода
  const addExpense = (expense) => {
    axios
      .post(API_URL, expense)
      .then((response) => {
        setExpenses((prevExpenses) => [...prevExpenses, response.data]);
      })
      .catch((error) => {
        console.error('Ошибка при добавлении расхода:', error);
      });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h1>Менеджер расходов</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;






