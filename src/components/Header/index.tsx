import styles from "../Header/styles.module.scss";

import { Facebook, Instagram, Linkedin, Menu, X } from "react-feather";
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
            <img src="logo.svg" alt="Logotipo do Grupo Transduarte" />
          </Link>
          <nav ref={navRef} className="fixed-top">
            <Link href="/enterprise" onClick={showNavBar}>
              <p>A Empresa</p>
            </Link>

            <Link href="/urbanTransport" onClick={showNavBar}>
              <p>Transporte urbano</p>
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
