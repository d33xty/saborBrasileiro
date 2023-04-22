import React from 'react'
import styles from './itemLista.module.scss'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

export default function ItemLista({produto,atualizaQuantidade}) {
  const valor = produto.preco * produto.quantidade;
  return (
    <li className={styles.item}>
      <div>
        <button onClick={() => atualizaQuantidade(produto, "-")}><AiOutlineMinus size={20}></AiOutlineMinus></button>
        <span>{produto.quantidade}</span>
        <button onClick={() => atualizaQuantidade(produto, "+")}><AiOutlinePlus size={20}></AiOutlinePlus></button>
      </div>
        <p>{produto.produto}</p>
        <span>R${valor.toFixed(2).toString().replace(".", ",")}</span>
    </li>
  )
}
