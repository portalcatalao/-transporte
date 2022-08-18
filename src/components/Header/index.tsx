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
import Image from "next/image";

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
            <Image src="logo.svg" alt="Logotipo do Grupo Transduarte" />
          </Link>
          <nav ref={navRef} className="fixed-top">
            <Link href="/">
              <li>
                <Link href="/enterprise" onClick={showNavBar}>
                  <ul className={styles.menuItem}>
                    <p>A Empresa</p>
                    <ChevronDown />
                  </ul>
                </Link>

                <ul className={styles.subMenu}>
                  <Link href="/enterprise">
                    <p>Nossa história e valores</p>
                  </Link>

                  <Link href="/workWithUs">
                    <p>Trabalhe conosco</p>
                  </Link>

                  <Link href="/supplierRegistration">
                    <p>Cadastro de fornecedores</p>
                  </Link>
                </ul>
              </li>
            </Link>

            <Link href="/">
              <li>
                <Link href="/quickGuide" onClick={showNavBar}>
                  <ul className={styles.menuItem}>
                    <p>Transporte urbano</p>
                    <ChevronDown />
                  </ul>
                </Link>

                <ul className={styles.subMenu}>
                  <Link href="/quickGuide">
                    <p>Guia rápido</p>
                  </Link>
                  <Link href="/sapOmbudsman">
                    <p>SAP/Ouvidoria</p>
                  </Link>
                  <Link href="/publicTransportNumber">
                    <p>Número de transporte coletivo</p>
                  </Link>
                </ul>
              </li>
            </Link>

            <Link href="/charterAndTourism" onClick={showNavBar}>
              <p>Fretamento e Turismo</p>
            </Link>

            <Link href="/contact" onClick={showNavBar}>
              <p>Contato</p>
            </Link>

            <div className={styles.socialMedia}>
              <Link href="/" onClick={showNavBar}>
                <Facebook />
              </Link>

              <Link href="/" onClick={showNavBar}>
                <Instagram />
              </Link>

              <Link href="/" onClick={showNavBar}>
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
