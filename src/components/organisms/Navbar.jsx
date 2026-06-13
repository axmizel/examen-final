import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LicitaSeguro
        </Link>
 
        {/* Botón hamburguesa para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
 
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
            <Link className="nav-link" to="/licitaciones">
              Licitaciones
            </Link>
            <Link className="nav-link" to="/proveedores">
              Proveedores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;