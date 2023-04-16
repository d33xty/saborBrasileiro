import React from 'react'
import Logo from '../logo'
import { Link } from 'react-router-dom'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <Logo className={styles.logo}></Logo>
            <nav>
                <Link className={styles.link}>acesso</Link>
                <Link className={styles.link}>acesso</Link>
                <Link className={styles.link}>acesso</Link>
            </nav>
        </div>
        <p><AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>copyright by saborbrasileiro</p>
    </footer>
  )
}
