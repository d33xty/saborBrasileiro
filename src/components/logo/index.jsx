import React from 'react'
import {GiHotMeal} from 'react-icons/gi'
import styles from './logo.module.scss'
import { Link } from 'react-router-dom'

export default function Logo({cor}) {
  return (
    <Link to={"/"}  className={styles.logo_container}>
      <div>
          <GiHotMeal color='#DA2828' size={30}></GiHotMeal>
          <p className={styles.logo_container_texto} style={{color: cor}}>SaborBrasileiro</p>
      </div>
    </Link>
    )
}
