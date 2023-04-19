import styles from './carrinho.module.scss'
import {AiOutlineClose} from 'react-icons/ai'

export default function Carrinho({ativo, ativarAtivo}) {

  return (
    <div className={`${styles.carrinho} ${ativo ? styles.hide : ""}`}> 
          <AiOutlineClose className={styles.carrinho_icon}  onClick={() => ativarAtivo()}></AiOutlineClose>
          <p>produtos do carrinho</p>
          <ul>
            <li>
              <div style={{backgroundImage: "url(/assets/img/produtos/1/capa.png)"}}></div>
              <p>feijoada <span>R$20,00</span></p>
            </li>
            <li>
              <div style={{backgroundImage: "url(/assets/img/produtos/1/capa.png)"}}></div>
              <p>feijoada <span>R$20,00</span></p>
            </li>
          </ul>
          <button>finalizar pagamento</button>
        </div>
  )
}
