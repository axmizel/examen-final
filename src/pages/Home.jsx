

import Hero from "../components/organisms/Hero";
import CardInfo from "../components/molecules/CardInfo";

function Home() {
  return (
    <main>
      <Hero />

      <section>
        <CardInfo
          title="Licitaciones Públicas"
          description="Encuentra oportunidades de negocio en el sector público."
        />
        <CardInfo
          title="Asesoría"
          description="Te ayudamos a preparar tus postulaciones."
        />
      </section>
    </main>
  );
}

export default Home;