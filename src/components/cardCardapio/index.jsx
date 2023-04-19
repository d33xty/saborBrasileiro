import React from 'react'
import styles from './cardCardapio.module.scss'

export default function CardCardapio({produto}) {
  return (
    <div className={styles.cardCardapio}>
        <div className={styles.imagem} style={{backgroundImage: `url(/assets/img/produtos/${produto.id}/capa.png)`}}></div>
        <section>
            <p className='produto'>{produto.produto}</p>
            <p className={styles.preco}>{produto.preco}</p>
        </section>
    </div>
  )
}
