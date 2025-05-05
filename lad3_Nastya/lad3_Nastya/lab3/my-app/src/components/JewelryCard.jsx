import React, { useState } from "react";
import "../styles/JewelryCard.css";

/**
 * Компонент отображает карточку кофейного напитка с возможностью выбора размера.
 *
 * @param {Object} jewelry - Кофейный напиток.
 * @param {string} jewelry.name - Название напитка.
 * @param {string} jewelry.description - Описание напитка.
 * @param {number} jewelry.price - Цена напитка.
 * @param {Array} jewelry.sizes - Размеры напитка.
 * @param {string} jewelry.image - Изображение напитка.
 * 
 * @returns {JSX.Element} Карточка напитка.
 */
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