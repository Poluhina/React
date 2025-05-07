import { useState, useEffect } from "react";
import JewelryCard from "./JewelryCard";
import "../styles/JewelryList.css";

/**
 * Компонент отображает список украшений с фильтрацией по названию.
 *
 * @param {string} searchQuery - Текст для поиска.
 * @returns {JSX.Element} Список карточек украшений.
 */
function JewelryList({ searchQuery = "" }) {
  const [jewelrys, setJewelrys] = useState([]);

  // Загрузка данных при монтировании
  useEffect(() => {
    setJewelrys(jewelryData);
  }, []);

  // Фильтрация списка украшений по названию 
  const filteredJewelrys = jewelrys.filter((jewelry) =>
    (jewelry.name || "").toLowerCase().includes(searchQuery.toLowerCase())
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
