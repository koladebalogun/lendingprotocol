import React, { useContext, useEffect, useState } from "react";
import { WalletContext } from "../context/WalletContext";
import { useConvertToUsd, useDigitFormat } from "../hooks";
import styles from "../styles/OrderBook.module.css";

const OrderBook = () => {
  const { orders, usdPrices, selectedBaseToken, selectedQuoteToken } =
    useContext(WalletContext);

  const formatSixDigits = useDigitFormat();
  const convertToUsd = useConvertToUsd(usdPrices);

  console.log(orders);

  const renderNoOrders = () => {
    return (
      <div className={styles.noOrdersMessage}>
        No orders available for this token pair.
      </div>
    );
  };

  const renderOrders = () => {
    if (orders?.length === 0) {
      return renderNoOrders();
    }

    return orders?.map((order) => {
      const price =
        parseFloat(order.makerAmount) / parseFloat(order.takerAmount);
      const priceUsd = parseFloat(
        convertToUsd(price, order.takerToken)
      ).toFixed(2);

      const takerAmount = formatSixDigits(order.takerAmount);
      const makerAmount = formatSixDigits(order.makerAmount);

      return (
        <div className={styles.order} key={order.salt}>
          <div className={styles.price}>{priceUsd}</div>
          <div>{takerAmount}</div>
          <div>{makerAmount}</div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Price (USD)</div>
        <div>Quantity ({selectedQuoteToken.symbol})</div>
        <div>Total ({selectedBaseToken.symbol})</div>
      </div>
      {renderOrders()}
    </div>
  );
};

export default OrderBook;
