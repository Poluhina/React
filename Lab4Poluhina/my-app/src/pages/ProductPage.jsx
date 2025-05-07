
import { useParams } from "react-router-dom";

/**
 * Страница конкретного украшения по ID.
 * @component
 */
function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Украшение №{id}</h1>
      <p>Здесь будет подробная информация об украшении.</p>
    </div>
  );
}

export default ProductPage;
