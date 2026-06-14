import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/molecules/SearchBar";

function Licitaciones() {
  const [fecha, setFecha] = useState("");
  const [estado, setEstado] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const licitacionesData = [
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
    {
      codigo: "1004",
      nombre: "Compra de Vehículos",
      organismo: "Gobierno Regional",
      estado: "Publicada",
    },
    {
      codigo: "1005",
      nombre: "Servicios de Seguridad",
      organismo: "Municipalidad de Providencia",
      estado: "Cerrada",
    },
  ];

  const [resultado, setResultado] =
    useState(licitacionesData);

  const [paginaActual, setPaginaActual] =
    useState(1);

  const porPagina = 3;

  const handleSearch = (texto) => {
    const filtradas = licitacionesData.filter(
      (item) =>
        item.nombre
          .toLowerCase()
          .includes(texto.toLowerCase())
    );

    setResultado(filtradas);
    setPaginaActual(1);
  };

  const filtrar = () => {
    setLoading(true);

    setTimeout(() => {
      if (!fecha) {
        setError("Debe seleccionar una fecha");
        setLoading(false);
        return;
      }

      setError("");

      let datos = [...licitacionesData];

      if (estado) {
        datos = datos.filter(
          (item) => item.estado === estado
        );
      }

      setResultado(datos);
      setPaginaActual(1);
      setLoading(false);
    }, 1000);
  };

  const ultimo =
    paginaActual * porPagina;

  const primero =
    ultimo - porPagina;

  const licitacionesPagina =
    resultado.slice(primero, ultimo);

  const totalPaginas = Math.ceil(
    resultado.length / porPagina
  );

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">
          Licitaciones Públicas
        </h1>

        <p className="text-secondary">
          Consulta licitaciones disponibles
          en Mercado Público.
        </p>
      </div>

      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      <div className="card p-4 shadow-lg mb-4">

        <div className="row">

          <div className="col-md-4">

            <label
              htmlFor="fecha"
              className="form-label"
            >
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

            <label
              htmlFor="estado"
              className="form-label"
            >
              Estado
            </label>

            <select
              id="estado"
              className="form-select"
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

      </div>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary"></div>
        </div>
      )}

      {!loading && (
        <div className="alert alert-info mt-4">
          Resultados encontrados:
          {" "}
          {resultado.length}
        </div>
      )}

      <div className="row g-4 mt-2">

        {licitacionesPagina.map(
          (licitacion) => (
            <div
              key={licitacion.codigo}
              className="col-md-6"
            >

              <div className="card h-100 shadow">

                <div className="card-body">

                  <h5 className="fw-bold">
                    {licitacion.nombre}
                  </h5>

                  <p>
                    <strong>Código:</strong>
                    {" "}
                    {licitacion.codigo}
                  </p>

                  <p>
                    <strong>Organismo:</strong>
                    {" "}
                    {licitacion.organismo}
                  </p>

                  <p>
                    <strong>Estado:</strong>
                    {" "}
                    <span
                      className={`badge ${
                        licitacion.estado ===
                        "Publicada"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {licitacion.estado}
                    </span>
                  </p>

                  <Link
                    to={`/detalle/${licitacion.codigo}`}
                    className="btn btn-primary"
                  >
                    Ver Detalle
                  </Link>

                </div>

              </div>

            </div>
          )
        )}

      </div>

      <nav className="mt-4">

        <ul className="pagination justify-content-center">

          {[
            ...Array(totalPaginas),
          ].map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                paginaActual === index + 1
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setPaginaActual(index + 1)
                }
              >
                {index + 1}
              </button>
            </li>
          ))}

        </ul>

      </nav>

    </div>
  );
}

export default Licitaciones;