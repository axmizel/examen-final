import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/organisms/Navbar";

import Home from "./pages/Home";
import Licitaciones from "./pages/Licitaciones";
import Proveedores from "./pages/Proveedores";
import DetalleLicitacion from "./pages/DetalleLicitacion";

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