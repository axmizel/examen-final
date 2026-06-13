import { Link, NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark shadow-sm ${
        darkMode ? "bg-dark" : "bg-primary"
      }`}
    >
      <div className="container">

        {/* BRAND */}
        <Link className="navbar-brand fw-bold" to="/">
          LicitaSeguro
        </Link>

        {/* MOBILE BUTTON */}
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

        {/* LINKS */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="navbar-nav ms-auto align-items-lg-center gap-2">

            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " fw-bold text-warning" : "")
              }
              to="/"
            >
              Inicio
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " fw-bold text-warning" : "")
              }
              to="/licitaciones"
            >
              Licitaciones
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " fw-bold text-warning" : "")
              }
              to="/proveedores"
            >
              Proveedores
            </NavLink>

            {/* DARK MODE TOGGLE */}
            <button
              className={`btn btn-sm ${
                darkMode ? "btn-light" : "btn-outline-light"
              } ms-lg-3`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Cambiar modo oscuro"
            >
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;