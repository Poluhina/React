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