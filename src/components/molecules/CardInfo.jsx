function CardInfo({ title, description }) {
  return (
    <div className="card shadow h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default CardInfo;