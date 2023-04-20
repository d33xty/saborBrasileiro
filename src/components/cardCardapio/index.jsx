import React from 'react'
import styles from './cardCardapio.module.scss'
import {BsCartPlus} from 'react-icons/bs'

export default function CardCardapio({produto, adicionarItem}) {
  return (
    <div className={styles.cardCardapio}>
        <p className={styles.produto}>{produto.produto}</p>
        <div className={styles.imagem} style={{backgroundImage: `url(/assets/img/produtos/${produto.id}/capa.png)`}}></div>
        <section>
            <p className={styles.preco}>{produto.preco}</p>
            <button><BsCartPlus size={20}></BsCartPlus></button>
        </section>
    </div>
  )
}
