import { useState } from "react";

/**
 * Форма добавления/редактирования товара.
 */
function ProductForm({ initialData = {}, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    sizes: "",
    ...initialData
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Название обязательно";
    if (!formData.description.trim()) errs.description = "Описание обязательно";
    if (!formData.price || isNaN(formData.price)) errs.price = "Введите корректную цену";
    if (!formData.image.trim()) errs.image = "Изображение обязательно";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const finalData = {
      ...formData,
      sizes: formData.sizes.split(",").map((s) => parseInt(s.trim(), 10)),
    };

    onSubmit(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>{initialData.id ? "Редактировать товар" : "Добавить товар"}</h2>

      <input
        name="name"
        placeholder="Название"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        name="description"
        placeholder="Описание"
        value={formData.description}
        onChange={handleChange}
      />
      {errors.description && <p className="error">{errors.description}</p>}

      <input
        name="price"
        placeholder="Цена"
        value={formData.price}
        onChange={handleChange}
      />
      {errors.price && <p className="error">{errors.price}</p>}

      <input
        name="image"
        placeholder="Ссылка на изображение"
        value={formData.image}
        onChange={handleChange}
      />
      {errors.image && <p className="error">{errors.image}</p>}

      <input
        name="sizes"
        placeholder="Размеры через запятую (например: 16,17,18)"
        value={formData.sizes}
        onChange={handleChange}
      />

      <button type="submit">Сохранить</button>
      <button type="button" onClick={onCancel}>Отмена</button>
    </form>
  );
}

export default ProductForm;
