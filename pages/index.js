import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeHero}>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homeImg}>
        <h1 className={styles.homeImgHeading}>Se Habla Casino!</h1>
        <h2 className={styles.homeImgHeading}>
          Guia y reseñas objetivas de los mejores casinos online de España
        </h2>
        <h2 className={styles.homeImgHeading}>
          Acceso a promociones de casino online en español
        </h2>
        <h2 className={styles.homeImgHeading}>
          Juegos, ofertas y nuevos casinos del 2022
        </h2>
      </div>

      <div className={styles.casinosAndCard}>
        <div className={styles.promotedCasinos}>
          <h2 className={styles.promotedCasinosHeader}>
            Top 30 mejores casinos online del 2022
          </h2>

          {/* HERE THE PROMOTED CASINO BANNERS BEGIN */}
          <div className={styles.promotedCasinoBox}>
            <Image
              className={styles.casinoLogo}
              src="/favicon.ico"
              alt="Casino Logo"
              width={48}
              height={48}
            />
            <h3>Casino Manson</h3>

            <div className={styles.casinoPerks}>
              <ul>
                <li>Diseño muy atractivo</li>
                <li>Gran cantidad de metodos de pago</li>
                <li>Altos limites de retiro</li>
                <li>Excelente equipo de atencion al cliente</li>
              </ul>
            </div>

            <div className={styles.casinoCTAs}>
              <a
                className={styles.juegaCTA}
                href="https://app.affiliabet.com/v/5551"
                target="_blank"
                rel="noreferrer noopener"
              >
                Juega ahora!
              </a>

              <a className={styles.analisisCTA} href="#">
                Analisis del casino
              </a>
            </div>
          </div>

          <div className={styles.promotedCasinoBox}>
            <Image
              className={styles.casinoLogo}
              src="/favicon.ico"
              alt="Casino Logo"
              width={48}
              height={48}
            />
            <h3>Casino Manson</h3>

            <div className={styles.casinoPerks}>
              <ul>
                <li>Diseño muy atractivo</li>
                <li>Gran cantidad de metodos de pago</li>
                <li>Altos limites de retiro</li>
                <li>Excelente equipo de atencion al cliente</li>
              </ul>
            </div>

            <div className={styles.casinoCTAs}>
              <a className={styles.juegaCTA} href="#">
                Juega ahora!
              </a>

              <a className={styles.analisisCTA} href="#">
                Analisis del casino
              </a>
            </div>
          </div>

          <div className={styles.promotedCasinoBox}>
            <Image
              className={styles.casinoLogo}
              src="/favicon.ico"
              alt="Casino Logo"
              width={48}
              height={48}
            />
            <h3>Casino Manson</h3>

            <div className={styles.casinoPerks}>
              <ul>
                <li>Diseño muy atractivo</li>
                <li>Gran cantidad de metodos de pago</li>
                <li>Altos limites de retiro</li>
                <li>Excelente equipo de atencion al cliente</li>
              </ul>
            </div>

            <div className={styles.casinoCTAs}>
              <a className={styles.juegaCTA} href="#">
                Juega ahora!
              </a>

              <a className={styles.analisisCTA} href="#">
                Analisis del casino
              </a>
            </div>
          </div>

          <div className={styles.promotedCasinoBox}>
            <Image
              className={styles.casinoLogo}
              src="/favicon.ico"
              alt="Casino Logo"
              width={48}
              height={48}
            />
            <h3>Casino Manson</h3>

            <div className={styles.casinoPerks}>
              <ul>
                <li>Diseño muy atractivo</li>
                <li>Gran cantidad de metodos de pago</li>
                <li>Altos limites de retiro</li>
                <li>Excelente equipo de atencion al cliente</li>
              </ul>
            </div>

            <div className={styles.casinoCTAs}>
              <a className={styles.juegaCTA} href="#">
                Juega ahora!
              </a>

              <a className={styles.analisisCTA} href="#">
                Analisis del casino
              </a>
            </div>
          </div>

          <div className={styles.promotedCasinoBox}>
            <Image
              className={styles.casinoLogo}
              src="/favicon.ico"
              alt="Casino Logo"
              width={48}
              height={48}
            />
            <h3>Casino Manson</h3>

            <div className={styles.casinoPerks}>
              <ul>
                <li>Diseño muy atractivo</li>
                <li>Gran cantidad de metodos de pago</li>
                <li>Altos limites de retiro</li>
                <li>Excelente equipo de atencion al cliente</li>
              </ul>
            </div>

            <div className={styles.casinoCTAs}>
              <a className={styles.juegaCTA} href="#">
                Juega ahora!
              </a>

              <a className={styles.analisisCTA} href="#">
                Analisis del casino
              </a>
            </div>
          </div>
        </div>

        {/*         Below the fixed card begins    */}

        <div className={styles.fixedCard}>
          <div className={styles.fixedBox}>
            <form className={styles.subscritionForm}>
              <h3 className={styles.formHeader}>
                Subscribete para recibir descuentos y bonos
              </h3>
              <input
                className={styles.formInput}
                type="text"
                placeholder="Nombre"
              />
              <input
                className={styles.formInput}
                type="email"
                placeholder="Email"
              />
              <input
                className={styles.formInput}
                type="number"
                placeholder="Movil (opcional)"
              />
              <button className={styles.formBtn} type="submit">
                Suscribirse
              </button>
            </form>

            <div className={styles.fixedPromotedCasinosBox}>
              <h2 className={styles.fixedHeader}>Top 3 casinos</h2>

              {/** First Promoted Casino **/}
              <div className={styles.fixedPromotedCasinos}>
                <Image
                  src="/favicon.ico"
                  className={styles.casinoLogo}
                  width={48}
                  height={48}
                  alt="Mega promoted casino"
                />
                <h3>Casino Pagando Duro</h3>
                <a className={styles.juegaCTA} href="#">
                  Juega ahora!
                </a>
              </div>

              {/** Second Promoted Casino **/}
              <div className={styles.fixedPromotedCasinos}>
                <Image
                  src="/favicon.ico"
                  className={styles.casinoLogo}
                  width={48}
                  height={48}
                  alt="Mega promoted casino"
                />
                <h3>Casino Pagando Duro</h3>
                <a className={styles.juegaCTA} href="#">
                  Juega ahora!
                </a>
              </div>

              {/** Third Promoted Casino **/}
              <div className={styles.fixedPromotedCasinos}>
                <Image
                  src="/favicon.ico"
                  className={styles.casinoLogo}
                  width={48}
                  height={48}
                  alt="Mega promoted casino"
                />
                <h3>Casino Pagando Duro</h3>
                <a className={styles.juegaCTA} href="#">
                  Juega ahora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
