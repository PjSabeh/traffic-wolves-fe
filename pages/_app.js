import "../styles/globals.css";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [isShowingModal, setShowingModal] = useState(null);
  const [isShowingErrorMessage, setIsShowingErrorMessage] = useState(null);

  useEffect(() => {
    window.addEventListener("load", setShowingModal(true));
  }, []);

  if (isShowingModal) {
    //
    return (
      <div className="first-modal">
        <h2>Here my Modal is active</h2>
        <Image src="/vercel.svg" alt="Modal Image" width={400} height={400} />
        <div className="modal-btn-div">
          <button onClick={() => setShowingModal(false)}>
            With this button we desactivate it
          </button>
          <button onClick={() => setIsShowingErrorMessage(true)}>
            With this one we do not
          </button>
        </div>
        {isShowingErrorMessage
          ? "Para acceder a este sitio tienes que ser mayor de edad"
          : ""}
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
