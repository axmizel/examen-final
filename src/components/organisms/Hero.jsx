import { Link } from "react-router-dom";
import Title from "../atoms/Title";

function Hero() {
  return (
    <div className="hero text-center">

      <Title text="LicitaSeguro" />

      <p className="lead mt-3 mb-4">
        Plataforma de consulta de licitaciones públicas y
        búsqueda de proveedores en Chile.
      </p>

      <div className="d-flex justify-content-center gap-3 flex-wrap">

        <Link
          to="/licitaciones"
          className="btn btn-primary btn-lg"
        >
          Ver Licitaciones
        </Link>

        <Link
          to="/proveedores"
          className="btn btn-outline-light btn-lg"
        >
          Buscar Proveedores
        </Link>

      </div>

    </div>
  );
}

export default Hero;