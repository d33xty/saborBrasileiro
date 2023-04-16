import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/paginaInicial";
import Cardapio from "./pages/cardapio";

function RoutesApp() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial></PaginaInicial>}></Route>
          <Route path="cardapio" element={<Cardapio></Cardapio>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
