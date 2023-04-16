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
            <Logo className={styles.logo}></Logo>
            </div>
            <nav>
                <Link className={styles.link}>acesso</Link>
                <Link className={styles.link}>acesso</Link>
                <Link className={styles.link}>acesso</Link>
            </nav>
        </section>
        <p><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>copyright by saborbrasileiro</p>
    </footer>
  )
}
