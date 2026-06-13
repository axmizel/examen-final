import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className="d-flex gap-2">
      <Input
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Button
        text="Buscar"
        className="btn-primary"
        onClick={handleSearch}
      />
    </div>
  );
}

export default SearchBar;