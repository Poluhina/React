import { useState, useEffect } from "react";
import jewelryData from "../data/jewelry.json";
import JewelryCard from "./JewelryCard";
import "../styles/JewelryList.css";

/**
 * Компонент отображает список кофейных напитков с фильтрацией по названию.
 *
 * @param {string} searchQuery - Текст для поиска.
 * @returns {JSX.Element} Список карточек кофейных напитков.
 */
function JewelryList({ searchQuery }) {
  const [jewelrys, setJewelrys] = useState([]);

  useEffect(() => {
    setJewelrys(jewelryData);
  }, []);

  // Фильтрация списка кофе
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
