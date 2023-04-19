import Logo from '../logo'
import {AiOutlineSearch,AiFillShop,AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './headerSearch.module.scss'
import Carrinho from '../carrinho'
import { useState } from 'react'

export default function HeaderSearch({cor}) {

  var [ativo, setAtivo] = useState(false);

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
        <div className={styles.headerSearch_container_search} style={{borderColor: cor, color:cor}}>
            <input type="text" placeholder='pesquisar' style={{color: cor} } className={cor === "#FFF" ? styles.claro : styles.escuro}/>
            <AiOutlineSearch size={25}></AiOutlineSearch>
        </div>
        <nav>
            <Link to={"/"}><AiFillShop className={styles.headerSearch_container_icons} style={{color: cor}}></AiFillShop></Link>
            <Link to={"/"}><AiOutlineUser className={styles.headerSearch_container_icons} style={{color: cor}}></AiOutlineUser></Link>
            <Link to={"/"}><AiOutlineShoppingCart className={styles.headerSearch_container_icons} style={{color: cor}} onClick={alterarAtivo}></AiOutlineShoppingCart></Link>
        </nav>
        <Carrinho ativo={ativo} ativarAtivo={alterarAtivo}></Carrinho>
    </div>
  )
}
