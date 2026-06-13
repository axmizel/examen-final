import Hero from "../components/organisms/Hero";
import CardInfo from "../components/molecules/CardInfo";

function Home() {
  return (
    <main>

      <Hero />

      <section className="container mt-5">

        <div className="row">

          <div className="col-md-4 mb-3">
            <CardInfo
              title="Licitaciones Públicas"
              description="Consulta licitaciones disponibles en Mercado Público."
            />
          </div>

          <div className="col-md-4 mb-3">
            <CardInfo
              title="Proveedores"
              description="Busca información de proveedores registrados por RUT."
            />
          </div>

          <div className="col-md-4 mb-3">
            <CardInfo
              title="Transparencia"
              description="Accede a información pública de manera rápida y segura."
            />
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;