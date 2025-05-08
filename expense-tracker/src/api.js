import axios from 'axios';

const API_URL = 'https://681ce3c0f74de1d219ae235a.mockapi.io/expenses';

export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
  }
};

export const addExpense = async (expense) => {
  try {
    const response = await axios.post(API_URL, expense);
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
  }
};

// Дополнительные функции для редактирования и удаления можно добавить аналогично