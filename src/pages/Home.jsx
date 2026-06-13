import Hero from "../components/organisms/Hero";
import CardInfo from "../components/molecules/CardInfo";

function Home() {
  return (
    <main>

      <Hero />

      <section className="container mt-5">

        <div className="row g-4">

          <div className="col-md-4">
            <CardInfo
              title="Licitaciones Públicas"
              description="Consulta licitaciones disponibles en Mercado Público."
            />
          </div>

          <div className="col-md-4">
            <CardInfo
              title="Proveedores"
              description="Busca información de proveedores registrados por RUT."
            />
          </div>

          <div className="col-md-4">
            <CardInfo
              title="Transparencia"
              description="Accede a información pública de manera rápida y segura."
            />
          </div>

        </div>

      </section>

      {/* Estadísticas */}

      <section className="container mt-5">

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow">
              <h2 className="fw-bold text-primary">
                +500
              </h2>
              <p>Licitaciones Activas</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow">
              <h2 className="fw-bold text-success">
                +1.000
              </h2>
              <p>Proveedores Registrados</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card p-4 shadow">
              <h2 className="fw-bold text-warning">
                24/7
              </h2>
              <p>Acceso a Información</p>
            </div>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;