import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/organisms/Navbar";
import Footer from "./components/organisms/Footer";

import Home from "./pages/Home";
import Licitaciones from "./pages/Licitaciones";
import Proveedores from "./pages/Proveedores";
import DetalleLicitacion from "./pages/DetalleLicitacion";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(systemDark);
  }, []);

  useEffect(() => {
    document.body.className = darkMode
      ? "bg-dark text-light"
      : "bg-light text-dark";
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column">

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="flex-grow-1 container py-4">

          <Routes>

            <Route
              path="/"
              element={<Home darkMode={darkMode} />}
            />

            <Route
              path="/licitaciones"
              element={<Licitaciones darkMode={darkMode} />}
            />

            <Route
              path="/proveedores"
              element={<Proveedores darkMode={darkMode} />}
            />

            <Route
              path="/detalle/:codigo"
              element={<DetalleLicitacion darkMode={darkMode} />}
            />

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

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;