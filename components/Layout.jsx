import React, { useEffect, useRef } from "react";
import styles from "../styles/Layout.module.css";
import WalletButton from "./WalletButton";
import { gsap } from "gsap";

const Layout = ({ children }) => {
  const nav = useRef(null);
  const divider = useRef(null);
  const tl = gsap.timeline();


  useEffect(() => {
    tl.to(nav.current, 1.3, {
      y: 10,
      ease: "power1.out",
      opacity:1
    })
    .to(divider.current, 1,{
      y: 5,
      ease: "power1.out",
      opacity:1
    })
    
  },[])

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav} ref={nav}>
        <h3>Logo</h3>
        <WalletButton />
      </nav>
      <div className={styles.divider} ref={divider}/>
      {children}
    </div>
  );
};

export default Layout;
