import React from 'react'
import HeaderSearch from '../../components/headerSearch'
import 'normalize.css'
import styles from './paginaInicial.module.scss'
import { Link } from 'react-router-dom'
import produtos from '../../json/produtos.json'
import ListaRolavel from '../../components/listaRolavel'
import Footer from '../../components/footer'

export default function PaginaInicial({adicionarItem, verListaItens}) {
  /* function randomList(max) {
    return Math.floor(Math.random() * max);
  } */
  /* const numeroRandomizado = randomList(produtos.length) */
  return (
    <div className={styles.paginaInicial}>
        <section className={styles.header_container}>
            <HeaderSearch cor={"#FFF"} adicionarItem={adicionarItem} verListaItens={verListaItens}></HeaderSearch>
            <div className={styles.header_container_h1}>
              <h1>Descubra os sabores autênticos do <span>Brasil</span> em cada mordida</h1>
            </div>
        </section>
        <section className={styles.promocao}>
          <div className={styles.promocao_container}>
            <img src={`/assets/img/produtos/${0}/capa.png`} alt="imagem feijão tropeiro" />
            <div className={styles.promocao_container_texto}>
              <div className={styles.promocao_container_texto_container}>
                <p>{produtos[0].produto}</p>
                <p>35,50R$</p>
              </div>
              <Link to={"/cardapio"} className={styles.promocao_container_texto_button}>ver mais</Link>
            </div>
          </div>
        </section>
        <section className={styles.bannerSecundario}>
          <div>
            <h2>Descubra os melhores alimentos brasileiros para uma experiência gastronômica única e <span>autêntica!</span></h2>
          </div>
        </section>
        <section>
          <ListaRolavel produtos={produtos}></ListaRolavel>
        </section>
        <Footer></Footer>
    </div>
  )
}
