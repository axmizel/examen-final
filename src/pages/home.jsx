import Hero from "../components/organisms/Hero";
import CardInfo from "../components/molecules/CardInfo";

function Home() {
  return (
    <div className="container mt-5">

      <Hero />

      <div className="row mt-4 g-4">

        <div className="col-md-4">
          <CardInfo
            titulo="Licitaciones"
            descripcion="Consulta oportunidades de compra pública."
          />
        </div>

        <div className="col-md-4">
          <CardInfo
            titulo="Proveedores"
            descripcion="Busca información de proveedores registrados."
          />
        </div>

        <div className="col-md-4">
          <CardInfo
            titulo="Seguridad"
            descripcion="Información confiable y actualizada."
          />
        </div>

      </div>

    </div>
  );
}

export default Home;