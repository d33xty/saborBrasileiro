import React from 'react'
import HeaderSearch from '../../components/headerSearch'
import styles from './cardapio.module.scss'
import produtos from '../../json/produtos.json'
import CardCardapio from '../../components/cardCardapio'
import Footer from '../../components/footer'

export default function Cardapio({adicionarItem,verListaItens}) {
  return (
    <div className={styles.cardapio}>
      <header>
        <HeaderSearch cor={"#000"} adicionarItem={adicionarItem} verListaItens={verListaItens}></HeaderSearch>
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
            {produtos.map(produto => <li key={produto.id} className={styles.li}><CardCardapio produto={produto} adicionarItem={adicionarItem}></CardCardapio></li>)}
          </ul>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}
