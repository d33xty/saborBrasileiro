import HeaderSearch from '../../components/headerSearch'
import styles from './cardapio.module.scss'
import produtos from '../../json/produtos.json'
import CardCardapio from '../../components/cardCardapio'
import Footer from '../../components/footer'

export default function Cardapio({adicionarItem,itensCarrinho,atualizaValor,atualizaQuantidade,ativacao}) {
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
            <li>filtro</li>
            <li>filtro</li>
            <li>filtro</li>
            <li>filtro</li>
          </ul>
        </section>
        <section className={styles.cardapioLista}>
          <ul>
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
