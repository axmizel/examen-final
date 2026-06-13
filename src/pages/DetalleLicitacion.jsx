import { useState } from "react";

const PROVEEDORES = [
  {
    rut: "11111111-1",
    nombre: "Proveedor A",
    rubro: "Servicios tecnológicos",
    ciudad: "Santiago",
    telefono: "+56 9 1111 1111",
  },
  {
    rut: "22222222-2",
    nombre: "Proveedor B",
    rubro: "Equipamiento médico",
    ciudad: "Valparaíso",
    telefono: "+56 9 2222 2222",
  },
  {
    rut: "33333333-3",
    nombre: "Proveedor C",
    rubro: "Servicios generales",
    ciudad: "Concepción",
    telefono: "+56 9 3333 3333",
  },
];

export default function Proveedores() {
  const [rut, setRut] = useState("");
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState([]);

  const buscarProveedor = () => {
    if (!rut.trim()) {
      setError("Debe ingresar un RUT.");
      setResultado([]);
      return;
    }

    const formatoRut = /^[0-9]{7,8}-[0-9kK]{1}$/;

    if (!formatoRut.test(rut)) {
      setError("Formato inválido. Ejemplo: 12345678-9");
      setResultado([]);
      return;
    }

    setError("");

    const encontrados = PROVEEDORES.filter(
      (p) => p.rut === rut
    );

    setResultado(encontrados);
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Proveedores</h1>
        <p className="text-secondary">
          Consulta información de proveedores registrados.
        </p>
      </div>

      <div className="card shadow-lg border-0 p-4 mb-5">

        <label htmlFor="rut" className="form-label fw-bold">
          Buscar por RUT
        </label>

        <div className="input-group">
          <input
            id="rut"
            type="text"
            className="form-control"
            placeholder="12345678-9"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            aria-label="Ingrese Rut del proveedor"
          />

          <button
            className="btn btn-primary"
            onClick={buscarProveedor}
          >
            Buscar
          </button>
        </div>

        {error && (
          <div className="alert alert-danger mt-3">
            {error}
          </div>
        )}

      </div>

      <div className="row g-4">

        {resultado.length === 0 && !error && (
          <div className="text-center text-secondary">
            Ingrese un RUT para realizar la búsqueda.
          </div>
        )}

        {resultado.map((p) => (
          <div key={p.rut} className="col-md-6 col-lg-4">

            <div className="card shadow h-100 border-0">

              <div className="card-body">

                <h4 className="card-title fw-bold">
                  {p.nombre}
                </h4>

                <hr />

                <p>
                  <strong>RUT:</strong> {p.rut}
                </p>

                <p>
                  <strong>Rubro:</strong> {p.rubro}
                </p>

                <p>
                  <strong>Ciudad:</strong> {p.ciudad}
                </p>

                <p>
                  <strong>Teléfono:</strong> {p.telefono}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}