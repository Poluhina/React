import { useState, useEffect } from "react";
import "../styles/Slider.css";

/**
 * Компонент Slider отображает слайды с актуальными предложениями ювелирного магазина.
 * @component
 * @example
 * return <Slider />
 */
const slides = [
  "Скидка 15% на кольца до конца недели!",
  "Подарочная упаковка — бесплатно!",
  "Новинка: Колье 'Золотая линия' уже в продаже!"
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Переключение на следующий слайд.
   * Если текущий слайд последний — начинается с первого.
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  /**
   * Переключение на предыдущий слайд.
   * Если текущий слайд первый — переходит к последнему.
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <button onClick={prevSlide}>←</button>
      <span>{slides[currentSlide]}</span>
      <button onClick={nextSlide}>→</button>
    </div>
  );
}

export default Slider;
