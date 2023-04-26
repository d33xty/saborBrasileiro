import HeaderSearch from '../../components/headerSearch'
import styles from './cardapio.module.scss'
import produtosBase from '../../json/produtos.json'
import CardCardapio from '../../components/cardCardapio'
import Footer from '../../components/footer'
import { useState } from 'react'

export default function Cardapio({adicionarItem,itensCarrinho,atualizaValor,atualizaQuantidade,ativacao}) {
  const [produtos, setProdutos] = useState(produtosBase)
  const tipos = ['todos','refeicao','sobremesa','bebida','salgado']

  function filtraTipo(tipo) {
    if (tipo === 'todos') {
      setProdutos(produtosBase)
    }else{
      setProdutos(produtosBase.filter(produto => produto.tipo === tipo))
    }
  }
  return (
    <div className={styles.cardapio}>
      <header>
        <HeaderSearch cor={"#000"}itensCarrinho={itensCarrinho} atualizaValor={atualizaValor} atualizaQuantidade={atualizaQuantidade}></HeaderSearch>
      </header>
      <main>
        <h1>cardapio</h1>
        <section className={styles.filtro}>
          <p>filtrar por:</p>
          <ul>
            {tipos.map(tipo => <button onClick={() => filtraTipo(tipo)}>{tipo}</button>)}
          </ul>
        </section>
        <section className={styles.cardapioLista}>
          <ul style={produtos.length < 5 ? {justifyContent: 'flex-start'} : {justifyContent: 'space-evenly'}}>
            {produtos.map(produto => <li key={produto.id} className={styles.li}><CardCardapio produto={produto} adicionarItem={adicionarItem} itensCarrinho={itensCarrinho}></CardCardapio></li>)}
          </ul>
        </section>
      </main>
      <section className={styles.itemAdicionado_container}>
        <div className={styles.itemAdicionado} style={ativacao === true ? {bottom: "1rem"} : {bottom: "-4rem"}}>
          <p>item adicionado</p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
