export default function Licitaciones() {
  return (
    <div className="container mt-5">
      <h1>Licitaciones</h1>
      <p>Listado de licitaciones disponibles.</p>

      <div className="list-group mt-4">
        <a href="/detalle/LIC-001" className="list-group-item list-group-item-action">
          Licitación LIC-001 - Suministros médicos
        </a>

        <a href="/detalle/LIC-002" className="list-group-item list-group-item-action">
          Licitación LIC-002 - Equipamiento tecnológico
        </a>

        <a href="/detalle/LIC-003" className="list-group-item list-group-item-action">
          Licitación LIC-003 - Servicios de mantenimiento
        </a>
      </div>
    </div>
  );
}