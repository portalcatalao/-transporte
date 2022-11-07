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
                    <p onClick={showNavBar}>Empresa</p>
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

            <Link href="/fretamento">
              <p onClick={showNavBar}>Fretamento</p>
            </Link>

            <Link href="/turismo">
              <p onClick={showNavBar}>Turismo</p>
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
                    <p onClick={showNavBar}>Guia rápido do transporte urbano</p>
                  </Link>
                  <Link href="/sap">
                    <p onClick={showNavBar}>
                      Serviço de Atendimento do Passageiro
                    </p>
                  </Link>
                  <Link href="/ouvidoria">
                    <p onClick={showNavBar}>Ouvidoria</p>
                  </Link>
                  <Link href="/transporte-publico">
                    <p onClick={showNavBar}>
                      Transparência do transporte público
                    </p>
                  </Link>
                </ul>
              </li>
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
