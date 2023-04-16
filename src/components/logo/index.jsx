import React from 'react'
import {GiHotMeal} from 'react-icons/gi'
import styles from './logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo_container}>
        <GiHotMeal color='#DA2828' size={30}></GiHotMeal>
        <p className={styles.logo_container_texto}>SaborBrasileiro</p>
    </div>
  )
}
