/**
 * Компонент Search предоставляет поле ввода для поиска украшений.
 * При изменении текста в поле вызывает функцию обратного вызова `onSearch`, передавая введённое значение.
 *
 * @param {Function} onSearch Функция для обработки изменения текста поиска.
 *
 * @returns {JSX.Element} Поле ввода для поиска с placeholder.
 */
function Search({ onSearch }) {
    const handleSearchChange = (e) => {
      onSearch(e.target.value);
    };
  
    return (
      <input type="text" placeholder="Поиск..." onChange={handleSearchChange}/>
    );
  }
  
  export default Search;