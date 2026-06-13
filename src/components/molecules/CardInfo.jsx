function CardInfo({ titulo, descripcion }) {
  return (
    <div className="card shadow h-100">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
}

export default CardInfo;