import React, { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";
import { Menu } from "semantic-ui-react";

function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  return (
    <nav className={navStyles.nav}>
      <Menu className={navStyles.innerNav} secondary>
        <Link href="/" passHref>
          <Menu.Item
            name="Inicio"
            onClick={(e) => {
              setActiveItem("Inicio");
              console.log("active", activeItem);
            }}
            className={navStyles.a}
            style={
              activeItem === "Inicio"
                ? { borderBottom: "3px solid rgb(0, 55, 255)" }
                : null
            }
          >
            Inicio
          </Menu.Item>
        </Link>
        <Link href="/casinos" passHref>
          <Menu.Item
            name="Casinos"
            onClick={(e) => {
              setActiveItem("Casinos");
              console.log("active", activeItem);
            }}
            className={navStyles.a}
            style={
              activeItem === "Casinos"
                ? { borderBottom: "3px solid rgb(0, 55, 255)" }
                : null
            }
          >
            ¿Cómo Escoger un Casino Online?
          </Menu.Item>
        </Link>
        <Link href="/ruleta" passHref>
          <Menu.Item
            name="Ruleta"
            onClick={(e) => {
              setActiveItem("Ruleta");
              console.log("active", activeItem);
            }}
            className={navStyles.a}
            style={
              activeItem === "Ruleta"
                ? { borderBottom: "3px solid rgb(0, 55, 255)" }
                : null
            }
          >
            ¿Cómo jugar ruleta?
          </Menu.Item>
        </Link>
        <Link href="/blackjack" passHref>
          <Menu.Item
            name="Blackjack"
            onClick={(e) => {
              setActiveItem("Blackjack");
              console.log("active", activeItem);
            }}
            className={navStyles.a}
            style={
              activeItem === "Blackjack"
                ? { borderBottom: "3px solid rgb(0, 55, 255)" }
                : null
            }
          >
            ¿Cómo jugar Blackjack?
          </Menu.Item>
        </Link>
        <Link href="/guias" passHref>
          <Menu.Item
            name="Guias"
            onClick={(e) => {
              setActiveItem("Guias");
              console.log("active", activeItem);
            }}
            className={navStyles.a}
            style={
              activeItem === "Guias"
                ? { borderBottom: "3px solid rgb(0, 55, 255)" }
                : null
            }
          >
            Caracteristicas de un casino online entretenido
          </Menu.Item>
        </Link>

        {/* <Menu.Menu position="right">
          <Menu.Item>
            <Input
              icon="search"
              color="rgb(252, 77, 158)"
              placeholder="Search Products..."
            />
          </Menu.Item>
        </Menu.Menu> */}
      </Menu>
    </nav>
  );
}

export default Navbar;
