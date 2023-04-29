import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import styles from "../styles/BottomTokenSelector.module.css";

const BottomTokenSelector = ({ tokens, selectedToken, onChange }) => {
  const [selectToken, setSelectToken] = useState(null);
  const [showTokenList, setShowTokenList] = useState(false);

  const handleTokenClick = (token) => {
    setSelectToken(token);
    onChange(token);
    setShowTokenList(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tokenContainer}>
        {selectedToken ? (
          <div
            className={styles.selectedToken}
            onClick={() => setShowTokenList(!showTokenList)}
          >
            <span>Choose a Token</span>
            {!showTokenList ? (
              <RiArrowDropDownLine className={styles.icon} />
            ) : (
              <RiArrowDropUpLine className={styles.icon} />
            )}
          </div>
        ) : (
          <div
            className={styles.selectedToken}
            onClick={() => setShowTokenList(!showTokenList)}
          >
            <span>Choose a token</span>
            {!showTokenList ? (
              <RiArrowDropDownLine className={styles.icon} />
            ) : (
              <RiArrowDropUpLine className={styles.icon} />
            )}
          </div>
        )}

        {showTokenList && (
          <div
            className={`${styles.tokenList} ${
              showTokenList ? styles.tokenListVisible : ""
            }`}
          >
            {tokens.map((token) => (
              <div
                className={styles.token}
                key={token.symbol}
                onClick={() => handleTokenClick(token)}
              >
                <img src={token.logo} alt={token.quoteToken} />
                <span>{token.symbol}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedToken && (
        <div className={styles.selectedTokenDisplay}>
          <div className={styles.selectedTokenDisplayWrapper}>
            <div className={styles.selectedTokenSymbol}>
              <img src={selectedToken?.logo} alt={selectedToken?.symbol} />
            </div>
          </div>
          <h2>{selectedToken?.symbol}</h2>
        </div>
      )}
    </div>
  );
};

export default BottomTokenSelector;
