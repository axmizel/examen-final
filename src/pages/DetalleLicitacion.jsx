import { useParams } from "react-router-dom";

export default function DetalleLicitacion() {
  const { codigo } = useParams();

  return (
    <div className="container mt-5">
      <h1>Detalle Licitación</h1>
      <p>Código: {codigo}</p>
    </div>
  );
}
