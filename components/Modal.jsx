import React from "react";
import { Backdrop, OrderBook } from ".";
import styles from "../styles/Modal.module.css";
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({ closeModal, baseToken, quoteToken }) => {
  return (
    <>
      <Backdrop />
      <div className={styles.modal}>
        <RiCloseCircleFill onClick={closeModal} className={styles.closeIcon} />

        <div className={styles.selectedTokens}>
          <div className={styles.selectedTokensImg}>
            <img src={baseToken.logo} alt={baseToken.symbol} />
            <h3>{baseToken?.symbol}</h3>
          </div>

          <div className={styles.hypen} />
          <div className={styles.selectedTokensImg}>
            <img src={quoteToken.logo} alt={quoteToken.symbol} />
            <h3>{quoteToken?.symbol}</h3>
          </div>
        </div>
        <div className={styles.divider} />
        <OrderBook />
      </div>
    </>
  );
};

export default Modal;
