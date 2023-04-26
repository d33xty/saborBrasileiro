import React from 'react'
import HeaderSearch from '../../components/headerSearch'
import Footer from '../../components/footer'
import styles from './form.module.scss'
import {MdVerified} from 'react-icons/md'

export default function Formulario({itensCarrinho, atualizaValor , atualizaQuantidade}) {
  return (
    <div className={styles.form}>
        <HeaderSearch cor={"#000"}itensCarrinho={itensCarrinho} atualizaValor={atualizaValor} atualizaQuantidade={atualizaQuantidade}></HeaderSearch>
        <h1>compra realizada <MdVerified></MdVerified></h1>
        <Footer></Footer>
    </div>
  )
}
