import Title from "../atoms/Title";
import Button from "../atoms/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="row align-items-center">

        <div className="col-md-7">
          <Title text="LicitaSeguro" />

          <p className="lead mt-3">
            Plataforma para consultar licitaciones públicas,
            proveedores y oportunidades de negocio de forma
            rápida y segura.
          </p>

          <Button
            text="Ver Licitaciones"
            className="btn btn-primary mt-3"
          />

          <div className="row mt-5">

            <div className="col-md-4">
              <h3>1.250+</h3>
              <p>Licitaciones activas</p>
            </div>

            <div className="col-md-4">
              <h3>3.450+</h3>
              <p>Proveedores</p>
            </div>

            <div className="col-md-4">
              <h3>100%</h3>
              <p>Información confiable</p>
            </div>

          </div>
        </div>

        <div className="col-md-5 text-center">
          <i
            className="bi bi-clipboard-data"
            style={{
              fontSize: "12rem",
              color: "#2563eb"
            }}
          ></i>
        </div>

      </div>
    </div>
  );
}

export default Hero;