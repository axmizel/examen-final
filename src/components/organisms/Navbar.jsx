import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <Link className="navbar-brand fw-bold fs-4" to="/">
          LicitaSeguro
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/licitaciones"
              >
                Licitaciones
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/proveedores"
              >
                Proveedores
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() =>
                  setDarkMode(!darkMode)
                }
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;