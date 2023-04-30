import { useContext, useEffect, useRef, useState } from "react";
import {
  Loader,
  WalletButton,
  TokenSelector,
  BottomTokenSelector,
  BoxCard,
  TokenDetails,
} from "../components";
import styles from "../styles/Home.module.css";
import { WalletContext } from "../context/WalletContext";
import gsap from "gsap";

export default function Home() {
  const { currentAccount, setSelectedBaseToken, selectedBaseToken, selectedQuoteToken, setSelectedQuoteToken, tokens,
  } = useContext(WalletContext);
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const headTitle = useRef(null);
  const subTitle = useRef(null);

  useEffect(() => {
    tl2.to(headTitle.current, 1.7, {
      y: 20,
      ease: "power1.out",
      opacity:1
    })
    .to(subTitle.current, 1,{
      y: 15,
      ease: "power1.out",
      opacity:1
    })
    .to(ref.current, 1,{
      y: -5,
      ease: "power1.out",
      opacity:1
    })
  },[])

  useEffect(() => {
    console.log(window.innerWidth);

    if (selectedBaseToken && selectedQuoteToken && window.innerWidth > 768) {
      tl.to(ref.current, 1.8, {
        x: -70,
        ease: "power1.out",
      });
      gsap.to(ref2.current, 1.8, {
        x: 70,
        ease: "back.out",
        opacity: 1,
      });
    } else {
      tl.to(ref.current, 1.8, {
        x: 0,
        ease: "power1.out",
      });
    }

    if (selectedBaseToken && selectedQuoteToken && window.innerWidth <= 768) {
      gsap.to(ref.current, 1.8, {
        y: 0,
        ease: "power1.out",
      });
      gsap.to(ref2.current, 1.8, {
        y: 10,
        ease: "back.out",
        opacity: 1,
      });
    }
  }, [selectedBaseToken, selectedQuoteToken]);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle} ref={headTitle}>Pair your tokens</h1>
          <p className={styles.subTitle} ref={subTitle}>Compare your tokens in seconds</p>

          <div className={styles.boxWrapper}>
            <div ref={ref} className={styles.box}>
              <BoxCard>
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
              </BoxCard>
            </div>

            {currentAccount && selectedBaseToken && selectedQuoteToken && (
              <div ref={ref2} className={styles.bx2Wrapper}>
                <TokenDetails />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
