# Лабораторная работа №1. Введение в React. Компоненты
Цель работы
Познакомиться с библиотекой React, изучить основные концепции, научиться создавать и запускать React-приложение.
# Задание 1. Подготовка рабочего окружения
Скачала и установила последнюю  версию Node.js. Проверила установку, выполнив в терменале команды:
node -v
npm -v
Версия отобразилась.
Далее настроила новый проект React с помощью Vite. Запустив команду:
npm create vite@latest my-app
# Задание 2. Создание компонентов в React. Основа JSX,
1.Создала файл Header.jsx в папке src/components, который возвращает JSX-разметку с заголовком.

```jsx
function Header() {
 return (
   <header>
     <h1>Mini-Blog</h1>
   </header>
 );
}
export default Footer;
```
2.Создала файл Footer.jsx в папке src/components, который возвращает JSX-разметку с подвалом.
```jsx
function Footer() {
 return (
   <footer>
       <p>© {new Date().getFullYear()} Mini-Blpg</p>
   </footer>
 );
}
export default Footer;
```

3.Создала файл Article.jsx в папке src/components, который возвращает JSX-разметку с заголовком и текстом статьи. Компонент Article должен принимать пропсы title и text.
```jsx
function Article({title, text}) {
 return (
   <article>
     <h2>{title}</h2>
     <p>{text}</p>
   </article>
 );
}
export default Article;
```

4.Создала файл ArticleList.jsx в папке src/components. В файле ArticleList.jsx создала функциональный компонент ArticleList, который возвращает JSX-разметку со списком статей
```jsx
import Article from './Article';

const article1 = {
  title: "Новости дня",
  text: "Свежие события и главные заголовки"
};

const article2 = {
  title: "Технологии",
  text: "Новые разработки и тренды в IT"
};

const article3 = {
  title: "Спорт",
  text: "Результаты матчей и спортивные обзоры"
};

const article4 = {
  title: "Культура",
  text: "Интересные события в мире искусства"
};

export default function ArticleList() {
  return (
    <>
      <Article
        title={article1.title}
        text={article1.text}
      />
      <Article
        title={article2.title}
        text={article2.text}
      />
      <Article
        title={article3.title}
        text={article3.text}
      />
      <Article
        title={article4.title}
        text={article4.text}
      />
    </>
  );
}
```
5.Объединила компоненты Header, Article и ArticleList в компонент App.
```jsx
  import Header from "./components/Header.jsx";
   import ArticleList from "./components/ArticleList.jsx";
   import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <ArticleList />
      </main>
      <Footer />
    </>
  )
}

export default App
```
# Задание 3. Тестирование компонентов
Запустила сервер разработки с помощью npm run dev. Компоненты Header, ArticleList и Footer отображаются на странице.
# Контрольные вопросы
1.Что такое JSX и зачем он используется в React?

JS —это расширение синтаксиса JavaScript, которое позволяет писать разметку прямо внутри JS-кода. Его используют в React для удобства написания компонентов. JSX упрощает создание интерфейсов, так как делает код более читаемым.

2.Чем функциональные компоненты отличаются от классовых?

Функциональные компоненты— это обычные функции, которые принимают props и возвращают JSX. 

Классовые компоненты используют class и могут иметь методы. 

Сейчас в React предпочтительны функциональные компоненты из-за их простоты.

3.Как передавать данные в компонент через props?

Данные передаются в компонент как атрибуты в JSX. Внутри компонента можно получить props и использовать их.


4.В каком формате принимаются props в функциональном компоненте?

В функциональном компоненте props передаются как объект в аргумент функции. Это упрощает доступ к переданным данным.
