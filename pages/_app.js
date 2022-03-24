import "../styles/globals.css";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isShowingModal, setShowingModal] = useState(null);

  useEffect(() => {
    window.addEventListener("load", setShowingModal(true));
  }, []);

  if (isShowingModal) {
    //
    return (
      <div>
        <h2>Here my Modal is active</h2>
        <button onClick={() => setShowingModal(false)}>
          With this button we desactivate it
        </button>
        <button>With this one we do not</button>
      </div>
    );
    //
  } else if (!isShowingModal) {
    //
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
