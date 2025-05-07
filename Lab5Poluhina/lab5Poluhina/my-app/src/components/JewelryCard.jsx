import React, { useState } from "react";
import "../styles/JewelryCard.css";

/**
 * Карточка одного украшения с выбором размера.
 *
 * @param {Object} jewelry - Украшение.
 * @returns {JSX.Element}
 */
function JewelryCard({ jewelry }) {
  const [selectedSize, setSelectedSize] = useState(jewelry.sizes[0]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemWithSize = {
      ...jewelry,
      size: selectedSize,
      id: `${jewelry.id}-${selectedSize}` // уникальный ID по размеру
    };

    const exists = cart.find((item) => item.id === itemWithSize.id);

    if (!exists) {
      cart.push(itemWithSize);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div className="jewelry-card">
      <h3>{jewelry.name}</h3>
      <img src={jewelry.image} alt={jewelry.name} />
      <p>{jewelry.description}</p>
      <p>{jewelry.price} лей</p>

      <div>
        <p>размер:</p>
        {jewelry.sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{
              margin: "5px",
              background: size === selectedSize ? "#a0e7b0" : "#eee"
            }}
          >
            {size}
          </button>
        ))}
      </div>

      <button onClick={addToCart}>в корзину</button>
    </div>
  );
}

export default JewelryCard;
