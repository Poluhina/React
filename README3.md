# Лабораторная работа №3. Использование хуков и рендер списков
# Цель работы
Освоить использование хуков в React, научиться управлять состоянием компонентов с помощью useState, а также реализовать динамическое рендеринг списка элементов.
# Задание 1. Подготовка среды
Создайте новое React-приложение (желательно) или используйте проект из предыдущих лабораторных работ.

Если создаете новый проект, инициализируйте его с помощью Vite.

В проекте должно быть реализовано минимум четыре компонента:

Header – отображает название приложения и навигацию.

Footer – отображает копирайт и ссылку на репозиторий.

ComponentCard – отображает карточку компонента с товарами.

ComponentList – отображает список товаров, используя компонент ComponentCard.

# Задание 2. Создание мок-данных
1.Создайте файл pizza.json в папке src/data/.

Я создала файл jewelry.json

2.Заполните его тестовыми данными, включающими следующие свойства: id, name, description, price, image, category, sizes.

```jsx
{
      "id": 1,
      "name": "Кольцо 'Звезда ночи'",
      "description": "Серебряное кольцо с сапфиром, вдохновлённое ночным небом.",
      "price": 950,
      "image": "https://st.violity.com/auction/big/auctions/14/96/7/5/149607534.jpg",
      "category": "Кольца",
      "sizes": [16, 17, 18]
    },
    {
      "id": 2,
      "name": "Серьги 'Капля росы'",
      "description": "Золотые серьги с изящными вставками из топаза.",
      "price": 1200,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Cxu4cyCSLEJBs7e9E_2yy-eGJRQWQYBE-A&s",
      "category": "Серьги",
      "sizes": [3, 4]
    },
```

3.Добавьте еще по 2 пиццы для каждой категории.

# Задание 3. Создание базовых компонентов
Создайте компонент Header.jsx, который будет отображать название приложения и навигацию.
Создайте компонент Footer.jsx, который будет отображать копирайт и ссылку на репозиторий.

# Задание 4. Создание компонента списка пицц и рендеринг списка
1.Разработайте компонент PizzaCard.jsx, который будет отображать карточку пиццы, включая название, изображение, описание, цену и доступные размеры.

Я создала файл JewelryCard.jsx
```jsx
function JewelryCard({ jewelry }) {
    const [selectedSize, setSelectedSize] = useState(jewelry.sizes[0]);
  
    const handleSizeChange = (size) => {
      setSelectedSize(size);
    };
  
    return (
      <div className="jewelry-card">
        <img src={jewelry.image} alt={jewelry.name} />
        <h2>{jewelry.name}</h2>
        <p>{jewelry.description}</p>
        <p>{jewelry.price} лей</p>
        <div>
          {jewelry.sizes.map((size) => (
            <button key={size} onClick={() => handleSizeChange(size)} style={{ backgroundColor: selectedSize === size ? "lightblue" : "" }}>
              {size} 
            </button>
          ))}
        </div>
        <button>Добавить в корзину</button>
      </div>
    );
  }
  
  export default JewelryCard;
```
2.Разработайте компонент PizzaList.jsx, который будет загружать данные из pizza.json и отображать список пицц.
```jsx
import jewelryData from "../data/jewelry.json";
```
# Задание 5. Использование хуков

1.В компоненте PizzaCard добавьте состояние selectedSize и метод handleSizeChange, который будет обновлять выбранный размер пиццы. При нажатии на кнопку размера пиццы selectedSize должен изменятся.

2.Реализуйте логику выделения активного размера пиццы при выборе соответствующей кнопки.

# Задание 6. Дополнительное задание. Реализация поиска пиццы

1.Создайте компонент Search.jsx, который будет содержать поле ввода для поиска.

2.Передайте в Search функцию обработчик onSearch, которая будет обновлять состояние списка пицц в PizzaList.
```jsx
function Search({ onSearch }) {
    const handleSearchChange = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <input type="text" placeholder="Поиск...🔍" onChange={handleSearchChange}/>
    );
  }
```
3.В PizzaList.jsx добавьте состояния:

pizzas, в которое с помощью useEffect загружаются данные из pizza.json;

filteredPizzas, которое будет содержать отфильтрованный список пицц;

```jsx
import { useState, useEffect } from "react";
import jewelryData from "../data/jewelry.json";
import JewelryCard from "./JewelryCard";
import "../styles/JewelryList.css";

function JewelryList({ searchQuery }) {
  const [jewelrys, setJewelrys] = useState([]);

  useEffect(() => {
    setJewelrys(jewelryData);
  }, []);

  // Фильтрация списка украшений
  const filteredJewelrys = jewelrys.filter((jewelry) =>
    jewelry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="jewelry-list">
      {filteredJewelrys.map((jewelry) => (
        <JewelryCard key={jewelry.id} jewelry={jewelry} />
      ))}
    </div>
  );
}

export default JewelryList;
```
# Контрольные вопросы

1.Как использовать useState для управления состоянием?

Хук useState используется, чтобы создать переменную состояния в функциональном компоненте.

2.Как работает useEffect?

Хук useEffect позволяет выполнять побочные эффекты (например, загрузка данных, подписки, изменение заголовка страницы) после рендера компонента.

3.С помощью какого метода можно рендерить списки элементов в React?

Списки рендерятся с помощью метода .map().
