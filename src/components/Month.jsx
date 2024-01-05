import { useParams, Link } from "react-router-dom";

const Month = () => {
  // Utiliza el hook useParams para acceder a los parámetros de la URL
  const { month } = useParams();

  return (
    <div>
      <Link to="/">volver</Link>

      <h1>Detalles del mes: {month}</h1>
      {/* Agrega el contenido específico del mes aquí */}
    </div>
  );
};

export default Month;
