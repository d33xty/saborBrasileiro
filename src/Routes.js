import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/paginaInicial";
import Cardapio from "./pages/cardapio";
import { useState } from "react";

function RoutesApp() {
  const [carrinho, setCarrinho] = useState([
    {
      produto: "feijoada"
    },
    {
      produto: "coxinha"
    }
  ])
  return (
    <div className="Routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial adicionarItem={setCarrinho} verListaItens={carrinho}></PaginaInicial>}></Route>
          <Route path="cardapio" element={<Cardapio adicionarItem={setCarrinho} verListaItens={carrinho}></Cardapio>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
