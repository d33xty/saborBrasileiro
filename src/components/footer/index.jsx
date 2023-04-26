import React from 'react'
import Logo from '../logo'
import { Link } from 'react-router-dom'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <section>
            <div>
            <Logo className={styles.logo} cor={"#FFF"}></Logo>
            </div>
            <nav>
                <Link to={'/'} className={styles.link}>pagina inicial</Link>
                <Link to={"/cardapio"} className={styles.link}>cardapio</Link>
            </nav>
        </section>
        <p><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>copyright by saborbrasileiro</p>
    </footer>
  )
}
