import Logo from '../logo'
import {AiOutlineHome,AiFillShop,AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './headerSearch.module.scss'
import Carrinho from '../carrinho'
import { useState } from 'react'

export default function HeaderSearch({cor,itensCarrinho,atualizaValor,atualizaQuantidade}) {
  var [ativo, setAtivo] = useState(true);
  function alterarAtivo(){
    if (ativo === false) {
      setAtivo(true);
    }else{
      setAtivo(false);
    }
  }

  return (
    <div className={styles.headerSearch_container} style={{borderColor: cor}} >
        <Logo cor={cor}></Logo>
        <nav>
            <Link to={"/"}><AiOutlineHome className={styles.headerSearch_container_icons} style={{color: cor}}></AiOutlineHome></Link>
            <Link to={"/cardapio"}><AiFillShop className={styles.headerSearch_container_icons} style={{color: cor}}></AiFillShop></Link>
            <button><AiOutlineShoppingCart className={styles.headerSearch_container_icons} style={itensCarrinho.length > 0 ? {color: "#DA2828"} : {color: cor}} onClick={alterarAtivo}></AiOutlineShoppingCart></button>
        </nav>
        {console.log(atualizaValor)}
        <Carrinho ativo={ativo} alterarAtivo={alterarAtivo} itensCarrinho={itensCarrinho} atualizaValor={atualizaValor} atualizaQuantidade={atualizaQuantidade}></Carrinho>
    </div>
  )
}
