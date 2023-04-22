import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/paginaInicial";
import Cardapio from "./pages/cardapio";
import { useState } from "react";

function RoutesApp() {
  const [itensCarrinho, SetItensCarrinho] = useState([]);
  var valorTotal = 0
  const valorCompra = atualizaValor();

  function removerItem(item) {
    SetItensCarrinho(itensCarrinho.filter(itemAtual => itemAtual.id !== item.id))
  }

  function atualizaQuantidade(item, operacao) {
    SetItensCarrinho(itensCarrinho.map(itemAtual => {
      if (itemAtual.id === item.id) {
        if (operacao === "+") {
          item.quantidade += 1;
        }else{
          item.quantidade -= 1
        }
      }
      return itemAtual;
    }))
    if (item.quantidade === 0) {
      removerItem(item);
    }
  }

  function atualizaValor() {
    itensCarrinho.forEach(item => {
      valorTotal += (item.preco * item.quantidade);
    })
    return(valorTotal)
  }

  function adicionaItem(itemAtual) {
    const itemBuscado = itensCarrinho.filter(item => item.id === itemAtual.id);
    if (itemBuscado.length === 0) {
      SetItensCarrinho([...itensCarrinho, {...itemAtual , quantidade: 1}]);
      ativaDica();
    }else{
      SetItensCarrinho(itensCarrinho.map(item => {
        if(item.id === itemAtual.id){
          item.quantidade += 1;
        }
        return item;
      }))
    }
  }

  const [ativacao, SetAtivacao] = useState(false)
  
  function ativaDica() {
    if (ativacao === false) {
      SetAtivacao(true);
      setTimeout(() => SetAtivacao(false), 2000)
    }
  }

  return (
    <div className="Routes">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial adicionarItem={adicionaItem} itensCarrinho={itensCarrinho} atualizaValor={valorCompra} atualizaQuantidade={atualizaQuantidade}></PaginaInicial>}></Route>
          <Route path="cardapio" element={<Cardapio adicionarItem={adicionaItem} itensCarrinho={itensCarrinho} atualizaValor={valorCompra} atualizaQuantidade={atualizaQuantidade} ativacao={ativacao}></Cardapio>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;
