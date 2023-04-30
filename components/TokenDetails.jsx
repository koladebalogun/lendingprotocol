import React, { useContext } from "react";
import { BoxCard, OrderBook } from ".";
import { RiCloseCircleFill } from "react-icons/ri";
import styles from "../styles/TokenDetails.module.css";
import { WalletContext } from "../context/WalletContext";

const TokenDetails = () => {
  const {
    setSelectedBaseToken,
    selectedBaseToken,
    selectedQuoteToken,
    setSelectedQuoteToken,
  } = useContext(WalletContext);

  const closeModal = () => {
    setSelectedBaseToken("");
    setSelectedQuoteToken("");
  };

  return (
    <div>
      <BoxCard className={styles.tokenDetailsContainer}>
        <RiCloseCircleFill onClick={closeModal} className={styles.closeIcon} />
        <div className={styles.selectedTokens}>
          <div className={styles.selectedTokensImg}>
            <img src={selectedBaseToken.logo} alt={selectedBaseToken.symbol} />
            <h3>{selectedBaseToken?.symbol}</h3>
          </div>

          <div className={styles.hypen} />
          <div className={styles.selectedTokensImg}>
            <img
              src={selectedQuoteToken.logo}
              alt={selectedQuoteToken.symbol}
            />
            <h3>{selectedQuoteToken?.symbol}</h3>
          </div>
        </div>
        <div className={styles.displayDivider} />
        <OrderBook />
      </BoxCard>
    </div>
  );
};

export default TokenDetails;
