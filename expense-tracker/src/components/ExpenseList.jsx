import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import '../styles/ExpenseList.scss';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(''); // Состояние для выбранной категории
  const [filteredExpenses, setFilteredExpenses] = useState([]); // Состояние для отфильтрованных расходов

  useEffect(() => {
    axios.get('https://681ce3c0f74de1d219ae235a.mockapi.io/expenses')
      .then(response => {
        setExpenses(response.data);
        setFilteredExpenses(response.data); // Изначально показываем все расходы
      })
      .catch(error => console.error("Ошибка при загрузке расходов:", error));
  }, []);

  const handleCategoryFilterChange = (e) => {
    const selectedCategory = e.target.value;
    setCategoryFilter(selectedCategory);

    if (selectedCategory === '') {
      setFilteredExpenses(expenses); // Если фильтр пустой, показываем все расходы
    } else {
      // Приводим категорию к одному регистру для корректной фильтрации
      const lowerCaseCategory = selectedCategory.toLowerCase();
      setFilteredExpenses(expenses.filter(expense => 
        expense.category.toLowerCase() === lowerCaseCategory
      ));
    }
  };

  return (
    <div className="main-container">
    <div className="expense-list">
      <h2 className="section-title">Менеджер расходов</h2>
      <div className="filter">
        <label htmlFor="category-filter">Фильтр по категории:</label>
        <select
          id="category-filter"
          value={categoryFilter}
          onChange={handleCategoryFilterChange}
        >
          <option value="">Все</option>
          <option value="Еда">Еда</option>
          <option value="Транспорт">Транспорт</option>
          <option value="Развлечения">Развлечения</option>
          {/* Добавь другие категории, если нужно */}
        </select>
      </div>

      {/* Отображение расходов */}
      {filteredExpenses.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Сумма</th>
              <th>Категория</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.title}</td>
                <td>{expense.amount} MDL</td>
                <td>{expense.category}</td>
                <td>{expense.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);
};

export default ExpenseList;










