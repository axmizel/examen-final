import Title from "../atoms/Title";
import Button from "../atoms/Button";

function Hero() {
  return (
    <div className="bg-light p-5 rounded shadow">
      <Title text="LicitaSeguro" />

      <p>
        Plataforma de licitaciones públicas.
      </p>

      <Button
        text="Ver licitaciones"
        className="btn-primary"
      />
    </div>
  );
}

export default Hero;
