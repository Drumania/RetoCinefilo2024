// MonthDetails.jsx
import { useParams } from "react-router-dom";

const MonthDetails = () => {
  // Utiliza el hook useParams para acceder a los parámetros de la URL
  const { month } = useParams();

  return (
    <div>
      <h1>Detalles del mes: {month}</h1>
      {/* Agrega el contenido específico del mes aquí */}
    </div>
  );
};

export default MonthDetails;
