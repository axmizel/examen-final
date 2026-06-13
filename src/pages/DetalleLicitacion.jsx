import { useState } from "react";
import CardInfo from "../components/molecules/CardInfo";

const PROVEEDORES = [
  {
    rut: "11111111-1",
    nombre: "Proveedor A",
    rubro: "Servicios tecnológicos",
  },
  {
    rut: "22222222-2",
    nombre: "Proveedor B",
    rubro: "Equipamiento médico",
  },
  {
    rut: "33333333-3",
    nombre: "Proveedor C",
    rubro: "Servicios generales",
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

    const formatoRut =
      /^[0-9]{7,8}-[0-9kK]{1}$/;

    if (!formatoRut.test(rut)) {
      setError(
        "Formato inválido. Ejemplo: 12345678-9"
      );
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
    <div className="container mt-5">

      <h1>Buscar Proveedor</h1>

      <div className="row mt-4">

        <div className="col-md-8">

          <label
            htmlFor="rut"
            className="form-label"
          >
            RUT
          </label>

          <input
            id="rut"
            type="text"
            className="form-control"
            placeholder="12345678-9"
            value={rut}
            onChange={(e) =>
              setRut(e.target.value)
            }
            aria-label="Ingrese Rut del proveedor"
            aria-required="true"
            tabIndex="0"
          />

        </div>

        <div className="col-md-4 d-flex align-items-end">

          <button
            className="btn btn-primary w-100"
            onClick={buscarProveedor}
          >
            Buscar
          </button>

        </div>

      </div>

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      <div className="row mt-4 g-3">

        {resultado.map((p) => (
          <div
            key={p.rut}
            className="col-md-4"
          >
            <CardInfo
              title={p.nombre}
              description={p.rubro}
            />
          </div>
        ))}

      </div>

    </div>
  );
}