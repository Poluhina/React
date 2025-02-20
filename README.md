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
exsport default Footer;
```
2.Создала файл Footer.jsx в папке src/components, который возвращает JSX-разметку с подвалом.
```jsx
function Footer() {
 return (
   <footer>
       <p?$copy; {new Date().getFullYear()} Mini-Blpg</p>
   </footer>
 );
}
exsport default Footer;
```

3.Создала файл Article.jsx в папке src/components, который возвращает JSX-разметку с заголовком и текстом статьи. Компонент Article должен принимать пропсы title и text.
```jsx
function Article(/* props */) {
 return (
   <article>
     <h2>{title}</h2>
     <p>{text}</p>
   </article>
 );
}
exsport default Footer;
```

4.Создала файл ArticleList.jsx в папке src/components. В файле ArticleList.jsx создала функциональный компонент ArticleList, который возвращает JSX-разметку со списком статей
```jsx
import Article from "./Article";

   function ArticleList() {
     const articles = [
       { title: "Новости дня", text: "Свежие события и главные заголовки" },
       { title: "Технологии", text: "Новые разработки и тренды в IT" },
       { title: "Спорт", text: "Результаты матчей и спортивные обзоры" },
       { title: "Культура", text: "Интересные события в мире искусства" },
     ];

     return (
       <main>
         {articles.map((article, index) => (
           <Article key={index} title={article.title} text={article.text} />
         ))}
       </main>
     );
   }
   
   export default ArticleList;
```
5.Объединила компоненты Header, Article и ArticleList в компонент App.
```jsx
  import Header from "./components/Header.jsx";
   import ArticleList from "./components/ArticleList.jsx";
   import Footer from "./components/Footer.jsx";

   function App() {
     return (
       <div>
         <Header />
         <ArticleList />
         <Footer />
       </div>
     );
   }
   
   export default App;
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
