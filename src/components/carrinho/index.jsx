import styles from "./carrinho.module.scss";
import { AiOutlineClose } from "react-icons/ai";

export default function Carrinho({ ativo, ativarAtivo, verListaItens}) {
  return (
    <div className={`${styles.carrinho} ${ativo ? styles.hide : ""}`}>
      <AiOutlineClose
        className={styles.carrinho_icon}
        onClick={() => ativarAtivo()}
      ></AiOutlineClose>
      <p>produtos do carrinho</p>
      <ul>
        {verListaItens.map(item => <li key={item.produto}>2x {item.produto}</li>)}
      </ul>
      <button>finalizar pagamento</button>
    </div>
  );
}
