import React from 'react'
import styles from './card.module.scss'

export default function Card({produto}) {
  return (
    <div className={styles.card}>
        <div style={{backgroundImage: `url(/assets/img/produtos/${produto.id}/capa.png)`}}></div>
        <p>{produto.produto}</p>
    </div>
  )
}
