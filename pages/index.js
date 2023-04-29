import { useContext, useEffect, useState } from "react";
import {
  Loader,
  WalletButton,
  TokenSelector,
  BottomTokenSelector,
  Modal,
} from "../components";
import styles from "../styles/Home.module.css";
import { WalletContext } from "../context/WalletContext";
import axios from "axios";

export default function Home() {
  const {
    currentAccount,
    setSelectedBaseToken,
    selectedBaseToken,
    selectedQuoteToken,
    setSelectedQuoteToken,
    tokens,
  } = useContext(WalletContext);

  const closeModal = () => {
    setSelectedBaseToken("");
    setSelectedQuoteToken("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <h3>Logo</h3>
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Pair your tokens</h1>
          <p className={styles.subTitle}>Compare your tokens in seconds</p>

          <div className={styles.boxWrapper}>
            <div className={styles.box} />
          </div>
          <div className={styles.boxCard}>
            {!currentAccount ? (
              <Loader title="Please connect your wallet" />
            ) : (
              <>
                <h1 className={styles.tokenTitle}>Choose your Token</h1>
                <TokenSelector
                  tokens={tokens}
                  selectedToken={selectedBaseToken}
                  onChange={setSelectedBaseToken}
                />

                <div className={styles.divider} />

                <BottomTokenSelector
                  tokens={tokens}
                  selectedToken={selectedQuoteToken}
                  onChange={setSelectedQuoteToken}
                />
              </>
            )}
          </div>

          {selectedBaseToken && selectedQuoteToken && (
            <Modal
              closeModal={closeModal}
              baseToken={selectedBaseToken}
              quoteToken={selectedQuoteToken}
            />
          )}
        </div>
      </div>
    </div>
  );
}
