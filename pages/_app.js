import "../styles/globals.css";
import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [isShowingModal, setShowingModal] = useState(null);
  const [isShowingErrorMessage, setIsShowingErrorMessage] = useState(null);

  useEffect(() => {
    window.addEventListener("load", setShowingModal(true));
    return () => {
      window.removeEventListener("load", setShowingModal(true));
    };
  }, []);

  if (isShowingModal) {
    //
    return (
      <div className="modal-section">
        <div className="first-modal">
          <div className="modal-title">
            <h1>Bienvenido a Se Habla Casino</h1>
            <Image src="/+18icon.jpg" alt="+18 icon" width={98} height={98} />
          </div>
          <p>Por favor confirma que eres 18+ años para acceder</p>

          <Image src="/vercel.svg" alt="Modal Image" width={400} height={400} />

          <div className="modal-btn-div">
            <button
              className="modal-btn-yes"
              onClick={() => setShowingModal(false)}
            >
              Si, tengo 18+
            </button>

            <button
              className="modal-btn-no"
              onClick={() => setIsShowingErrorMessage(true)}
            >
              No, no lo soy
            </button>
          </div>

          {isShowingErrorMessage ? (
            <p className="error-msg">
              Para acceder a este sitio tienes que ser mayor de edad
            </p>
          ) : (
            ""
          )}
        </div>
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
