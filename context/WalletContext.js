import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";

export const WalletContext = React.createContext();

export const WalletProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [tokens, setTokens] = useState([]);
  const [tokenPair, setTokenPair] = useState(null);
  const [orderbook, setOrderbook] = useState(null);
  const [usdPrices, setUsdPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const [selectedBaseToken, setSelectedBaseToken] = useState(null);
  const [selectedQuoteToken, setSelectedQuoteToken] = useState(null);

  useEffect(() => {
    const fetchUsdPrices = async () => {
      try {
        const response = await axios.get("/api/usd-prices");
        setUsdPrices(response.data);
      } catch (error) {
        console.error("Error fetching USD prices:", error.message);
      }
    };

    fetchUsdPrices();
  }, []);

  useEffect(() => {
    const fetchTokens = async () => {
      const response = await axios.get("/api/tokens");
      setTokens(response.data);
    };

    fetchTokens();
  }, []);

  useEffect(() => {
    const fetchOrderbook = async () => {
      if (selectedBaseToken && selectedQuoteToken) {
        setLoading(true);

        const response = await axios.get(
          `/api/orderbook?baseToken=${selectedBaseToken.address}&quoteToken=${selectedQuoteToken.address}`
        );
        setOrderbook(response.data);
        setLoading(false);

        const intervalId = setInterval(async () => {
          setLoading(true);

          const response = await axios.get(
            `/api/orderbook?baseToken=${selectedBaseToken.address}&quoteToken=${selectedQuoteToken.address}`
          );
          setOrderbook(response.data);
          setLoading(false);
        }, 30000);

        return () => clearInterval(intervalId);
      }
    };

    fetchOrderbook();
  }, [selectedBaseToken, selectedQuoteToken]);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return alert("Please install metamask");

    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No accounts found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install metamask");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);

    window.location.reload();
  };

  const orders = orderbook?.bids.records.map((record) => record.order)

  return (
    <WalletContext.Provider
      value={{
        connectWallet,
        currentAccount,
        tokens,
        selectedBaseToken,
        setSelectedBaseToken,
        selectedQuoteToken,
        setSelectedQuoteToken,
        orders,
        usdPrices
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
