export default function Proveedores() {
  return (
    <div className="container mt-5">
      <h1>Proveedores</h1>
      <p>Listado de proveedores registrados en el sistema.</p>

      <div className="row mt-4 g-3">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Proveedor A</h5>
            <p>Servicios tecnológicos</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Proveedor B</h5>
            <p>Equipamiento médico</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Proveedor C</h5>
            <p>Servicios generales</p>
          </div>
        </div>
      </div>
    </div>
  );
}