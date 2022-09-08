import styles from "../Header/styles.module.scss";

import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "react-feather";
import Link from "next/link";
import { useRef } from "react";

export default function Header() {
  const navRef = useRef(null);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Link href="/">
            <img
              src="logotestando.png
            "
              alt="Logotipo do Grupo Transduarte"
            />
          </Link>
          <nav ref={navRef} className="fixed-top">
            <Link href="/">
              <li>
                <Link href="/empresa">
                  <ul className={styles.menuItem}>
                    <p onClick={showNavBar}>A Empresa</p>
                    <ChevronDown />
                  </ul>
                </Link>

                <ul className={styles.subMenu}>
                  <Link href="/empresa">
                    <p onClick={showNavBar}>Nossa história e valores</p>
                  </Link>

                  <Link href="/trabalhe-conosco">
                    <p onClick={showNavBar}>Trabalhe conosco</p>
                  </Link>

                  <Link href="/cadastro-fornecedores">
                    <p onClick={showNavBar}>Cadastro de fornecedores</p>
                  </Link>
                </ul>
              </li>
            </Link>

            <Link href="/">
              <li>
                <Link href="/guia-rapido">
                  <ul className={styles.menuItem}>
                    <p onClick={showNavBar}>Transporte urbano</p>
                    <ChevronDown />
                  </ul>
                </Link>

                <ul className={styles.subMenu}>
                  <Link href="/guia-rapido">
                    <p onClick={showNavBar}>Guia rápido</p>
                  </Link>
                  <Link href="/sap-ouvidoria">
                    <p onClick={showNavBar}>SAP/Ouvidoria</p>
                  </Link>
                  <Link href="/tela-em-construcao">
                    <p onClick={showNavBar}>Número de transporte coletivo</p>
                  </Link>
                </ul>
              </li>
            </Link>

            <Link href="/fretamento-turismo">
              <p onClick={showNavBar}>Fretamento e Turismo</p>
            </Link>

            <Link href="/contato">
              <p onClick={showNavBar}>Contato</p>
            </Link>

            <div className={styles.socialMedia}>
              <Link href="/">
                <Facebook />
              </Link>

              <Link href="/">
                <Instagram />
              </Link>

              <Link href="/">
                <Linkedin />
              </Link>
            </div>

            <button onClick={showNavBar}>
              <X />
            </button>
          </nav>
          <button onClick={showNavBar}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
