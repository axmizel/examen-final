import Input from "../atoms/Input";
import Button from "../atoms/Button";

function SearchBar() {
  return (
    <div className="d-flex gap-2">
      <Input placeholder="Buscar..." />
      <Button
        text="Buscar"
        className="btn-primary"
      />
    </div>
  );
}

export default SearchBar;