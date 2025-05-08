import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && category && date) {
      onAddExpense({ title, amount, category, date });
      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
    } else {
      alert('Все поля должны быть заполнены');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Сумма"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Категория"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        placeholder="Дата"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Добавить расход</button>
    </form>
  );
};

export default ExpenseForm;



