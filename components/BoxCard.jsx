import React from "react";
import styles from "../styles/Boxcard.module.css";

const BoxCard = ({ children, className }) => {
  return (
    <div className={`${styles.boxCard} ${className}`}>
      {children}
    </div>
  );
};

export default BoxCard;
