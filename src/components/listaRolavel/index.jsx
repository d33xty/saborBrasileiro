import React from 'react'
import Card from './card'
import styles from './listaRolavel.module.scss'
import { Link } from 'react-router-dom'

export default function ListaRolavel({produtos}) {
  return (
    <div className={styles.listaContainer}>
        <h3>produtos</h3>
        <div>
          <ul>
              <li><Card produto={produtos[0]}></Card></li>
              <li><Card produto={produtos[4]}></Card></li>
              <li><Card produto={produtos[7]}></Card></li>
          </ul>
        </div>
        <Link to={"/cardapio"} className={styles.listaContainer_link}>ver cardapio</Link>
    </div>
  )
}
