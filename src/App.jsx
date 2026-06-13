import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/organisms/Navbar";
import Home from "./components/pages/Home";
import Licitaciones from "./components/pages/Licitaciones";
import Proveedores from "./components/pages/Proveedores";
import DetalleLicitacion from "./components/pages/DetalleLicitacion";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/licitaciones" element={<Licitaciones />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/detalle/:codigo" element={<DetalleLicitacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;