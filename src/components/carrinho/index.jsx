import React from 'react'
import ItemLista from './itemLista'
import styles from './carrinho.module.scss'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

export default function Carrinho({itensCarrinho,atualizaQuantidade,atualizaValor,ativo, alterarAtivo}) {
    const valor = atualizaValor.toFixed(2).toString().replace(".", ",");
    return (
    <div className={`${styles.carrinho} ${ativo ? styles.hide : ""}`}>
        <button className={styles.carrinho_close} onClick={() => alterarAtivo()}><AiFillCloseCircle size={20}></AiFillCloseCircle></button>
        <p className={styles.carrinho_titulo}>produtos<span><BsFillCartCheckFill></BsFillCartCheckFill></span></p>
        <ul className={styles.carrinho_lista}>
          {itensCarrinho.length > 0 ? itensCarrinho.length > 0 ? itensCarrinho.map(item => <ItemLista produto={item} atualizaQuantidade={atualizaQuantidade}></ItemLista>) : "" : <p className={styles.carrinho_sacolaVazia}>sacola vazia :(</p>}
        </ul>
        <p className={styles.carrinho_valor}><span>valor total:</span>R${valor}</p>
        <button className={styles.carrinho_comprar}>Comprar</button>
    </div>
  )
}
