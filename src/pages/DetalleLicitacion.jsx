import CardInfo from "../components/molecules/CardInfo";
 
const PROVEEDORES = [
  { nombre: "Proveedor A", rubro: "Servicios tecnológicos" },
  { nombre: "Proveedor B", rubro: "Equipamiento médico" },
  { nombre: "Proveedor C", rubro: "Servicios generales" },
];
 
export default function Proveedores() {
  return (
    <div className="container mt-5">
      <h1>Proveedores</h1>
      <p>Listado de proveedores registrados en el sistema.</p>
 
      <div className="row mt-4 g-3">
        {PROVEEDORES.map((p) => (
          <div key={p.nombre} className="col-md-4">
            <CardInfo titulo={p.nombre} descripcion={p.rubro} />
          </div>
        ))}
      </div>
    </div>
  );
}