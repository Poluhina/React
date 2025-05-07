import "../styles/JewelryCard.css";

/**
 * Карточка одного украшения.
 */
function ProductCard({ product, onDelete, onEdit, onAddToCart }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const exists = cart.find((item) => item.id === product.id);
    if (exists) return;

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Товар добавлен в корзину!");
  };

  return (
    <div className="jewelry-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>{product.price} лей</strong></p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onEdit(product)} style={{ marginRight: "10px" }}>
          Редактировать
        </button>
        <button onClick={() => onDelete(product.id)}>Удалить</button>
      </div>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          marginTop: "10px",
          background: "#2e7d32",
          color: "white",
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        В корзину
      </button>
    </div>
  );
}

export default ProductCard;
