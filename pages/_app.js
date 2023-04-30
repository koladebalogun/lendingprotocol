import "../styles/globals.css";
import "../app.css";
import { WalletProvider } from "../context/WalletContext";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletProvider>
  );
}
