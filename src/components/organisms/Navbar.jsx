import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LicitaSeguro
        </Link>

        <div className="navbar-nav">
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
    </nav>
  );
}

export default Navbar;