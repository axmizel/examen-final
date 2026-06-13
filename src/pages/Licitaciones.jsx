import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/molecules/Searchbar";

const LICITACIONES = [
  { codigo: "LIC-001", nombre: "Suministros médicos" },
  { codigo: "LIC-002", nombre: "Equipamiento tecnológico" },
  { codigo: "LIC-003", nombre: "Servicios de mantenimiento" },
];

export default function Licitaciones() {
  const [query, setQuery] = useState("");

  const filtradas = LICITACIONES.filter(
    (l) =>
      l.nombre.toLowerCase().includes(query.toLowerCase()) ||
      l.codigo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1>Licitaciones</h1>
      <p>Listado de licitaciones disponibles.</p>

      <div className="my-4">
        <SearchBar onSearch={setQuery} />
      </div>

      <div className="list-group">
        {filtradas.length > 0 ? (
          filtradas.map((l) => (
            <Link
              key={l.codigo}
              to={`/detalle/${l.codigo}`}
              className="list-group-item list-group-item-action"
            >
              {l.codigo} — {l.nombre}
            </Link>
          ))
        ) : (
          <p className="text-muted mt-3">
            No se encontraron licitaciones.
          </p>
        )}
      </div>
    </div>
  );
}