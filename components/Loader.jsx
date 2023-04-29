import React from 'react';
import styles from "../styles/Loader.module.css";



const Loader = ({title}) => {
  return (
    <div className={styles.loader}>
      <img src='/asset/ethereumLogo.png' alt="" className={styles.loaderImg} />
      <p className={styles.loaderText}>{title}</p>
    </div>
  )
}

export default Loader