import React, { useState, useEffect, useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";
import styles from "../styles/Button.module.css";
import { WalletContext } from "../context/WalletContext";

const WalletButton = () => {
  const { connectWallet, currentAccount, disconnect } = useContext(WalletContext);

  console.log(currentAccount);
  return (
    <button
      onClick={() => {
        connectWallet;
      }}
      className={styles.walletButton}
    >
      {currentAccount.length ? (
        <>{shortenAddress(currentAccount)}</>
      ) : (
        "connect wallet"
      )}
    </button>
  );
};

export default WalletButton;
