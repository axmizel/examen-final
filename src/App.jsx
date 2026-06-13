import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/organisms/Navbar";

import Home from "./pages/Home";
import Licitaciones from "./pages/Licitaciones";
import Proveedores from "./pages/Proveedores";
import DetalleLicitacion from "./pages/DetalleLicitacion";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 detectar sistema operativo al cargar
  useEffect(() => {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(systemDark);
  }, []);

  // 🎨 aplicar tema global
  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">

        {/* NAVBAR GLOBAL */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* CONTENIDO */}
        <main className="flex-grow-1 container py-4">

          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/licitaciones" element={<Licitaciones darkMode={darkMode} />} />
            <Route path="/proveedores" element={<Proveedores darkMode={darkMode} />} />
            <Route path="/detalle/:codigo" element={<DetalleLicitacion darkMode={darkMode} />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="text-center py-5">
                  <h1>404</h1>
                  <p>Página no encontrada</p>
                </div>
              }
            />
          </Routes>

        </main>

        {/* FOOTER */}
        <footer className="text-center py-3 border-top">
          <small>© Licitaseguro - Chile</small>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;