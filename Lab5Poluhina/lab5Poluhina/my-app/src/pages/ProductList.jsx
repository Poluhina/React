import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ProductForm from "./ProductForm";

/**
 * Страница со списком украшений, загружаемых с mockapi.io
 */
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  const API_URL = "https://6818db965a4b07b9d1d11bec.mockapi.io/products";

  // Загрузка украшений с сервера
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки товаров:", err);
        setLoading(false);
      });
  }, []);

  // Удаление
  const handleDelete = (id) => {
    axios.delete(`${API_URL}/${id}`).then(() => {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    });
  };

  // Обновление
  const handleUpdate = (updatedProduct) => {
    axios.put(`${API_URL}/${updatedProduct.id}`, updatedProduct).then((res) => {
      setProducts((prev) =>
        prev.map((p) => (p.id === updatedProduct.id ? res.data : p))
      );
      setEditingProduct(null);
    });
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className="jewelry-list">
      <h1 style={{ textAlign: "center", width: "100%" }}>Каталог украшений</h1>

      {editingProduct && (
        <ProductForm
          initialData={editingProduct}
          onSubmit={handleUpdate}
          onCancel={() => setEditingProduct(null)}
        />
      )}

      {!editingProduct && products.length === 0 ? (
        <p>Нет товаров для отображения</p>
      ) : (
        !editingProduct &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
            onEdit={setEditingProduct}
            onAddToCart={handleAddToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
