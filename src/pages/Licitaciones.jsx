import { useState } from "react";
import SearchBar from "../components/molecules/SearchBar";

function Licitaciones() {
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");

  const [licitaciones] = useState([
    {
      codigo: "1001",
      nombre: "Compra de Equipos Computacionales",
      organismo: "Municipalidad de Santiago",
      estado: "Publicada",
    },
    {
      codigo: "1002",
      nombre: "Servicio de Mantención",
      organismo: "Hospital Regional",
      estado: "Cerrada",
    },
    {
      codigo: "1003",
      nombre: "Adquisición de Mobiliario",
      organismo: "Ministerio de Educación",
      estado: "Publicada",
    },
  ]);

  const [resultado, setResultado] = useState(licitaciones);

  const handleSearch = (texto) => {
    const filtradas = licitaciones.filter((item) =>
      item.nombre.toLowerCase().includes(texto.toLowerCase())
    );

    setResultado(filtradas);
  };

  const filtrar = () => {
    if (!fecha) {
      setError("Debe seleccionar una fecha");
      return;
    }

    setError("");

    let datos = [...licitaciones];

    if (estado) {
      datos = datos.filter(
        (item) => item.estado === estado
      );
    }

    setResultado(datos);
  };

  return (
    <div className="container mt-4">

      <h1>Licitaciones</h1>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="row mb-3">

        <div className="col-md-4">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>

          <input
            id="fecha"
            type="date"
            className="form-control"
            value={fecha}
            onChange={(e) =>
              setFecha(e.target.value)
            }
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="estado" className="form-label">
            Estado
          </label>

          <select
            id="estado"
            className="form-control"
            value={estado}
            onChange={(e) =>
              setEstado(e.target.value)
            }
          >
            <option value="">
              Todos
            </option>

            <option value="Publicada">
              Publicada
            </option>

            <option value="Cerrada">
              Cerrada
            </option>
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <button
            className="btn btn-primary w-100"
            onClick={filtrar}
          >
            Filtrar
          </button>
        </div>

      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="mt-4">

        {resultado.length === 0 ? (
          <div className="alert alert-warning">
            No se encontraron resultados
          </div>
        ) : (
          resultado.map((licitacion) => (
            <div
              key={licitacion.codigo}
              className="card mb-3"
            >
              <div className="card-body">

                <h5>
                  {licitacion.nombre}
                </h5>

                <p>
                  <strong>Código:</strong>{" "}
                  {licitacion.codigo}
                </p>

                <p>
                  <strong>Organismo:</strong>{" "}
                  {licitacion.organismo}
                </p>

                <p>
                  <strong>Estado:</strong>{" "}
                  {licitacion.estado}
                </p>

              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Licitaciones;