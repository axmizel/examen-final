import { useState } from "react";
import SearchBar from "../components/molecules/searchbar";

function Licitaciones() {
  const [licitaciones] = useState([
    {
      codigo: "1001",
      nombre: "Compra de Equipos Computacionales",
      organismo: "Municipalidad de Santiago",
    },
    {
      codigo: "1002",
      nombre: "Servicio de Mantención",
      organismo: "Hospital Regional",
    },
    {
      codigo: "1003",
      nombre: "Adquisición de Mobiliario",
      organismo: "Ministerio de Educación",
    },
  ]);

  const [resultado, setResultado] = useState(licitaciones);

  const handleSearch = (texto) => {
    const filtradas = licitaciones.filter((item) =>
      item.nombre.toLowerCase().includes(texto.toLowerCase())
    );

    setResultado(filtradas);
  };

  return (
    <div className="container mt-4">
      <h1>Licitaciones</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="mt-4">
        {resultado.map((licitacion) => (
          <div key={licitacion.codigo} className="card mb-3">
            <div className="card-body">
              <h5>{licitacion.nombre}</h5>
              <p>
                <strong>Código:</strong> {licitacion.codigo}
              </p>
              <p>
                <strong>Organismo:</strong> {licitacion.organismo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Licitaciones;