import React from 'react'
import Card from './card'
import styles from './listaRolavel.module.scss'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ListaRolavel({produtos}) {
  return (
    <div className={styles.listaContainer}>
        <h3>produtos</h3>
        <div>
          <button><AiOutlineLeft></AiOutlineLeft></button>
          <ul>
              <li><Card produto={produtos[0]}></Card></li>
              <li><Card produto={produtos[1]}></Card></li>
              <li><Card produto={produtos[7]}></Card></li>
          </ul>
          <button><AiOutlineRight></AiOutlineRight></button>
        </div>
        <Link className={styles.listaContainer_link}>ver cardapio</Link>
    </div>
  )
}
